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
const APIUSER = "Ogust25"
const APIKEY = "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";

let apiCall = function(userName){
    let url = `https://api.github.com/users/${userName}`;
    fetch(/* APIUSER+APIUKEY+ */url)
    .then((response) =>
        response.json().then((data) => {
            /* data = {
                "login": "octocat",
                "id": 583231,
                "node_id": "MDQ6VXNlcjU4MzIzMQ==",
                "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/octocat",
                "html_url": "https://github.com/octocat",
                "followers_url": "https://api.github.com/users/octocat/followers",
                "following_url": "https://api.github.com/users/octocat/following{/other_user}",
                "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
                "organizations_url": "https://api.github.com/users/octocat/orgs",
                "repos_url": "https://api.github.com/users/octocat/repos",
                "events_url": "https://api.github.com/users/octocat/events{/privacy}",
                "received_events_url": "https://api.github.com/users/octocat/received_events",
                "type": "User",
                "site_admin": false,
                "name": "The Octocat",
                "company": "@github",
                "blog": "https://github.blog",
                "location": "San Francisco",
                "email": null,
                "hireable": null,
                "bio": null,
                "twitter_username": null,
                "public_repos": 8,
                "public_gists": 8,
                "followers": 4721,
                "following": 9,
                "created_at": "2011-01-25T18:44:36Z",
                "updated_at": "2022-01-24T15:08:43Z"
              } */

            console.log(data);
            
            let logo = document.querySelector(".avatar");
            let src = logo.getAttribute("src");
            src = data.avatar_url;
            logo.setAttribute("src", src);

            if(data.name == null){
                document.querySelector(".name").innerHTML = data.login;
            }else{
                document.querySelector(".name").innerHTML = data.name;
            }

            document.querySelector(".login").innerHTML = "@" + (data.login);

            let date = new Date(data.created_at);
            const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            document.querySelector(".date").innerHTML = "Joined " + date.getDay() +" "+ month[date.getMonth()] +" "+ date.getFullYear();

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

                let twitter = document.querySelector(".twitter");
                let href = twitter.getAttribute("href");
                href = data.twitter_username;
                twitter.setAttribute("href", "https://twitter.com/" + href);
            }
            if(data.company == null){
                document.querySelector(".company").innerHTML = "Not available";
                document.querySelector(".company").style.color = "rgb(75, 106, 155, 60%)";
                document.querySelector(".fa-building").style.color = "rgb(75, 106, 155, 60%)";
            }else{
                document.querySelector(".company").innerHTML = (data.company).substring(1);
                document.querySelector(".company").style.color = "#4B6A9B";
                document.querySelector(".fa-building").style.color = "#4B6A9B";

                let company = document.querySelector(".company");
                let href = company.getAttribute("href");
                href = "https://" + data.company + ".com";
                company.setAttribute("href", href);
            }
            if((data.blog == null) || (data.blog == "")){
                document.querySelector(".blog").innerHTML = "Not available";
                document.querySelector(".blog").style.color = "rgb(75, 106, 155, 60%)";
                document.querySelector(".fa-link").style.color = "rgb(75, 106, 155, 60%)";
            }else{
                document.querySelector(".blog").innerHTML = (data.blog).substring(8);
                document.querySelector(".blog").style.color = "#4B6A9B";
                document.querySelector(".fa-link").style.color = "#4B6A9B";

                let link = document.querySelector(".blog");
                let href = link.getAttribute("href");
                href = data.blog;
                link.setAttribute("href", href);
            }
        })
    )  
}

/* btn search + error */
document.querySelector(".btnSearch").addEventListener('click', function(){
    if((document.querySelector('.searchBar').value == "") || (document.querySelector('.searchBar').value == "")){
        document.querySelector('.error').style.visibility= "visible";
    }else{
        document.querySelector('.error').style.visibility= "hidden";
        let user = document.querySelector('.searchBar').value;
        apiCall(user);
    }
})
apiCall("octocat");

