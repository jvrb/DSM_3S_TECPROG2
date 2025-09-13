class Contato {
	public nome: string;
	public telefone: string;
	public email: string;

	constructor(n: string, tel: string, e: string) {
		this.nome = n;
		this.telefone = tel;
		this.email = e;
	}
}

class Agenda {
	private contatos: Contato[] = [];

	adicionarContato(c: Contato) {
		this.contatos.push(c);
	}

	removerContato(c: Contato) {
		const newAgenda = this.contatos.filter((contato) => {
			contato != c;
		});
	}

	imprimirAgenda() {
		this.contatos.forEach((contato) => {
			console.log(`Nome: ${contato.nome} | Telefone: ${contato.telefone} | E-mail: ${contato.email}`);
		});
	}
}

const contato1 = new Contato("João", "987456321", "joao@joao.com");
const agenda1 = new Agenda();
agenda1.adicionarContato(contato1);
const contato2 = new Contato("Vitor", "123456789", "vitor@vitor.com");
agenda1.adicionarContato(contato2);
agenda1.imprimirAgenda();
