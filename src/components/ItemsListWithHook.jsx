
import React, { useState } from 'react';
import { SearchPlugin } from './SearchPlugin';


export const ItemsListWithHook = (props) => {
    const [items, setItems] = useState(props.data.items)

    const filterList = (text) => {
        let filteredList = props.data.items.filter( item => {
            return item.toLowerCase().search(text.toLowerCase())!== -1
        })
        setItems(filteredList)
    }

    return ( <div> 
            <h2>{props.data.title}</h2>
            <SearchPlugin filter={filterList} setItems={setItems} />
            <ul>
                    {
                        items.map(item => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </div>
    )
}