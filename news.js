document.querySelectorAll(".projcard-description").forEach(function(box) {
    $clamp(box, {clamp: 6});
  });
const divToAddCard = document.getElementById("blog-card-div")
var leftOrRight = false;
let BlogCardArray = [
    {title:"განახლება ლიგაში" , imageURL:"new-patch" , text : "განახლების შემდეგ დაინერფნენ შემდეგი ჩემპიონები ეს ის ეს ის ეს ის და კიდევ ის", timeToUpload:"7/21/2023"},
    {title:"განახლება ლიგაში" , imageURL:"new-patch" , text : "განახლების შემდეგ დაინერფნენ შემდეგი ჩემპიონები ეს ის ეს ის ეს ის და კიდევ ის" ,timeToUpload:"7/21/2023"}
];

function addBlogCardLeft(title,imageURL,Text,timeToUpload){
  return  `
    <div class="projcard projcard-blue">
      <div class="projcard-innerbox">
        <img class="projcard-img" src="./Photo/${imageURL}.png" />
        <div class="projcard-textbox">
          <div class="projcard-title">${title}</div>
          <div class="projcard-subtitle">${timeToUpload}</div>
          <div class="projcard-bar"></div>
          <div class="projcard-description">${Text}</div>
          <div class="projcard-tagbox">
            <span class="projcard-tag">HTML</span>
            <span class="projcard-tag">CSS</span>
          </div>
        </div>
      </div>
    </div>`
}

function addBlogCardRight(title,imageURL,Text,timeToUpload){
  return  `
     <div class="projcard projcard-red">
    <div class="projcard-innerbox">
      <img class="projcard-img" src="./Photo/${imageURL}.png" />
      <div class="projcard-textbox">
        <div class="projcard-title">${title}</div>
        <div class="projcard-subtitle">${timeToUpload}</div>
        <div class="projcard-bar"></div>
        <div class="projcard-description">${Text}</div>
        <div class="projcard-tagbox">
        <a href=""><span class="projcard-tag">გაიგეთ მეტი</span></a>
        </div>
      </div>
    </div>
  </div>
    `
}

function AddCardsToHTML(){
    for(let i = 0 ; i < BlogCardArray.length ; i++){
        if(leftOrRight === false){
            divToAddCard.innerHTML += addBlogCardLeft(BlogCardArray[i].title,BlogCardArray[i].imageURL,BlogCardArray[i].text,BlogCardArray[i].timeToUpload)
            leftOrRight = true
        }
        else{
            divToAddCard.innerHTML+=addBlogCardRight(BlogCardArray[i].title,BlogCardArray[i].imageURL,BlogCardArray[i].text,BlogCardArray[i].timeToUpload)
            leftOrRight = false
        }
    }
}

AddCardsToHTML();