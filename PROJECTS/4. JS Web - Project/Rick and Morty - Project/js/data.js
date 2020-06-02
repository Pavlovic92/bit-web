const getData = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(data => {
            return data.json()
        })
}



export { getData };







