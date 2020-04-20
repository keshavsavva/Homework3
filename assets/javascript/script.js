var length = document.getElementById("passLength");
var spec = document.getElementById("confSpec");
var num = document.getElementById("confNum");
var uppr = document.getElementById("confUppr");
var lwr = document.getElementById("confLwr");
var submit = document.getElementById("submit");
submit.addEventListener("click", function() {
    event.preventDefault();
    var passLength = length.value;
    var confSpec = spec.checked;
    var confNum = num.checked;
    var confUppr = uppr.checked;
    var confLwr = lwr.checked;

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
    var pwd = document.getElementById("password");
    var password = "";

    if(!confUppr && !confLwr && !confNum && !confSpec) {
        alert("You must pick at least one type of character!");
    pwd.textContent = "You must pick at least one type of character to generate a password!";
        } else {
            for(var i = 0; i < passLength; i++) {
            
                var char = randArr()[Math.floor(Math.random() * options)]
                console.log(char);
                password = password + char;
            }
            pwd.textContent = password;
        }
    console.log(password);
});

var refresh = document.querySelector(".genPass");
var copy = document.querySelector(".copy");

function reload(event) {
    event.preventDefault();
    window.location.reload();
} //reload event

refresh.addEventListener("click", reload);


function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("password");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }
  
  copy.addEventListener("click", myFunction);