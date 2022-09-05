import React, { useContext } from 'react'
import './filterBy.css'
import MyContext from '../MyContext'

const FilterBy = ({ products }) => {

    const { productsData, filterProductsByCategory } = useContext(MyContext)
    // console.log(productsData, filterProductsByCategory);
    const categories = productsData.map(p => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)
    // console.log(categories);
    // const option = categories.map((cate) => (
    //     <option key={cate} value={cate}>{cate}</option>
    // ))
    return (
        <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={(e) => filterProductsByCategory(e.target.value)} >
                <option value={'/'}>all Products</option>
                {categories && categories.map(cat => <option value={cat} >{cat} </option>)}
            </select>
            {/* <select onChange={(e) => console.log(e)}>{option}    </select> */}
        </div >
    )
}

export default FilterBy