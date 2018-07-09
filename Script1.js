// JavaScript source code
//var fs = require ("fs");

var credits = 0; //getCredits();

//when arriving at new page, update var value with server value
/*fs.readFile ("./tempUserData.txt", function (err, buf) {
    credits = buf;
});*/

var showMessage = function () {
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("hideButton").style.visibility = "visible";
};

var hideMessage = function () {
    document.getElementById("message").style.visibility = "hidden";
    document.getElementById("hideButton").style.visibility = "hidden";
};
var summonObunga = function () {
    if (credits > 9){
        document.getElementById("obungaPic").style.visibility = "visible";
    }
    else {
        document.getElementById("response").innerHTML = "You do not have enough credits";

    }
};
var viewBal = function () {
    document.getElementById("coinCount").innerHTML = "You have: " + credits;
};
var gainCredit = function () {
    credits++
    viewBal();
    //update server value when credit changes
    /*fs.writeFile ("./tempUserData.txt", credits, function (err, credits) {
        if (err) throw err;
    });*/
};



