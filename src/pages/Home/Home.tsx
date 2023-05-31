import { productos } from '../../hooks/mockFetch';
import { useState, useEffect } from 'react';
import { Card } from '../../components';
import './Homes.css';


interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
}

export const Home = () => {
    const [products, setProducts] = useState<Product[]>([])
    

    useEffect(() =>
    setProducts(productos)
    , [])

    return (
        <main>
            <div className='itemList'>
                {products && products.map((product: Product, id:number) => <Card product={product} key={id}/>)}
            </div>
        </main>
    )
}
