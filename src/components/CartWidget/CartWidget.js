import CartIcon from './CartIcon.png';

const CartWidget = () =>{
    return (
  
        <div className="header__logo" href="/">
            <img src={CartIcon} alt="Carrinho" width="50px" height="50px" />
        </div> 
  
    );
};
  
export default CartWidget;