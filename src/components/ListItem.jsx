/* eslint-disable react/prop-types */

const ListItem = function({id,content,isPacked,onItemDelete,onItemUpdate}){
    // console.log(props);

    return(
     <li className="ListItem">
        <input type="checkbox" id="ListItemInput" value={isPacked} onChange={()=>onItemUpdate(id)}/>
        <label htmlFor="ListItemInput"></label>
        <span style={isPacked ? {textDecoration:"line-through"}: null} >{content}</span>
        <p className="Delete" onClick={() => onItemDelete(id)}>&times;</p>
    </li>);
}
export default ListItem;