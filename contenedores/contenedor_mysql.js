

class ContenedorMysql {
    constructor(clienteMysql, tabla) {
        this.cliente = clienteMysql;
        this.tabla = tabla;
    }

    async guardar(data) {
        await this.cliente(this.tabla).insert(data);
    }

    async recuperar() {
        return await this.cliente(this.tabla).select();
    }
}

module.exports = ContenedorMysql