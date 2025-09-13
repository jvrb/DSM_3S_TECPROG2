var Pessoa = /** @class */ (function () {
    function Pessoa(nome, email, nasc) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }
    Pessoa.prototype.imprimir = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("Email: ".concat(this.email));
        console.log("Data Nasc.: ".concat(this.nasc));
        console.log("Idade: ".concat(this.idade(this.nasc), " anos"));
        console.log("Anos Bissextos: ".concat(this.numBissexto()));
    };
    Pessoa.prototype.idade = function (nasc) {
        var hoje = new Date();
        var ano = parseInt(nasc.substring(6, 20));
        var mes = parseInt(nasc.substring(3, 5)) - 1;
        var dia = parseInt(nasc.substring(0, 2));
        var datan = new Date(ano, mes, dia);
        var idade = hoje.getFullYear() - datan.getFullYear();
        var m = hoje.getMonth() - datan.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < datan.getDate())) {
            idade--;
        }
        return idade;
    };
    Pessoa.prototype.numBissexto = function () {
        var ano = parseInt(this.nasc.substring(6, 10));
        var hoje = new Date();
        var anoatual = hoje.getFullYear();
        var quant = 0;
        for (var x = ano; x <= anoatual; x++) {
            if (DataUtil.isBissexto(x)) {
                // console.log(x);
                quant++;
            }
        }
        return quant;
    };
    return Pessoa;
}());
var DataUtil = /** @class */ (function () {
    function DataUtil() {
    }
    DataUtil.isBissexto = function (ano) {
        if (ano % 400 == 0) {
            return true;
        }
        else if (ano % 4 == 0 && ano % 100 != 0) {
            return true;
        }
        return false;
    };
    return DataUtil;
}());
var cliente = new Pessoa("Joao", "joao@email.com", "05/09/1998");
cliente.imprimir();
