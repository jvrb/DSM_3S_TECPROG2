class ContaBancararia {
	private saldo: number;

	constructor(valor: number = 0) {
		this.saldo = valor;
	}

	getSaldo() {
		console.log(`Saldo da conta R$${this.saldo}`);
	}

	depositar(valor: number) {
		this.saldo += valor;
	}

	sacar(valor: number) {
		if (valor > this.saldo) {
			console.log(`Saldo Insuficiente`);
		} else {
			this.saldo -= valor;
		}
	}
}

class Cliente {
	private nome: string;
	private cpf: string;
	private nasc: Date;
	private nomemae: string;
	private conta: ContaBancararia;

	constructor(nome: string, cpf: string, nasc: Date, nomemae: string, conta: ContaBancararia) {
		this.nome = nome;
		this.cpf = cpf;
		this.nasc = nasc;
		this.nomemae = nomemae;
		this.conta = conta;
	}

	depositarSaldo(valor: number) {
		this.conta.depositar(valor);
	}

	sacarValor(valor: number) {
		this.conta.sacar(valor);
	}

	getSaldoCliente() {
		this.conta.getSaldo();
	}
}

const conta1 = new ContaBancararia();
const cliente1 = new Cliente("João", "47357512894", new Date("09/05/1998"), "Roselene", conta1);
cliente1.depositarSaldo(100);
cliente1.getSaldoCliente();
cliente1.sacarValor(50);
cliente1.getSaldoCliente();
cliente1.sacarValor(60);
cliente1.getSaldoCliente();
