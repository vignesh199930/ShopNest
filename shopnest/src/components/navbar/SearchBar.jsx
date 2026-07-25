function SearchBar({search, setSearch}){
    return(
        <div className="container mt-4 rounded">
        <div className="input-group">
            <input type="text"
            className="form-control" placeholder="Search products..."
            value={search}
            onChange={(e)=>
                setSearch(e.target.value)
            }/>

            <button className="btn btn-warning">Search</button>

        </div>
        </div>
    )
}

export default SearchBar;