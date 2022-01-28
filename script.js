/* Light/Dark mode Toggle */
const btnTheme = document.querySelector('.btnTheme');

btnTheme.addEventListener("click", function(){
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "darkMode" ? "lightMode" : "darkMode";
    if (currentClass == "darkMode"){
        
    }
})


/* btn search + error */
