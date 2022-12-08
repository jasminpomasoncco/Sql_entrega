const dbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'galeria123',
    database: 'ecommerce'
}

export const knexConfig = {
    client: 'sqlite3',
    connection: dbConfig
}