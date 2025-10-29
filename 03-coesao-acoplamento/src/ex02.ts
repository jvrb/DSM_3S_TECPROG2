class CarrinhoDeCompras {
	private itens: string[] = [];


	adicionarItem(item: string) {
		this.itens.push(item);
	}

	removerItem(itemParametro: string) {
		const newList = this.itens.filter((item) => item != itemParametro);
		this.itens = newList;
	}

	imprimirLista() {
		this.itens.forEach((item) => {
			console.log(item);
		});
	}
}

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem("Camiseta");
carrinho.adicionarItem("Calça");
carrinho.adicionarItem("Meia");
carrinho.removerItem("Camiseta");
carrinho.imprimirLista();
