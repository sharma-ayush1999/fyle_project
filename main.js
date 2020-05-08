
/*---------Loader----------------*/
setTimeout(function(){
    $('.lds-ripple').fadeToggle();
}, 1500);

/*---------icon-color-------------*/

let right = document.getElementsByClassName('fa-check');
for (let i = 0; i < right.length; i++) {
    right[i].style.color="#1DC49F";
}
let cross = document.getElementsByClassName('fa-times');
for (let i = 0; i < cross.length; i++) {
    cross[i].style.color="#FF3F57";
}

/*---------Price Calculation---------------*/
    var value = 1;
    var serving_val = 1;
    var c = 0;
    $(document).ready(function(){
    $('.btn-white').click(function(){
        c++;
    $('.btn-white').removeClass("active");
    $(this).addClass("active");
    var servings = $(this).text();
    serving_val = parseInt($(this).val());
    console.log(serving_val)
    document.getElementById('lp-serving').innerHTML = 'For' + ' ' + servings;
    document.getElementById('icd-serving').innerHTML = 'For' + ' ' + servings;
    document.getElementById('lp-price').innerHTML = '$' + value*serving_val;
    document.getElementById('icd-price').innerHTML = '$' + value*serving_val*2;
    document.getElementById('profit').innerHTML = '$' + (value*serving_val*2 - value*serving_val);
    });
});

$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
    if($(this).prop("checked") == true){
        value = 1;
        console.log("Checkbox is checked.");
        console.log(value);
        
    }
    else if($(this).prop("checked") == false){
        value = 0.5;
        console.log("Checkbox is unchecked.");
        console.log(value);
    }
    if(c>0){
    document.getElementById('lp-price').innerHTML = '$' + value*serving_val;
    document.getElementById('icd-price').innerHTML = '$' + value*serving_val*2 ;
    document.getElementById('profit').innerHTML = '$' + (value*serving_val*2 - value*serving_val);
    }
});

});




/*$('input[type="checkbox"]').prop("checked")==true*/



/*$('input[type="checkbox"]').click(function(){
    if($(this).prop("checked") == true){
        console.log("Checkbox is checked.");
        

    }
    else if($(this).prop("checked") == false){
        console.log("Checkbox is unchecked.");
    }
});*/


