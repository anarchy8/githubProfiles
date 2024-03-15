const form = document.getElementById("form");
const search = document.getElementById("search");
const card = document.getElementById("card");

const url = "https://api.github.com/users/";


const  getUser = async(username)=>{
 try{
  const {data} = await axios (url + username)
  createCard(data)
  console.log({data})
 }catch(error){
   if(error.response.status == 404){
    alert("kullanıcı bulunamadı");
   }

 }
} 

const createCard = (user) =>{

  card.classList.remove("hide");

  let img = user.avatar_url;
  let nickname = user.login;
  let bio = user.bio;
  let followers = user.followers;
  let following = user.following;
  let repoNum = user.public_repos;
  let gitlink = user.html_url;

  card.innerHTML = `
  
  <div class="img-div">
        <img class="pp" src="${img}" alt="" />
      </div>
      <div class="card-info">
        <h1 class="name">${nickname}</h1>
        <div class="about-div">
        ${bio}
        </div>
        <div class="followers-div">
          <p>Followers <span>${followers}</span></p>
          <p>Following <span>${following}</span></p>
          <p>Repository <span>${repoNum}</span></p>
        </div>
        <div>
        <a class="gitlink" href="${gitlink}">github link</a>
        <div/>
      </div>
  
  `
}

form.addEventListener("submit",(e)=>{
  e.preventDefault()

  const user = search.value;
  if(user){
    getUser(user)
    search.value = ""
  }

})

