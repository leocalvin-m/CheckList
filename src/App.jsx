import './App.css'
import Footer from './components/Footer';
import Header from './layouts/Header';
import ListItems from './layouts/ListItems';
import {useState} from "react";





function App() {
 const [items, setItems] = useState([]);



 const handleDataItems = function(newItem){

  setItems((items) => {
    return [
      ...items,
      newItem
    ];
  
  })

}
const handelDeleteItem = function(id){

  setItems((items) => items.filter(item => item.id != id));
}

const handelUpdateItem = function(id){
  setItems(items => items.map(item => item.id === id ? {...item,isPacked:!item.isPacked}:item))
}

const handelClearList = function(){
  setItems([]);
}

  return (
    <>
    <Header handleDataItems={handleDataItems}/>
    <ListItems items={items} onItemDelete={handelDeleteItem} onItemUpdate={handelUpdateItem} handelClearList={handelClearList}/>
    
    <Footer items={items}/>
    </>
  )
}

export default App
