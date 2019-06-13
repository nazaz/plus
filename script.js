$(document).ready(function(){
    PopUpHide();  
});

function PopUpShow(){
    $(".pop-up").show();
}
function PopUpHide(){
    $(".pop-up").hide();
}
$(document).ready(function(){
    PopUpHideReg();  
});

function PopUpShowReg(){
    $(".pop-up--2").show();
}
function PopUpHideReg(){
    $(".pop-up--2").hide();
}


// var modal = document.getElementsByClassName('pop-up--2');

// var btn = document.getElementsByClassName('.myBtn');


// var span = document.getElementsByClassName('pop-up_close')[0];

// btn.onclick = function(){
//     modal.style.display = "block";
// }

// span.onclick = function(){
//     modal.style.display = "none";
// }

// window.onclick = function(event){
//     if (event.target == modal){
//         modal.style.display = "none";
//     }
// }