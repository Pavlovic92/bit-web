const showCards = (data) => {
    data.results.forEach(result => {
        createCard(result)
    })
}

const cont = document.querySelector(".container");
const row = document.createElement("div");
row.className = "row";

const createCard = (data) => {


    //Creating elements:
    const div = document.createElement("div");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const btn = document.createElement("button");

    img.addEventListener('click', showInfo)
    //Appending elements:
    cont.appendChild(row);
    row.appendChild(div);
    div.appendChild(divImg);
    divImg.appendChild(img);
    div.appendChild(title);
    div.appendChild(btn);

    //Setting attributes:
    img.setAttribute("src", data.image);
    title.append(data.name);
    btn.innerHTML = "Like";

    //Setting class:
    div.className = "col-lg-4 char-div";
    img.className = "char-img";
    title.className = "char-title";
    btn.className = "char-btn";


}

const showInfo = (data) => {
    const cont = document.querySelector(".container");
    cont.innerHTML = ""
    const infoCont = document.createElement("div");
    const infoImg = document.createElement("img");
    const infoName = document.createElement("h3");
    const infoSpecies = document.createElement("p");
    const infoGender = document.createElement("p");
    const infoStatus = document.createElement("p");
}



export { showCards }



