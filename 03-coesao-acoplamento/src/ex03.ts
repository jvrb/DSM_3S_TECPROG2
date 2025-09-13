class Item {
    public descricao: string
    public valor: number
    public quantidade: number

    constructor(desc: string, val: number, quant: number){
        this.descricao = desc
        this.valor = val
        this.quantidade = quant
    }
}

class Carrinho {
    public itens: Item[] = []

    adicionarItem(item: Item) {
        this.itens.push(item)
    }

    removerItem(itemParam: Item) {
        const remove = this.itens.filter((item) => item != itemParam)
        this.itens = remove
    }

    calcularTotal(): number{
        let total: number = 0
        this.itens.forEach(item => {
            total += item.valor
        })
        return total
    }
}

class Pagamento{
    processarPagamento(total: number, forma: string){
        console.log(`Pagamento de R$${total} em ${forma}, processado com sucesso!`)
    }
}


const carrinhoc = new Carrinho()
let item = new Item("Camiseta", 50, 2)
carrinhoc.adicionarItem(item)
item = new Item("Calça", 130, 1)
carrinhoc.adicionarItem(item)
item = new Item("Meia", 20, 3)
carrinhoc.adicionarItem(item)
const total = carrinhoc.calcularTotal()
console.log(total)
const pagamento = new Pagamento()
pagamento.processarPagamento(total, "Dinheiro")