const Filter = ({ query, setQuery }) => {
    return (
        <div>
            <input
                placeholder="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

        </div>
    )
}
export default Filter