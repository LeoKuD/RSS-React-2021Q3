import React from 'react'
import ReactDOM from 'react-dom';
import { ItemsListWithHook } from './components/ItemsListWithHook';
import './styles.css'

 
const propsValues = {
    title: "Список смартфонов",
    items: [
        "Samsung Galaxy Note20", 
        "Apple iPhone 12 Pro", 
        "Google Pixel 5", 
        "Huawei P40 Pro", 
        "OnePlus 8 Pro", 
        "Asus Zenfone 7 Pro",
        "Xiaomi Note 7",
        "iPhone 12"
    ]
};
 
ReactDOM.render(
    <ItemsListWithHook data={propsValues} />,
    document.getElementById("app")
)