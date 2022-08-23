var input = document.getElementById("input");
var output = document.getElementById("output");
var outstring;
var toggled = false;

function decrypt() {
    try {
   if (input.value == "") {
    alert("ERROR");
   }else {
    outstring = atob(input.value);
    output.innerText = "output : " + outstring;
   }
   if (toggled === true) {
    input.value = outstring;
   }
} catch {
    
}
}
function changed() {
    if (toggled === true) {
        document.cookie = ("toggle=false");
       toggled = false;
    }else {
        document.cookie = ("toggle=true");
        toggled = true;
    }
}
//encryptor
var output1 = document.getElementById("output1");
var input1 = document.getElementById("input1");
var outstring1;

function encrypt() {
   try {
    if (input1.value === "") {
        alert("ERROR");
    }else {
        outstring1 = btoa(input1.value);
        output1.innerText = "output : " + outstring1;
        if (toggled === true) {
            input1.value = outstring1;
        }
    }
   }catch {

   }
}
function reset() {
    output1.innerText = "output : none";
    output.innerText = "output : none";
}