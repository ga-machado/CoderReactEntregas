
import React,{useState} from 'react';
import Item from '../Item/Item.js';

const Itens = [
    { id: 1, title: 'Kit de Pratos', price: 100, pictureUrl: 'https://m.media-amazon.com/images/I/71X-2b8XV1L._AC_UF894,1000_QL80_.jpg'},
    { id: 2, title: 'Caneca', price: 25, pictureUrl: 'https://images.tcdn.com.br/img/img_prod/483355/caneca_ceramica_off_white_x_20304_1_27d038c1a691b0d67ddcb0fc61f7d854_20220929125222.jpg'},
    { id: 3, title: 'Escultura', price: 60, pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0neGSu7NUvVOCVqM6JSFvClfxQMih5I0yNbth0EqQhEcUY1TWFw0kl0s1V44z2OAP5c&usqp=CAU'}
];

function ItemList() {
    return (
        <div>
            {Itens.map( (produto) => {
                return <Item key={produto.id} title={produto.title} price={produto.price} pictureUrl={produto.pictureUrl}/>
            } )}
        </div>
    )

};

export default ItemList;