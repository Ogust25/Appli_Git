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

/* API GitHub */
const APIKEY = "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";

let apiCall = function(userName){
    let url = `https://api.github.com/users/${userName}`;
    fetch(url)
    .then((response) =>
        response.json().then((data) => {
            console.log(data);
            let src = document.querySelector(".avatar").getAttribute("src")
            document.src.innerHTML = data.avatar_url;
            document.querySelector(".name").innerHTML = data.name;
            document.querySelector(".login").innerHTML = "@" + (data.login);
            if(data.bio == null){
                document.querySelector(".profil").innerHTML = "This profile has no bio";
            }else{
                document.querySelector(".profil").innerHTML = data.bio;
            }
        })
    )  
}

/* btn search + error */
document.querySelector(".btnSearch").addEventListener('click', function(){
    let user = document.querySelector('.searchBar').value;
    apiCall(user);
})
apiCall("octocat");
