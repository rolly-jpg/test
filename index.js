function add7(num) {
    if (typeof num !== "number")
       return console.log('Not a number');
    return num + 7;
}
function multiply(numA,numB) {
    if ((typeof numA || typeof numB) !== "number")
        return console.log('Not a number');
    return numA*numB;
}
function capitalize(string) {
    if (typeof string !== "string")
        return console.log('Not a string');
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function lastLetter(string) {
    if (typeof string !== "string")
        return console.log('Not a string');
    return string.at(-1);
}

function loginForm() {
    let input = prompt("login?");
    if (input === "Admin") {
        let pass = prompt("password?");
        if (pass === "TheMaster") return alert("Welcome");
        else if (pass) return alert("wrong password");
        return alert("canceled");
    }
    else if (!input)
        return alert("canceled");
    alert("I don' know you");
}

function myBrowser() {
if (browser === "Edge") return alert("got Edge");
else if ( browser === ('Chrome'||'Firefox'||'Safari'||'Opera') ) return alert('Okay we support');
else alert("we hope");  
}

function askPrompt() {
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
}
}