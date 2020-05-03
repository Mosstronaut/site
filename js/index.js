//---------Main content div changer---------//

//Set active div class and width-Change logo color by div
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
      document.querySelector('.navImg').style.backgroundColor= "#ff6b88";
    break;
    case 'contact':
      document.querySelector('.navImg').style.backgroundColor= "#2eeae4";
    break;
    }
};

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
  var newT = newTab.id;
  newTab.style.height = "100%";
  newTab.style.width = "100%";
  newTab.classList.add("active");
  switch(newT) {
    case 'home':
      document.querySelector('.navLogoMini').style.backgroundColor= "#ea5810";
    break;
    case 'services':
      document.querySelector('.navLogoMini').style.backgroundColor= "#c2e812";
    break;
    case 'projects':
      document.querySelector('.navLogoMini').style.backgroundColor= "#ff6b88";
    break;
    case 'contact':
      document.querySelector('.navLogoMini').style.backgroundColor= "#2eeae4";
    break;
    }
};

function tabChangeMov(newTab){
  var acTab, tabs;

  acTab = document.querySelector('.active').id; //get active tab id
  document.getElementById(acTab).style.height = "0%";

  document.getElementById(acTab).classList.remove("active")//remove active class from tabs
  console.log(newTab);
  openTabMov(newTab);
  console.log(newTab);
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
