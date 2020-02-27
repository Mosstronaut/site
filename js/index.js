//---------Main content div changer---------//

//Set active div class and width
function openTab(newTab){
  var newT = newTab.id
  console.log(newT);
  newTab.style.width = "100%";
  newTab.classList.add("active");
  switch(newT) {
    case 'home':
      document.querySelector('.navImg').style.backgroundColor= "#ea5810";
    break;
    case 'services':
      document.querySelector('.navImg').style.backgroundColor= "#c2e812";
    break;
    case 'projects':
      document.querySelector('.navImg').style.backgroundColor= "#ef159f";
    break;
    case 'contact':
      document.querySelector('.navImg').style.backgroundColor= "#2eeae4";
    break;
    }
  //navver(newTab.id);
};

//Change logo color by div
//function navver(divSel){

//};

//Search for active div, set width to 0 and remove active class
function tabChange(newTab){
  var acTab, tabs;
  acTab = document.querySelector('.active').id; //get active tab id

  document.getElementById(acTab).style.width = "0%";

  document.getElementById(acTab).classList.remove("active")//remove active class from tabs
  openTab(newTab);
};

//Same as above but for mobile, sets height instead of width
function openTabMov(newTab){
  newTab.style.height = "100%";
  newTab.classList.add("active");
};

function tabChangeMov(newTab){
  var acTab, tabs;

  acTab = document.querySelector('.active').id; //get active tab id
  console.log("Mobile");

  document.getElementById(acTab).style.height = "0%";

  document.getElementById(acTab).classList.remove("active")//remove active class from tabs
  openTabMov(newTab);
};
//------------End main div selector----------------//

//-----------Tab section--------------------//
function changeTab(evt, divNam) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for(i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" toggled", "");
  }
  document.getElementById(divNam).style.display = "block";
  evt.currentTarget.className += " toggled";
};
