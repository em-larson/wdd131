const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// ------------- This function populates the list from the array above------//
let selections = document.getElementById('product');
if (selections) {

    function createList(products) {



        let placeholder = document.createElement('option');
        placeholder.value = "";
        placeholder.textContent = "Select a Product ▼";
        placeholder.disabled = true;
        placeholder.selected = true;
        selections.appendChild(placeholder);

        products.forEach(element => {

            let opt = document.createElement('option');
            opt.value = element.id;
            opt.textContent = element.name;
            selections.appendChild(opt);
        });

    }
    createList(products);
}

// --------------- Footer Info ----------------------------//
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

document.getElementById("copyright").innerHTML = `&copy ${year} | Emily Larson | Utah, USA`;
document.getElementById('modified').textContent = `Date Modified: ${month}/${day}/${year}`;


//------------------ Local Storage Visit Count Code--------------//

const visitsDisplay = document.querySelector(".visits")

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;

if (numVisits !== 0) {
    visitsDisplay.innerHTML = `${numVisits} review`;
} else {
    visitsDisplay.innerHTML = `${numVisits} reviews`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);