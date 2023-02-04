const characters = "!@#$%^&*()_+~|}{[]:;?><,./-=";
const upperKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerKeys = "abcdefghijklmnopqrstuvwxyz";
const randomKeys = upperKeys + lowerKeys;
let firstPassword= [];
let password= document.getElementById("password")
let btn= document.getElementById("btn")
let copy= document.getElementById("copy")
let copied = document.getElementById("copied");

function GetRandomPassword() {
    const newPassword=[]

firstPassword.push(characters[(Math.floor(Math.random()*characters.length))])
firstPassword.push(characters[(Math.floor(Math.random()*characters.length))])
firstPassword.push(characters[(Math.floor(Math.random()*characters.length))])
firstPassword.push((Math.floor(Math.random()*10)))
firstPassword.push((Math.floor(Math.random()*10)))
firstPassword.push(lowerKeys[(Math.floor(Math.random()*lowerKeys.length))])
firstPassword.push(upperKeys[(Math.floor(Math.random()*upperKeys.length))])
firstPassword.push(randomKeys[(Math.floor(Math.random()*randomKeys.length))])
firstPassword.push(randomKeys[(Math.floor(Math.random()*randomKeys.length))])
firstPassword.push(randomKeys[(Math.floor(Math.random()*randomKeys.length))])

console.log(firstPassword)

for (let i = 10; i >0 ; i--) {
   let a=Math.floor(Math.random()*i);

   newPassword.push(firstPassword[a])
   firstPassword.splice(a,1);

   console.log(firstPassword)
console.log(newPassword)

}
const withoutcomma = newPassword.join("");
password.innerText = withoutcomma;
}

btn.addEventListener("click", GetRandomPassword);

copy.addEventListener("click",function () {
    

copied.style.visibility="visible";

setTimeout(()=> {copied.style.visibility="hidden"}, 1000);


    navigator.clipboard.writeText(password.innerText);
})



GetRandomPassword()