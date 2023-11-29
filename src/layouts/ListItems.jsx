import ListItem from "../components/ListItem";
import { useState } from "react";
import Filter from "../components/Filter";
const ListItems = function({items,onItemDelete,onItemUpdate,handelClearList}){
  const [sortBy, setSortBy] = useState("input");
  let sortedList;
  console.log(sortBy);
  if(sortBy === "input") sortedList = items;
  if(sortBy === "packed") sortedList = items.slice().sort((a,b) => Number(a.isPacked)-Number(b.isPacked));
  console.log(sortedList);
    return<>
     <ul className="ListItems">
        {sortedList.map(({id, data,packed}) => 
        <ListItem key={id} id={id} content={data}
         isPacked={packed}
        onItemDelete={onItemDelete}
        onItemUpdate={onItemUpdate}
          />)}
        {/* <li><ListItem content="Hi"/></li> */}
        {/* <li><ListItem content="Hello"/></li> */}
        
    </ul>
    <Filter sortBy={sortBy} setSortBy={setSortBy} handelClearList={handelClearList}/>
    </>

}
export default ListItems;