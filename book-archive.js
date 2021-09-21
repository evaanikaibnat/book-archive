const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    // load data
    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))

}

const displaySearchResult = books => {

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
        <div class="card h-100">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${book.title}</h4>
                <h5>Author: ${book.author_name}</h5>
                <h6>First Publish: ${book.first_publish_year}</h6>
                <h6>Publisher: ${book.publisher}</h6>
            </div>
        </div>`;
        searchResult.appendChild(div);
    })
}