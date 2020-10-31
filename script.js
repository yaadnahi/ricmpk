let leftBtn = document.getElementsByClassName("fa-chevron-left")[0];
let rightBtn = document.getElementsByClassName("fa-chevron-right")[0];

let images = document.getElementsByClassName("img");

let imagesArray = Array.prototype.slice.call(images);

let content = document.getElementsByClassName("content")[0];



let currentImage = document.getElementById("current-image");

let closeBtn = document.getElementsByClassName("fa-times-circle")[0];


let wrapper = document.getElementsByClassName("wrapper")[0];



let modalContainer = document.getElementsByClassName("modal-container")[0];




let captionView = document.getElementsByClassName("caption-view")[0];


for(let i = 0; i < imagesArray.length; i++) {

  imagesArray[i].addEventListener("click", () => {
    captionView.innerText = imagesArray[i].alt;
    currentImage.src = imagesArray[i].src;    
    modalContainer.style.display = "grid";
    wrapper.style.display = "none";

    closeBtn.addEventListener("click", () => {
      modalContainer.style.display = "none";
      wrapper.style.display = "grid";
    });

  });

}




let counter = 0;

rightBtn.addEventListener("click", toRight);
leftBtn.addEventListener("click", toLeft);

function toRight() {


  if(counter < imagesArray.indexOf(imagesArray[imagesArray.length - 1])) {
    counter++;
    currentImage.src = imagesArray[counter].src;
    captionView.innerText = imagesArray[counter].alt;
    	
  } 
  else if(counter == imagesArray.indexOf(imagesArray[imagesArray.length - 1])) {
    counter = imagesArray.indexOf(imagesArray[0]);

    currentImage.src = imagesArray[counter].src;
    captionView.innerText = imagesArray[counter].alt;
  }



}


function toLeft() {


  if(counter > imagesArray.indexOf(imagesArray[0])) {

    counter--;
    currentImage.src = imagesArray[counter].src;
    captionView.innerText = imagesArray[counter].alt;

  } 
  else if(counter == imagesArray.indexOf(imagesArray[0])) {
    
    counter = imagesArray.indexOf(imagesArray[imagesArray.length - 1]);
    currentImage.src = imagesArray[counter].src;
    captionView.innerText = imagesArray[counter].alt;

    }



}



document.addEventListener("keydown", checkKey);



function checkKey(e) {

  if(e.keyCode == "37") {

    toLeft();

  } else if(e.keyCode == "39") {

    toRight();
    

  }




}








let albumName = document.getElementsByClassName("album-name");

let albumNameArray = Array.prototype.slice.call(albumName);


let albumGallery = document.getElementsByClassName("album-gallery");

let albumGalleryArray = Array.prototype.slice.call(albumGallery);



let rightCaret = document.getElementsByClassName("fa-caret-right");
let downCaret = document.getElementsByClassName("fa-caret-down");




for(let i = 0; i < albumNameArray.length; i++) {

  albumNameArray[i].addEventListener("click", toggle);

  let btnState = false;


  function toggle() {



    if(btnState == false) {

      albumGalleryArray[i].style.display = "block";
      rightCaret[i].style.display = "none";
      downCaret[i].style.display = "block";

        btnState = true;

    } else if(btnState == true) {

      albumGalleryArray[i].style.display = "none";
      rightCaret[i].style.display = "block";
      downCaret[i].style.display = "none";

        btnState = false;
  
    }

  }

}












let readMoreButtons = document.getElementsByClassName("read-more");
let readMoreButtonsArray = Array.prototype.slice.call(readMoreButtons);
let descriptions = document.getElementsByClassName("description");
let projects = document.getElementsByClassName("project");

let specsList = document.getElementsByClassName("specs-list");
let projectDS = document.getElementsByClassName("project-description-section");

let wrapTwo = document.getElementsByClassName("wrap-2")[0];

let toggleState = false;



for(let i = 0; i < readMoreButtonsArray.length; i++) {

  readMoreButtonsArray[i].addEventListener("click", toggleDescription);


  function toggleDescription() {

    if(toggleState == false) {
      projects[i].style.height = "100%";
      projects[i].style.transitionDuration = "0.5s";
      projectDS[i].style.height = "100%";
      projectDS[i].style.overflowY = "visible";
      specsList[i].style.display = "block";
      wrapTwo.style.paddingBottom = "30%";
      // descriptions[i].style.overflowY = "visible";
      readMoreButtonsArray[i].innerText = "READ LESS";
      toggleState = true;

    } else if (toggleState == true) {

      projects[i].style.height = "9em";
      projects[i].style.transitionDuration = "0.5s";
      projectDS[i].style.height = "3.5em";
      projectDS[i].style.overflowY = "hidden";
      // wrapTwo.style.paddingBottom = "5%";
      // descriptions[i].style.overflowY = "hidden";
      readMoreButtonsArray[i].innerText = "READ MORE";
      specsList[i].style.display = "none";

      toggleState = false;

    }



  }
  


}




let toggleStateAbout = false;




let founderDS = document.getElementsByClassName("founder-description-section");

let readMoreAboutButtons = document.getElementsByClassName("read-more-about");

let founderBox = document.getElementsByClassName("founder-info");


for(let i = 0; i < readMoreAboutButtons.length; i++) {

  readMoreAboutButtons[i].addEventListener("click", toggleAbout);


  function toggleAbout() {

    if(toggleStateAbout == false) {
      founderBox[i].style.height = "95%";
      founderDS[i].style.height = "auto";
      founderDS[i].style.overflowY = "visible";
      readMoreAboutButtons[i].innerText = "READ LESS";
      toggleStateAbout = true;

    } else if (toggleStateAbout == true) {
      founderBox[i].style.height = "80%";
      founderDS[i].style.height = "3em";
      founderDS[i].style.overflowY = "hidden";
      readMoreAboutButtons[i].innerText = "READ MORE";
      toggleStateAbout = false;

    }




}


}







let menuBar = document.getElementsByClassName("fa-bars")[0];
let mainMenu = document.getElementsByClassName("main-nav")[0];
let closeMenu = document.getElementsByClassName("fa-times")[0];




menuBar.addEventListener("click", () => {

  mainMenu.style.display = "block";

});




closeMenu.addEventListener("click", () => {

  mainMenu.style.display = "none";

});