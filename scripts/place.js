const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

document.getElementById("copyright").innerHTML = `&copy ${year} | Emily Larson | Utah, USA`;
document.getElementById('modified').textContent = `Date Modified: ${month}/${day}/${year}`;


function windchill(temp, windspeed) {
    if (temp < 50 && windspeed > 3) {
        let wc;
        wc = 35.74 + (0.6215 * temp) - (35.75 * (windspeed ** 0.16)) + (0.4275 * temp * (windspeed ** 0.16));
        return wc;
    }
    else {
        return "N/A";
    }
}


document.querySelector(".windchill").innerHTML = (windchill(71, 7.2));