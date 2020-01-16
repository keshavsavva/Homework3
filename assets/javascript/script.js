var passLength = prompt("How many chartacters would you like your generated password to be?");
var confSpec = confirm("Would you like to include special characters in your generated password?");
var confNum = confirm("Would you like to include Numbers in your generated password?");
var confUppr = confirm("Would you like to include upper case characters in your generated password?");
var confLwr = confirm("Would you like to include lower case characters in your generated password?");

var truths = [confSpec, confNum, confUppr, confLwr];

var options = 0

for(var i = 0; i < truths.length; i++) {
    if (truths[i]) {
        options++
    }
}


// get user inputs to determine what kind of password they want

var lettersLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specChar = ["!", "@", "#", "$", "%", "&", "?"];

var characters = [specChar, numbers, lettersUp, lettersLow];
// Create arrays for various character types





function randomChar(arr) {
    var arrLength = arr.length;
    // console.log(arrLength);
    var charIndex = Math.floor(Math.random() * arrLength);
    // console.log(charIndex);
    var charSelect = arr[charIndex];
    // console.log(charSelect);
    return charSelect;
} //picks a random character from a given array


function randArr() {

    var multiChar = [];

    if(confSpec) {
        multiChar[0] = randomChar(specChar);
    }

    if(confNum && !confSpec) {
        multiChar[0] = randomChar(numbers);
    } else {
        multiChar[1] = randomChar(numbers);
    }

    if(confUppr && !confSpec && !confNum) {
        multiChar[0] = randomChar(lettersUp);
    } else if (confUppr && ((confSpec && !confNum) || (!confSpec && confNum))) {
        multiChar[1] = randomChar(lettersUp);
    } else {
        multiChar[2] = randomChar(lettersUp);
    }

    if(confLwr && !confSpec && !confNum && !confUppr) {
        multiChar[0] = randomChar(lettersLow);
    } else if (confLwr && ((confSpec && !confNum && !confUppr) || (!confSpec && !confNum && confUppr) || (!confSpec && confNum && !confUppr))) {
        multiChar[1] = randomChar(lettersLow);
    } else if (confLwr && ((confSpec && confNum && !confUppr) || (confSpec && !confNum && confUppr) || (!confSpec && confNum && confUppr))) {
        multiChar[2] = randomChar(lettersLow);
    }    else {
        multiChar[3] = randomChar(lettersLow);
    }

    return multiChar;

} // creates an array that has one of each confirmed character type

console.log(randArr());

var password = "";

 if(!confUppr && !confLwr && !confNum && !confSpec) {
    alert("You must pick at least one type of character!");
    document.getElementById("password").textContent = "You must pick at least one type of character to generate a password!";
    } else {
        for(var i = 0; i < passLength; i++) {
        
            var char = randArr()[Math.floor(Math.random() * options)]
            console.log(char);
            password = password + char;
        }
        document.getElementById("password").textContent = password;
    }
console.log(password);

