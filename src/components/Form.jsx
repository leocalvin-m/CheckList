import { useState } from "react";

const Form = function({handleDataItems}){
const[description, setDescription] = useState("");

const submitHandler = function(e){
e.preventDefault();

const newItem = {
  id:Date.now(),
  data:description,
  isPacked:false
}
console.log(newItem);
handleDataItems(newItem);
setDescription("");

}


const inputHandler = function(e){
setDescription(e.target.value);
}


return<form className="ListForm" onSubmit={submitHandler}>
<input type="text" className="ListFormInp" value={description} onChange={inputHandler}/> 
<button className="ListFormBtn">ADD</button>   
</form>
}


export default Form;







    