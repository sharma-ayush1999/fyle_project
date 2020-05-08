
/*---------Loader----------------*/
setTimeout(function(){
    $('.lds-ripple').fadeToggle();
}, 1000);

/*---------icon-color-------------*/

let right = document.getElementsByClassName('fa-check');
for (let i = 0; i < right.length; i++) {
    right[i].style.color="#1DC49F";
}
let cross = document.getElementsByClassName('fa-times');
for (let i = 0; i < cross.length; i++) {
    cross[i].style.color="#FF3F57";
}

/*--------button-border--------*/

var buttons = document.getElementsByClassName("btn"); 
var c = 0;
if(c == 0){
for (var i = 0; i < buttons.length; i++) {
  document.getElementsByClassName("btn-white")[i].addEventListener("click", function() {
    this.classList.add("btn-border");
    c = 1;
});   
}
}
else{
    
}
