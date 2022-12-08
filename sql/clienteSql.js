import { knexConfig } from '../sql/options.js'
import crearKnex from 'knex'

const clienteSql = crearKnex(knexConfig)

export {
    clienteSql
}