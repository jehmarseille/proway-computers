export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse Gamer", preco: 499.00, descricaoPreco: "À vista no PIX", quantidadeEstoque: 2, imagem: "../assets/images/mouse_razer.jpg"},
    { id: 2, descricao: "Mouse Gamer RGB", preco: 199.90, descricaoPreco: "À vista no PIX", quantidadeEstoque: 9, imagem: "../assets/images/mouse_redragon.jpg"},
    { id: 3, descricao: "Mouse Simples", preco: 5.00, descricaoPreco: "À vista no PIX", quantidadeEstoque: 8, imagem: "../assets/images/mouse_simples.jpg"},
    { id: 4, descricao: "Mousepad Cat", preco: 29.90, descricaoPreco: "À vista no PIX", quantidadeEstoque: 7, imagem: "../assets/images/mousepad_cat.jpg"},
    { id: 5, descricao: "Mousepad simples", preco: 15.90, descricaoPreco: "À vista no PIX", quantidadeEstoque: 7, imagem: "../assets/images/mousepad_simples.jpg"},
    { id: 6, descricao: "Monitor", preco: 899.00, descricaoPreco: "À vista no PIX", quantidadeEstoque: 7, imagem: "../assets/images/monitor.jpg"},
    { id: 7, descricao: "Gabinete", preco: 299.90, descricaoPreco: "À vista no PIX", quantidadeEstoque: 7, imagem: "../assets/images/gabinete.jpg"},
    { id: 8, descricao: "Teclado simples", preco: 899.00, descricaoPreco: "À vista no PIX", quantidadeEstoque: 7, imagem: "../assets/images/teclado_multilaser.jpg"}
]