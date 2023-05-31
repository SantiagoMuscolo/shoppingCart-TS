import { useCart } from "../../context/CartContext"
import './Cart.css';

export const Cart = () => {
const { state, removeFromCart } = useCart()

    return (
        <main>
            <div className="Container">
                <div>
                    <h2>Cart Items: {state.cartList.length} / ${state.total}</h2>
                </div>
                <div className="cards">
                    {state.cartList.length > 0 && state.cartList.map(product => {
                        return(
                            <div className="Item" key={product.id}>
                                <img src={product.img} alt="" />
                                <p>{product.name}</p>
                                <p>$ {product.price}</p>
                                <button className="remove" onClick={() => removeFromCart(product)}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
