var myDate = [];
var http = new XMLHttpRequest();// crwate a new vervion from xml /
http.open("GET", "https://jsonplaceholder.typicode.com/posts"); // to open conniction from source to distnaition 
http.send();// send requst to distintion to get data from it .
http.addEventListener("readystatechange", function () {
  if (http.readyState == 4 && http.status == 200)
  {
    myDate = JSON.parse(http.response);
    displayData();

    }


})
function displayData()
{

  var cartoona = '';
  for (var i = 0; i < myDate.length; i++)
  {
    cartoona += `<div class='col-md-3'>
    <div>
    <h5>`+ myDate.title +`</h5>
    <p>`+myDate.body+`</p>
    </div>
    </div>`
  }
  document.getElementById("rowRuselt").innerHTML = cartoona;

}












var imgList = document.getElementsByClassName("item-img");//HTML collection
var lightBoxContainer = document.getElementById("lightbox-container"); //catch img layer div
var lightBoxItem = document.getElementById("lightbox-item");// catch photo src
currentSlideIndex = 0; //hold number of present image .
// catch arrow icons and x icon
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");

var imgArry = [];
for (var i = 0; i < imgList.length; i++) //convert html colllection to arry list
{
  imgArry.push(imgList[i]);

  // add EventListner to all imegs :
  imgArry[i].addEventListener("click", function (eventInfo)
  {
    currentSlideIndex = imgArry.indexOf(eventInfo.target);
    lightBoxContainer.style.display = "flex";
    var imgSrc= eventInfo.target.getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgSrc+")";
  });
}

// function  to right arrow 
function nextSlide()
{

  currentSlideIndex++; //hold elswora elly 3aliha eldor .
  if (currentSlideIndex == imgArry.length)
  {
    currentSlideIndex = 0;

    }
    lightBoxItem.style.backgroundImage =
      "url(" + imgArry[currentSlideIndex].getAttribute("src") + ")";


}
nextBtn.addEventListener("click", nextSlide);  

// function  to left arrow 
function prevSlide()
{

  currentSlideIndex--;
  if (currentSlideIndex <0) {
    currentSlideIndex =imgArry.length-1;//last element in array
  }
    lightBoxItem.style.backgroundImage =
      "url(" + imgArry[currentSlideIndex].getAttribute("src") + ")";


}
prevBtn.addEventListener("click", prevSlide);  
// function  to Close icon 
function closeSlide()
{

  lightBoxContainer.style.display = "none";
}
closeBtn.addEventListener("click", closeSlide);  


// close image box when click on out the box 
lightBoxContainer.addEventListener("click", function (e) {
  if (e.target == lightBoxItem || e.target == nextBtn || e.target == prevBtn)
  {
    return false;
  }
  closeSlide();
})
// slide  when click right/left/esc arrow :
/*document.addEventListener("keydown", function (eventInfo) {


  if (eventInfo.keyCode == 39)
  {
    nextSlide();
  }
  else if (eventInfo.keyCode == 37) {
    prevSlide();
  } else if (eventInfo.keyCode == 27) {
    closeSlide();
  }

})*/

document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 37:
      prevSlide();
      break;
   
    case 39:
      nextSlide();
      break;
    case 27:
      closeSlide();
      break;
  }
});