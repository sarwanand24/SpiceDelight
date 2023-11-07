     var showname3 = localStorage.getItem("showname2");
        document.getElementById("name").innerText = showname3;
        document.getElementById("name-txt2").innerText = showname3;

        window.onload = function(){
            const date = new Date();
            var currentTime = date.getHours();
        console.log(currentTime);
            if(currentTime>=21 && currentTime<=23){
                document.getElementById("phase").innerHTML = "Night";
            }
           else if(currentTime>=0 && currentTime<3){
                document.getElementById("phase").innerHTML = "Night";
            }
            else if(currentTime>=3 && currentTime<12){
                document.getElementById("phase").innerHTML = "Morning";
            }
            else if(currentTime>=12 && currentTime<16){
                document.getElementById("phase").innerHTML = "AfterNoon";
            }
            else if(currentTime>=16 && currentTime<21){
                document.getElementById("phase").innerHTML = "Evening";
            }
        }
 
function updateConnectionStatus() {  
if(navigator.onLine) {
   document.getElementById("offline-func").style.display = "none";               
} else {
   document.getElementById("offline-func").style.display = "block";             
}
}

// Attaching event handler for the load event
window.addEventListener("load", updateConnectionStatus);

// Attaching event handler for the online event
window.addEventListener("online", function(e) {
updateConnectionStatus();
});

// Attaching event handler for the offline event
window.addEventListener("offline", function(e) {        
updateConnectionStatus();
});

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn'); 
let currentSlide = 1;
// Javascript for image slider manual navigation
var manualNav = function(manual){ 
slides.forEach((slide) => {
slide.classList.remove('active');
 btns.forEach((btn) => {
    btn.classList.remove('active');
    }); 
   }); 
   slides[manual].classList.add('active'); 
   btns[manual].classList.add('active'); }
    btns.forEach((btn, i) => { btn.addEventListener("click", () => {
        manualNav(i); 
        currentSlide = i; 
       });
        }); 
// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
let active = document.getElementsByClassName('active'); 
let i = 1;
var repeater = () => { setTimeout(function(){ 
[...active].forEach((activeSlide) => { 
   activeSlide.classList.remove('active'); 
   }); 
   slides[i].classList.add('active'); 
   btns[i].classList.add('active'); 
   i++; 
   if(slides.length == i){ 
       i = 0; 
       } 
       if(i >= slides.length){ 
           return; 
           }
            repeater();
             }, 6000);
              } 
              repeater();
               }
                repeat(); 

        document.getElementById("veg").addEventListener("click", function(){
            window.location = "veg.html";
        })
        document.getElementById("nonveg").addEventListener("click", function(){
            window.location = "nonveg.html";
        })
        document.getElementById("starter").addEventListener("click", function(){
            window.location = "starter.html";
        })
        
