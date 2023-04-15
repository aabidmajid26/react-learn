import { useEffect, useState } from "react";

export default function Search() {
    const [fruits, setFruits] = useState([]);
    const [veg, setVeg] = useState([]);
    const [lastSearch, setLastSearch] = useState(null);

    useEffect(() => {
        SearchItems();
    }, []);

    function SearchItems(){
        let Fruits = [];
        let Veg = [];
        const searchField = document.getElementById('search-field');
        const value = searchField ? searchField.value : ''
        const onlyStocked = document.getElementById("checkbox").checked;
        // console.log(stocked, 'stocked');
        // if (value === lastSearch){return}
        setLastSearch(value);
        data.forEach(ele => {
            if (!ele.stocked)
                if (onlyStocked) return
            if (ele.name.toLowerCase().includes(value.toLowerCase()))
                if (ele.category === 'Fruits'){
                    Fruits.push(
                        <li 
                            key={ele.name}
                            style={
                                {color: ele.stocked?'black':'red'}
                            }
                        >
                            {ele.name} - {ele.price}
                        </li>
                    )
                }else{
                    Veg.push(
                        <li 
                            key={ele.name}
                            style={
                                {color: ele.stocked?'black':'red'}
                            }
                        >
                            {ele.name} - {ele.price}
                        </li>
                    )
                }
        });
        setFruits(Fruits);
        setVeg(Veg);
    }

    const data = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
      ]
    return (
        <>
        <h1>Welcome to Fruit Search!</h1>
        <input id="search-field" type="text" placeholder="Enter search text ... " onKeyUp={SearchItems}/>
        <input type="checkbox" id="checkbox" onClick={SearchItems} /> <span>Display only stocked items</span>
        <hr />
        {fruits.length>0? `Fruits:`: ``}
        <ol>
            {fruits}
        </ol>
        {veg.length>0? `Vegetables:`: ``}
        <ol>
            {veg}
        </ol>
        </>
    )
}