const themeLight = "styles/light.css";
const themeBlack = "styles/dark.css";
const sunMark = "images/SunIcon.svg";
const moonMark = "images/MoonIcon.svg";
const themeMark = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("heading");
const iconGithub = document.getElementById("iconGithub");
const githubLight = "images/github-white.png";
const githubBlack = "images/github.jpeg";
const iconTwitter = document.getElementById("iconTwitter");
const twitterLight = "images/twitter-white.png";
const twitterBlack = "images/twitter.jpeg";
const iconEmail = document.getElementById("iconEmail");
const emailLight = "images/email-white.png";
const emailBlack = "images/email.jpeg";

function changeTheme() {
    const theme = document.getElementById("theme");
    setTimeout(() => {
        toast.innerHTML = "Vintage watches";
    }, 2500);
    switch(theme.getAttribute("href")){
        case themeLight:
        theme.setAttribute("href", themeBlack);
        themeMark.setAttribute("src", sunMark);
        iconGithub.setAttribute("src", githubLight);
        iconTwitter.setAttribute("src", twitterLight);
        iconEmail.setAttribute("src", emailLight);
        toast.innerHTML = "Dark Mode 🌙"
        break
        default:
        theme.setAttribute("href", themeLight);
        themeMark.setAttribute("src", moonMark);
        iconGithub.setAttribute("src", githubBlack);
        iconTwitter.setAttribute("src", twitterBlack);
        iconEmail.setAttribute("src", emailBlack);
        toast.innerHTML = "Light Mode ☀️";   
    }
}

const secondHand = document.querySelector('.clock_seconds');
const minuteHand = document.querySelector('.clock_minutes');
const hourНand = document.querySelector('.clock_hours');
const dayOne = document.querySelector('.day-01');
const dayTwo = document.querySelector('.day-02');
const dayThree = document.querySelector('.day-03');
const dataOne = document.querySelector('.date-01');
const dataTwo = document.querySelector('.date-02');

function timeSet() {
    const already = new Date();
    const second = already.getSeconds();
    const secondGradation = second * 360 / 60 + 90;
    secondHand.style.transform = `rotate(${secondGradation}deg)`;
    const minute = already.getMinutes();
    const minuteGradation = minute * 360 / 60 + 90;
    minuteHand.style.transform = `rotate(${minuteGradation}deg)`;
    const hour = already.getHours();
    const hourlyGradation = hour * 360 / 12 + 90;
    hourНand.style.transform = `rotate(${hourlyGradation}deg)`;
    const dayWeek = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(already).split('.')[0].toUpperCase();
    dayOne.innerText = dayWeek[0];
    dayTwo.innerText = dayWeek[1];
    dayThree.innerText = dayWeek[2];
    const numDay = already.getUTCDate();
    switch(numDay.toString().length) {
        case 1:
            dataOne.innerText = '0';
            dataTwo.innerText = numDay + ''    
            break
        default:
            dataTwo.innerText = numDay + '';
            dataTwo.innerText = (numDay + '')[1]
    }
}

setInterval(timeSet, 1000);








