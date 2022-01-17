class Tabelas {
    init(conexao) {
        this.conexao = conexao;

        this.criarAtendimentos();
        this.criarServicos();
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(50), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log('tabela de atendimentos criada com sucesso')
            }
        })
    }

    criarServicos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Servicos (id int NOT NULL AUTO_INCREMENT, nomeServico varchar(20) NOT NULL, preco varchar(20) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (err) => {
            if(err) {
                console.log(err)
            } else {
                console.log('tabela de servicos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas;