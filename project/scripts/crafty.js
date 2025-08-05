const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

document.getElementById("copyright").innerHTML = `&copy ${year} | Emily Larson | Utah, USA`;
document.getElementById('modified').textContent = `Date Modified: ${month}/${day}/${year}`;


const submitQuestion = document.getElementById('submit');
submitQuestion.addEventListener("click", () => {

    const formBox = document.getElementById('questionaire');
    formBox.innerHTML = "";

    let thanks = document.createElement("h3");
    let paragraph = document.createElement("p");

    thanks.textContent = "Thank You!"
    paragraph.textContent = "We have recieved your question. You can expect to hear back from us within a week. We look forward to talking with you!"

    formBox.appendChild(thanks);
    formBox.appendChild(paragraph);

})