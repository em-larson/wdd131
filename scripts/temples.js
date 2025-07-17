const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

document.getElementById("copyright").innerHTML = `&copy ${year} | Emily Larson | Utah, USA`;
document.getElementById('modified').textContent = `Date Modified: ${month}/${day}/${year}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});