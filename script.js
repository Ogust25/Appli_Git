/* Light/Dark mode Toggle */
const btnTheme = document.querySelector('.btnTheme');

btnTheme.addEventListener("click", function(){
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "darkMode" ? "lightMode" : "darkMode";
    if (currentClass == "lightMode"){
        document.querySelector('.meteo').classList.add('fa-sun');
        document.querySelector('.meteo').classList.remove('fa-moon');
        let textmode = document.querySelector(".mode").innerHTML; 
        document.querySelector('.mode').innerHTML = textmode.replace("DARK", "LIGHT");
    }else{
        document.querySelector('.meteo').classList.add('fa-moon');
        document.querySelector('.meteo').classList.remove('fa-sun');
        let textmode = document.querySelector(".mode").innerHTML; 
        document.querySelector('.mode').innerHTML = textmode.replace("LIGHT", "DARK");
    }
})


/* btn search + error */
