import React from 'react'
import styled from "styled-components"
import ContainerFiltro from '../ContainerFiltro/ContainerFiltro'
import ContainerProdutos from '../ContainerProdutos/ContainerProdutos'
import ContainerCarrinho from '../ContainerCarrinho/ContainerCarrinho'

const MainContainer = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    height: 100vh;
`
const arrayDeProdutos = [
    { id: 1,
    name: "Sputnik-1" ,
    price: 500.00,
    imgURL: "https://img2.gratispng.com/20180711/cbe/kisspng-sputnik-1-satellite-sputnik-2-sputnik-program-direct-message-5b46c72f40f7a8.2412530515313651672661.jpg"},
    
    { id: 2,
    name: "DMSPF 13",
    price: 200.00,
    imgURL: "https://spacenews.com/wp-content/uploads/2015/02/DMSP-USAF-879x485.jpg" },
    
    { id: 3,
    name: "Telescópio Hubble",
    price: 400.00,
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/The_Hubble_Space_Telescope_in_orbit.tif/lossy-page1-800px-The_Hubble_Space_Telescope_in_orbit.tif.jpg" },
    
    { id: 4,
    name: "SCD1" ,
    price: 900.00,
    imgURL: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/09/SCD-1.jpg/300px-SCD-1.jpg" },
    
    { id: 5,
    name: "International Space Station",
    price: 950.00,
    imgURL: "https://d2v9ipibika81v.cloudfront.net/uploads/sites/32/2016/10/ISS_orbit-1068x729-1068x684.jpg"},
    
    { id: 6,
    name: "SpaceX",
    price: 210.0,
    imgURL: "https://ciberia.com.br/wp-content/uploads/2017/05/612cd3bca888734ca843c6eb30f0e089-783x450.jpeg?x16490"},
    
    { id: 7,
    name: "Explorer1" ,
    price: 120.0,
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/7/73/Explorer1.jpg"},
    
    { id: 8,
    name: "Corona",
    price: 150.00,
    imgURL: "https://www.theblackvault.com/documentarchive/wp-content/uploads/2015/03/SI-97-15881-10h.jpg"},
]

class ContainerEcommerce extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaProdutos: arrayDeProdutos,
            listaCarrinho: [0],
        }
    }

    filtrarProdutos = (arg1, arg2, arg3) => {
        const listaProdutosCopia = arrayDeProdutos
        let listaProdutosFiltrada = listaProdutosCopia.filter( cadaProduto => {
            return cadaProduto.price > arg1
        })
        listaProdutosFiltrada = listaProdutosFiltrada.filter( cadaProduto => {
            return cadaProduto.price < arg2
        })
        if (arg3 !== "") {
            listaProdutosFiltrada = listaProdutosFiltrada.filter( cadaProduto => {
                /* busca convertendo o campo de busca e o argumento para minúsculas */
                /* [link: https://stackoverflow.com/questions/35248292/reactjs-tolowercase-is-not-a-function] */
                return cadaProduto.name.toLocaleLowerCase().includes(arg3.toLocaleLowerCase())
        })}
        this.setState({listaProdutos: listaProdutosFiltrada})
    }

    listarItensCarrinho = (idProduto) => {
        console.log("id", idProduto)
        const listaCarrinhoCopia = [...this.state.listaCarrinho]
        debugger
        if (listaCarrinhoCopia === [0]) {
            const indexDoItem = arrayDeProdutos.findIndex (produto => {
                return produto.id === idProduto
            })
            const novoItemCarrinho =
                { id: arrayDeProdutos[indexDoItem].id,
                    quantidade: 1,
                    nome: arrayDeProdutos[indexDoItem].nome
                }
            listaCarrinhoCopia.push(novoItemCarrinho)
        } else {
            for (let item of listaCarrinhoCopia) {
                if (item.id === idProduto) {
                    item.quantidade += 1
                } else {
                    const indexDoItem = arrayDeProdutos.findIndex (produto => {
                        return produto.id === idProduto
                    })
                    const novoItemCarrinho = {id: arrayDeProdutos[indexDoItem].id,
                        quantidade: 1,
                        nome: arrayDeProdutos[indexDoItem].nome}
                    listaCarrinhoCopia.push(novoItemCarrinho)
                }
            }
        }
        this.setState({listaCarrinho: listaCarrinhoCopia})
        console.log(this.state.listaCarrinho)
    }

    render(){
        return(
            <MainContainer>
                <ContainerFiltro transporteDeFiltros={this.filtrarProdutos} listaDosProdutos={this.state.listaProdutos} />
                <ContainerProdutos mostrarItensCarrinho ={this.listarItensCarrinho} listaDosProdutos={this.state.listaProdutos}  />
                <ContainerCarrinho listaItensCarrinho={this.state.listaCarrinho} />
            </MainContainer>
        )
    }
}

export default ContainerEcommerce;