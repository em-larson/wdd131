//footer code//

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

document.getElementById("copyright").innerHTML = `&copy ${year} | Emily Larson | Utah, USA`;
document.getElementById('modified').textContent = `Date Modified: ${month}/${day}/${year}`;

//responsive menu code//

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector('#mainNav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//submit button on join page (includes conditional formatting)//

function thankyouMessage(formBox) {
    formBox.innerHTML = "";

    let thanks = document.createElement("h3");
    let paragraph = document.createElement("p");
    let count = document.createElement("p");

    thanks.textContent = "Thank You!"
    paragraph.textContent = "We have recieved your question. You can expect to hear back from us within a week. We look forward to talking with you!"
    count.innerHTML = visits();

    formBox.appendChild(thanks);
    formBox.appendChild(paragraph);

    formBox.appendChild(count);
};

const submitQuestion = document.getElementById('submit');

if (submitQuestion) {
    submitQuestion.addEventListener("click", (function (event) {

        event.preventDefault()

        const formBox = document.getElementById('questionaire');

        if (formBox.checkValidity()) {

            thankyouMessage(formBox);
        }

        else {
            formBox.reportValidity();
        }

    }))
};

//sets and accesses local storage (displayed on form submition page)//

function visits() {

    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0

    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);

    if (numVisits !== 1) {
        return `<br> You have submitted ${numVisits} questions.`;
    }

    else {
        return `<br> You have submitted your first question.`
    }
};

//create image cards for the album section  (uses both an array and object)//

const photos = [
    {
        artistName: "Jessi Smith",
        type: "Cross-stitch of Lilacs",
        image: "images/crosstitch.webp",
    },
    {

        artistName: "Jason Wright",
        type: "Watercolor Paints",
        image: "images/watercolor.webp",
    },
    {
        artistName: "Emma Smithe",
        type: "Knitted Scarf",
        image: "images/knitting.webp",
    },
    {
        artistName: "Tessa Barrow",
        type: "Halloween Wreath",
        image: "images/wreath.webp",
    },
    {
        artistName: "Bianca Cascadan",
        type: "Resin DnD Dice",
        image: "images/dice.webp",
    },
    {
        artistName: "Dan Xavier",
        type: "Digital Art",
        image: "images/digital.webp",
    }
]

function createAlbum() {
    document.getElementById('photos').innerHTML = "";

    photos.forEach((photo) => {
        let card = document.createElement("figure");
        let picture = document.createElement("img");
        let caption = document.createElement("figcaption");

        picture.setAttribute("src", photo.image);
        picture.setAttribute("alt", photo.alternate);
        picture.setAttribute("loading", "Lazy");
        caption.innerHTML = photo.type;

        card.classList.add("album");
        card.appendChild(picture);
        card.appendChild(caption);

        document.getElementById('photos').appendChild(card);

    });
};

if (document.getElementById('photos')) {
    createAlbum();
}
