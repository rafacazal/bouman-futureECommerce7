import React from 'react'
import styled from "styled-components"

const MainContainer = styled.div`
    border: 1px dashed orange;
    width: 24%;
    margin-bottom: 10px;
    padding: 4px;
`

const ImagemProduto = styled.img`
    width: 100%;
    height: 180px;
`

const BotaoAdicionar = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    padding: 8px 0;
    border: none;
`

function ProdutoUnico(props){
    // const aoClicarAdicionar = () => {
    //     const produto = {props.produtosParaExibir.id}
    //     props.mostrarCarrinho(produto)
    // }
    return (
        <MainContainer>
            <ImagemProduto src={props.produtosParaExibir.imgURL}/>
            <p>{props.produtosParaExibir.name}</p>
            <p>R${props.produtosParaExibir.price}</p>
            <BotaoAdicionar onClick={() => {
                console.log("cliquei", props.produtosParaExibir.id)
                props.mostrarCarrinho(props.produtosParaExibir.id)}}>Adicionar ao Carrinho</BotaoAdicionar>
        </MainContainer>
    )
}

export default ProdutoUnico;