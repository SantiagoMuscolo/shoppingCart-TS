import { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartReducer } from '../reducer/CartReducer';

interface CartProviderProps {
    children: ReactNode;
}

type CartItem = {
    id: number;
    name: string;
    price: number;
    img: string;
};

type CartState = {
    cartList: CartItem[];
    total: number;
};

type CartContextType = {
    state: CartState;
    addToCart: (product: CartItem) => void;
    removeFromCart: (product: CartItem) => void;
};

const initialState: CartState = {
    cartList: [],
    total: 0,
};

const CartContext = createContext<CartContextType>({
    state: initialState,
    addToCart: () => { },
    removeFromCart: () => { },
});

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (product: CartItem) => {
        const updateCartList = state.cartList.concat(product);
        updateTotal(updateCartList);

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateCartList
            }
        });
    };

    const removeFromCart = (product: CartItem) => {
        const updateCartList = state.cartList.filter((p: CartItem) => p.id !== product.id);
        updateTotal(updateCartList);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updateCartList
            }
        });
    };

    const updateTotal = (products: CartItem[]) => {
        let total = 0;
        products.forEach((product: CartItem) => (total += product.price));

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        });
    };

    const value: CartContextType = {
        state,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
