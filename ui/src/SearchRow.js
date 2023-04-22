

export default function SearchRow({setInput, setStockedOnly, filter}) {
    function handleSearchQuery() {
        const inputField = document.getElementById("input-search");
        const checkbox = document.getElementById("checkbox");
        setInput(inputField?inputField.value : "")
        setStockedOnly(checkbox? checkbox.checked :false);
        filter();
    }
    return (
        <>
            <input id="input-search" type="text" placeholder="Enter text to search" onKeyUp={handleSearchQuery} /><br />
            <input id="checkbox" type="checkbox" onClick={handleSearchQuery} /> <span>Display only stocked items</span>
        </>
    )
}