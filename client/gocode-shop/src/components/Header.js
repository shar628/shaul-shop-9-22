import React from 'react'
import FilterBy from './FilterBy'
import './header.css'
import SortBy from './SortBy'
// import { useContext } from 'react'
// import MyContext from '../MyContext'
import { useNavigate } from "react-router-dom";

const Header = ({ products }) => {

    // const { productsData } = useContext(MyContext);
    const navigate = useNavigate()

    return (
        <div className="product-filter">
            <div>
                <h1>Welcome to our big store </h1>
                <button onClick={() => navigate('/cart')}>Cart</button>
            </div>
            <div className="sort" >
                <FilterBy products={products} />
                <SortBy />
            </div>

        </div>
    )
}

export default Header