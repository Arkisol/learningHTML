// JavaScript source code
//var tempData = new 
//to try and store the var "credits" onto a .txt that can be accessed and chanaged

/*var getCredits = function () {
    tempData.open("r");
    var readCredits = //read and return the last line in file
    tempData.close();
    return readCredits;
};*/

var credits = 0; //getCredits();

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
    /*tempData.open("w");
    tempData.writeln(credits++);
    tempData.close();*/
};