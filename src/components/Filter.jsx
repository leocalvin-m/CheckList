import "../App.css";
const Filter = function({sortBy, setSortBy,handelClearList}){
    

    return <section className="filter-section" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <select className="filter">
            <option value="input" key="1">Sort By Input Order</option>
            <option value="packed" key="2">Sort By Packed Status</option>
        </select>
        <button className="clear-list" onClick={handelClearList}>Clear List</button>
    </section>
}

export default Filter;