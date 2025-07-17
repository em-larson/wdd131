const year = new Date().getFullYear();
document.getElementById("year").innerHTML = `&copy ${year} | Emily Larson | Utah, USA`;

// const date = new Date().getDate()
const mm = new Date().getMonth() + 1;
const dd = new Date().getDate();
document.getElementById("date").innerHTML = `Date Modified: ${mm}/${dd}/${year}`;

document.querySelector