const Footer = function( { items } ){
    console.log(items);
    let percent=0;
    const totalPackedItems = items.filter((item)=>item.isPacked).length;
    if(items.length) percent= Math.trunc((totalPackedItems/items.length)*100);
    
    console.log(percent);
    return <footer className="CheckListHeader" style={{position:"fixed", bottom:"0",width:"100%", color:"#fff", fontSize:"2rem", fontFamily:"IBM Plex Mono"}}>
<p>You Have Completed {percent}% of your Check List</p>
    </footer>
}
export default Footer;