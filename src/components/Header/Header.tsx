import Logo from '../../assets/vans.png';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    const { state } = useCart()

    return (
        <header>
            <div className='cabecera'>
                <img src={Logo} alt="Logo Vans" />
                <span className='brand'>Shopping Cart</span>
            </div>
            <div className='cabecera__buttons'>
                <Link to={'/'}><button>Home</button></Link>
                <Link to={'cart'}><button>Cart</button></Link>
            </div>
            <div>
                <Link to={'cart'} style={{textDecoration:'none'}}>
                    <span className='bi bi-cart-fill' style={{ fontSize: '1.5rem', color: 'black'}}>
                        <span className='count'>{state.cartList.length}</span>
                    </span>
                </Link>
            </div>
        </header>
    )
}
