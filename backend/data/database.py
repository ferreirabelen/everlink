import sqlite3
from data.filtros_catalogo import TITULOS_EXCLUIDOS

RUTA_DB = "data/everlink.db"


def obtener_conexion():
    conexion = sqlite3.connect(RUTA_DB)
    conexion.row_factory = sqlite3.Row
    conexion.execute("PRAGMA foreign_keys = ON")

    return conexion


def crear_tablas():
    conexion = obtener_conexion()

    conexion.executescript("""
        CREATE TABLE IF NOT EXISTS artists (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            mbid TEXT NOT NULL UNIQUE
        );

        CREATE TABLE IF NOT EXISTS songs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            artist_id INTEGER NOT NULL,
            titulo TEXT NOT NULL,
            titulo_normalizado TEXT NOT NULL,

            FOREIGN KEY (artist_id)
                REFERENCES artists(id),

            UNIQUE (artist_id, titulo_normalizado)
        );

        CREATE TABLE IF NOT EXISTS recordings (
            mbid TEXT PRIMARY KEY,
            song_id INTEGER NOT NULL,

            FOREIGN KEY (song_id)
                REFERENCES songs(id)
        );
    """)

    conexion.commit()
    conexion.close()


def insertar_artista(nombre, mbid):
    conexion = obtener_conexion()

    conexion.execute("""
        INSERT OR IGNORE INTO artists (nombre, mbid)
        VALUES (?, ?)
    """, (nombre, mbid))

    conexion.commit()
    conexion.close()


def cargar_catalogo(artista_id, catalogo):

    conexion = obtener_conexion()

    titulos_excluidos = {
        titulo.casefold().strip()
        for titulo in TITULOS_EXCLUIDOS
    }

    for recording_mbid, titulo in catalogo.items():
        titulo_limpio = titulo.strip()
        titulo_normalizado = titulo_limpio.casefold()

        if titulo_normalizado in titulos_excluidos:
            continue

        conexion.execute("""
            INSERT OR IGNORE INTO songs (
                artist_id,
                titulo,
                titulo_normalizado
            )
            VALUES (?, ?, ?)
        """, (artista_id, titulo_limpio, titulo_normalizado))

        cancion = conexion.execute("""
            SELECT id
            FROM songs
            WHERE artist_id = ?
            AND titulo_normalizado = ?
        """, (artista_id, titulo_normalizado)).fetchone()

        conexion.execute("""
            INSERT OR IGNORE INTO recordings (mbid, song_id)
            VALUES (?, ?)
        """, (recording_mbid, cancion["id"]))

    conexion.commit()
    conexion.close()


def obtener_canciones(artista_id):
    conexion = obtener_conexion()

    canciones = conexion.execute("""
        SELECT titulo
        FROM songs
        WHERE artist_id = ?
    """, (artista_id,)).fetchall()

    conexion.close()

    return canciones