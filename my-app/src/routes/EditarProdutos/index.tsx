import { useParams } from "react-router"

///criando lista ficticia de produtos
const listaProdutos = [   
  { id: 1, nome: "Headset Gamer Sem Fio", preco: 299.90,descricao: "Áudio espacial 7.1, microfone com cancelamento de ruído e bateria de até 20 horas." },

  { id: 2, nome: "Teclado Mecânico RGB", preco: 249.00,descricao: "Switches azuis táteis, layout compacto 60% e iluminação RGB customizável."},

  { id: 3, nome: "Smartwatch Fitness", preco: 189.50,descricao: "Monitoramento de frequência cardíaca, contador de passos e resistência à água 5ATM."},

  { id: 4, nome: "Câmera Instantânea Vintage", preco: 420.00, descricao: "Impressão de fotos na hora com ajuste automático de exposição e lente macro integrada."}, 

  { id: 5, nome: "Mochila Ergonômica para Notebook",preco: 159.90, descricao: "Compartimento acolchoado até 15.6'', tecido impermeável e entrada USB externa."} 
]


export default function EditarProdutos() {
    //para alterar o título da página
    document.title = "Editar Produtos"

    //receber o parâmetro de id 
    const { id } = useParams<string>();

    const produto = listaProdutos.find((p)=> p.id === Number(id))
    
  return (
    <main>
        <h2>Editar Produtos</h2>
        {produto ? (
          <div>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p>Preço: {produto.preco}</p>
          </div>
        ): <h3>Produto não encontrado!</h3> }

    </main>
  )
}
