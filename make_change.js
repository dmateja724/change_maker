"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

// this function does all the calculations for proper change, don't make fun of my math lol
//each variable defined will convert and put the number into its respective spot on the page
 
var makeChange = function () {
    var money = parseInt($("cents").value);
    
    var quarters = parseInt(money / 25);
    $("quarters").value = quarters;
    
    var dimes = parseInt((money % 25) / 10);
    $("dimes").value = dimes;
    
    var nickels = parseInt((money - (quarters * 25) - (dimes * 10)) / 5);
    $("nickels").value = nickels; 
    
    var pennies = parseInt((money - (quarters * 25) - (dimes * 10) - (nickels * 5)) / 1);
    $("pennies").value = pennies; 
};

// this function will handle the validation of entries, 
// if valid, it will call the makeChange() function
// if not valid, alert pops up and clears user entry
var processEntries = function () {
    var cents = $("cents").value;
    
    if (cents > 99 || cents < 0 || isNaN(cents) || cents === "") {
        alert("You have made an invalid entry");
        $("cents").value = "";
        $("cents").focus();
    } else {
        
        makeChange();
    }
};


// brings focus into the first text box upon page load and on click of the button will start the processEntries() funcion 

window.onload = function () {
    $("calculate").onclick = processEntries;
    $("cents").focus();
    
    //this will allow for the enter key to be hit and run processEntries() 
    $("cents").addEventListener("keydown", function (b) {
        if (e.keyCode === 13) {
            processEntries();
    }
});
};

