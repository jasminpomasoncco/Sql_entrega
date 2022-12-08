import { knexConfig } from '../sql/knexConfig.js'
import crearKnex from 'knex'

const clienteSql = crearKnex(knexConfig)

export {
    clienteSql
}