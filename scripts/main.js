
// console.log(hello.innerHTML)
var hello = document.getElementById("Hello");
var work = document.getElementById("work");
var contact = document.getElementById("contact");
var move1 = document.getElementById("move1");
var move3 = document.getElementById("move3");
var move5 = document.getElementById("move5");
console.log(hello)

function enterH() {
hello.style.marginLeft = "1em";
    hello.innerHTML = 'about'
    
}


function leaveH() {
hello.style.marginLeft = "0em";
    hello.innerHTML = "Hello"
};
function enterC(){
    contact.innerHTML = 'work'
contact.style.marginLeft = "1em";

}


function leaveC() {
    contact.innerHTML = 'I am'
contact.style.marginLeft = "0em";

};


function enterW(){
    work.innerHTML = 'contacts'
work.style.marginLeft = "1em";

}


function leaveW() {
    work.innerHTML = 'Jay.'
work.style.marginLeft='0em'

};

function Move1() {
   
    move1.style.marginLeft = '.8em'
}
function Move2() {
    move1.style.marginLeft = '0em'
}
function Move3() {
    move3.style.marginLeft = '.8em'
}
function Move4() {
    move3.style.marginLeft = '0em'
}
function Move5() {
    move5.style.marginLeft = '.8em'
}
function Move6() {
    move5.style.marginLeft = '0em'
}
