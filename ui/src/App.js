
import { useEffect, useState } from 'react';
import ProductTable from './ProductTable';
import SearchRow from './SearchRow';
import ProductRow from './ProductRow';
import ProductCategory from './ProductCategory';
import data from './data.json';
//Container of the whole app.

function App() {
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState("");
    const [stockedOnly, setStockedOnly] = useState(false);
    useEffect(()=>{
        loadItems()
    }, []);

    function loadItems() {
        let Products = []
        let lastCategory = null;
        data.forEach((ele) => {
            if (lastCategory!==ele.category){
                Products.push(
                    <ProductCategory
                        key={ele.category}
                        category={ele.category}
                    />
                )
            }
            if (ele.name.toLowerCase().includes(input.toLowerCase()))
                if(stockedOnly & ele.stocked | !stockedOnly)
                Products.push(
                    <ProductRow
                        product={ele}
                        key={ele.name}
                    />
                )
            
            lastCategory = ele.category;
        });
        setProducts(Products);
    }


    return (
        <div className="container">
            <SearchRow 
                setInput={setInput}
                setStockedOnly={setStockedOnly}
                filter={loadItems}
            />
            <ProductTable 
                products={products}
            />
        </div>
    )
}
export default App;