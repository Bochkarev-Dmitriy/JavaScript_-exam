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
        toast.innerHTML = "Calculator";
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

function symbolAdd(input, symbol) {
    switch (input.value) {
        case null:
        case '0':
        input.value = symbol
        break
        default:
        input.value += symbol
    }
}
    
function asin(form) {
    form.screen.value = Math.asin(form.screen.value);
}

function ln(form) {
    form.screen.value = Math.log(form.screen.value);
}

function acos(form) {
    form.screen.value = Math.acos(form.screen.value);
}

function sq(form) {
    form.screen.value = eval(form.screen.value) * eval(form.screen.value)
}

function symbolDelete(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}  

function sin(form) {
    form.screen.value = Math.sin(form.screen.value);
}

function cos(form) {
    form.screen.value = Math.cos(form.screen.value);
}
    
function tan(form) {
    form.screen.value = Math.tan(form.screen.value);
}

function changeTheSign(input) {
    switch(input.value.substring(0, 1)) {
        case '-':  
        input.value = input.value.substring(1, input.value.length)
        break
        default:
        input.value = "-" + input.value
    }
}

function calculate(form) {
    form.screen.value = eval(form.screen.value)
}
    
function ControlNumber(str) {
    for (let i = 0; i < str.length; i++) {
        let ch = str.substring(i, i+1);
        if (ch < "0" || ch > "9") {
            if (ch != "-" && ch != "*" && ch != "/" && ch != "+" && ch != "(" && ch!= ")" && ch != "." ) {
            alert("неверная запись!");
            return false;
            }
        }
    }
    return true
}
