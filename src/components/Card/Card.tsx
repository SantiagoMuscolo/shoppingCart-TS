import { useCart } from '../../context/CartContext';
import { useState, useEffect } from 'react';
import './Card.css';

interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
}

interface CardProps{
    product: Product;
}


export const Card:React.FC<CardProps> = ({ product }) => {
    const [isInCart, setIsInCart] = useState<boolean>(false)
    const { state, addToCart, removeFromCart } = useCart()

    useEffect(() => {
    const productIsInCart = state.cartList.find(ct => ct.id === product.id)

    if(productIsInCart){
        setIsInCart(true);
    }else{
        setIsInCart(false);
    }
    }, [state.cartList])
    

    return (
        <div className='card'>
            <img src={product.img} alt='' />
            <h4>{product.name}</h4>
            <p>$ {product.price}</p>
            {isInCart ? (
            <button className='remove' onClick={() => removeFromCart(product)}>Remove</button>
            ) : (
            <button onClick={() => addToCart(product)}>Add</button>
            )
            }
        </div>
    );
};
