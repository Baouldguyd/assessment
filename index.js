let url = "https://randomuser.me/api"
let refresh = document.querySelector("#refresh")


const getUserData = () =>{
    fetch(url).then(response=>{
        return response.json()
    }).then(data=>{

        let profilePicture = document.querySelector("#profile-picture")
        profilePicture.src = data.results[0].picture.medium

        console.log(data.results[0]);

        let nameOfUser = document.querySelector("#name")
        nameOfUser.textContent =  "Full Name: " + data.results[0].name.title + ". " + " " + data.results[0].name.first + " " + data.results[0].name.last
        
        let gender = document.querySelector("#gender")
        gender.textContent = "Gender: " + data.results[0].gender

        let email = document.querySelector("#email")
        email.textContent =  "Email: " + data.results[0].email 

        let username = document.querySelector("#username")
        username.textContent = " Username: "+ data.results[0].login.username

        let homeAddress = document.querySelector("#home-address")
        homeAddress.textContent =  "Address: " + data.results[0].location.city + ", " + data.results[0].location.state + ", " + data.results[0].location.country
    
    })
}
refresh.addEventListener("click", ()=>{
    getUserData()
})
