import { Home, Cart } from "../pages"
import { Route, Routes } from 'react-router-dom';

export const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
    )
}
