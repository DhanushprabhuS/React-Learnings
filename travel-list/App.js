import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App(){
    const [items,setItems] = useState([]);

    function handleAddItems(item){
        setItems((currItems)=>[...currItems,item]);
    }

    function handleClearItems(){
        if(window.confirm("Are you sure to clear all of your items ?"))
        setItems([]);
    }

    function handleRemoveItems(id){
        setItems((currItems)=>currItems.filter(item=>item.id!==id));
    }

    function handleIsItemsPacked(id){
        setItems((currItems)=>currItems.map((item)=>
        item.id===id?{...item,packed:!item.packed}:item
    ));
    }
    
    return <div className="app">
        <Logo/>
        <Form onAddItems={handleAddItems}/>
        <PackingList items={items} onRemoveItems={handleRemoveItems} onPackedItems={handleIsItemsPacked} onClearItems={handleClearItems}/>
        <Stats items={items}/>
    </div>

}

