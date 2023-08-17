
import React,{useState} from 'react';

const ItemCount = () =>{
  
    //Estado para armazenar valor
    const [numAtual,setNumAtual]=useState(1);
    const [mensagem,setMensagem]=useState('');

    //Função para somar
    const somar = () => {
        setNumAtual(numAtual + 1);
        setMensagem("")
    };

    //Função para subtrair
    const subtrair = () => {
        setNumAtual(numAtual - 1);
        setMensagem("")
    };

    //Função para adicionar ao carrinho
    const addCart = () => {
        setNumAtual(1);
        setMensagem("Produto adicionado ao carrinho");

        
    };
    
    return (
  
        <div>
            {numAtual}
            <button onClick={subtrair}>-</button>
            <button onClick={somar}>+</button>
            <button onClick={addCart}>Adicionar ao carrinho</button>
            <p>{mensagem}</p>
        </div> 
  
    );
};
  
export default ItemCount;