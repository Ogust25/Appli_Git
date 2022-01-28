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
            
            let x = document.querySelector(".avatar");
            let y = x.getAttribute("src");
            y = data.avatar_url;
            x.setAttribute("src", y);

            if(data.name == null){
                document.querySelector(".name").innerHTML = data.login;
            }else{
                document.querySelector(".name").innerHTML = data.name;
            }

            document.querySelector(".login").innerHTML = "@" + (data.login);

            document.querySelector(".date").innerHTML = "Joined " + (data.created_at);

            if(data.bio == null){
                document.querySelector(".profil").innerHTML = "This profile has no bio";
            }else{
                document.querySelector(".profil").innerHTML = data.bio;
            }

            document.querySelector(".repos").innerHTML = data.public_repos;
            document.querySelector(".followers").innerHTML = data.followers;
            document.querySelector(".following").innerHTML = data.following;

            if(data.location == null){
                document.querySelector(".location").innerHTML = "Not available";
                document.querySelector(".location").style.color = "rgb(75, 106, 155, 60%)";
                document.querySelector(".fa-map-marker-alt").style.color = "rgb(75, 106, 155, 60%)";
            }else{
                document.querySelector(".location").innerHTML = data.location;
                document.querySelector(".location").style.color = "#4B6A9B";
                document.querySelector(".fa-map-marker-alt").style.color = "#4B6A9B";
            }
            if(data.twitter_username == null){
                document.querySelector(".twitter").innerHTML = "Not available";
                document.querySelector(".twitter").style.color = "rgb(75, 106, 155, 60%)";
                document.querySelector(".fa-twitter").style.color = "rgb(75, 106, 155, 60%)";
            }else{
                document.querySelector(".twitter").innerHTML = data.twitter_username;
                document.querySelector(".twitter").style.color = "#4B6A9B";
                document.querySelector(".fa-twitter").style.color = "#4B6A9B";
            }
            if(data.company == null){
                document.querySelector(".company").innerHTML = "Not available";
                document.querySelector(".company").style.color = "rgb(75, 106, 155, 60%)";
                document.querySelector(".fa-building").style.color = "rgb(75, 106, 155, 60%)";
            }else{
                document.querySelector(".company").innerHTML = data.company;
                document.querySelector(".company").style.color = "#4B6A9B";
                document.querySelector(".fa-building").style.color = "#4B6A9B";
            }
            if((data.blog == null) || (data.blog == "")){
                document.querySelector(".blog").innerHTML = "Not available";
                document.querySelector(".blog").style.color = "rgb(75, 106, 155, 60%)";
                document.querySelector(".fa-link").style.color = "rgb(75, 106, 155, 60%)";
            }else{
                document.querySelector(".blog").innerHTML = data.blog;
                document.querySelector(".blog").style.color = "#4B6A9B";
                document.querySelector(".fa-link").style.color = "#4B6A9B";
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
