
//BUTTONS
let startButton = document.querySelector('button.startbttn');
let backgroundButton = document.querySelector('button.backgbttn');
let restartButton = document.querySelector('button.restartbttn');
let howToButton = document.querySelector('button.instructionsbttn')

//________________________________________________________________________________________________________________________________________________________________________________

//USER & HERO
let user = document.getElementById("name")
let hero = document.querySelector(".hero")


//How To Play/Intructions. User can click to display the instructions, and double click to hide the instructions
let howToPLay = "Try to collect as many coins for maximum points while trying to avoid the city buildings.Click on the spacebar to continue flying, the faster you click the higher you go. If you let go of the spacebar your hero will drop towards the groundThe game will end:Game-Over:  if you hit a building Win: if you have a total of 10 coins "


// const username = () => {
//     let userName = prompt('Please enter your superhero name')
//     if(userName === null || userName === ""){
//         alert("Please enter a valid name")
//         prompt('Please enter your name')
//     }
//     let name = user.innerHTML = "Welcome " + userName + "!"   
// }

// username()



let box1= document.querySelector('div.box')
let boxDimensions = box1.getBoundingClientRect()
console.log(boxDimensions)


let instruct = document.querySelector('div#text')

howToButton.addEventListener('click', e => {document.querySelector('div#text').innerHTML = howToPLay})  
howToButton.addEventListener('dblclick', e => {document.querySelector('div#text').innerHTML = "" })  


let backgroundOptions =  document.querySelector('button.backgbttn')
let boxBackg = document.querySelector('.box')
let currentBackg = document.querySelector('.box')


//BACKGROUND: Functions and event listeners to change background by clicking the background button 


function changeBackg(element) {
    element.style.backgroundImage = "url(https://static.wixstatic.com/media/4c3267_2eb5ee90a5aa455582466714cfd45854~mv2.jpg)"
}

function changeBackg2(element) {
    element.style.backgroundImage = "url(https://static.wixstatic.com/media/4c3267_33a92e2af3dd4c02b57d8a45adfd1cfb~mv2.jpg)"
}

backgroundOptions.addEventListener('dblclick', e => {    //element e & use arrow function 
    changeBackg(boxBackg)
})

backgroundOptions.addEventListener('click', e => {    //element e & use arrow function 
    changeBackg2(boxBackg)
})


//________________________________________________________________________________________________________________________________________________________________________________
//START FUNCTION --Keep in mind that two images will be moving once you land in the game. However, game won't start until user clicks "Start" button 

start = startButton.addEventListener('dblclick', startGame)

startButton.addEventListener('dblclick', startGame);

function startGame() {
     let ans = prompt("Are you ready to play? Type 'yes' to start")
     if (ans !== "yes") {
         prompt("Type 'yes' to start")
     }
  if(ans === "yes"){

//________________________________________________________________________________________________________________________________________________________________________________
//TIMER: Used SetInterval to keep track of time. If time hits 8, it will automically change the background 


let time = 0;
let timer = setInterval(function(){
    console.log("time")
    time++;

    let timePlay = document.querySelector('#Time').innerHTML =  "Time: " + time
    if(time === 8){
        changeBackg2(boxBackg)
    }
    
}, 8000);



//___________________________________________________________________________________________________________________________________________________________________________

//BUILDING
let build6 = document.querySelector('.buid6')


//________________________________________________________________________________________________________________________________________________________________________________
// //IMAGES

let buildingImgs = [   //create an array of images 
"https://static.wixstatic.com/media/4c3267_3b8f93f1b7874eecacdc4db943ea4b72~mv2.jpg", //build1  
"https://static.wixstatic.com/media/4c3267_78ed8701f9e14b02ac70a562167db996~mv2.png", //build2
"https://static.wixstatic.com/media/4c3267_1c7c77d72d174d5fa3697ac68ae876d1~mv2.png", //build3
'https://static.wixstatic.com/media/4c3267_7de0dfdb01ed4969af7d501196785181~mv2.png',

]

//SETINTERVAL TO CHANGE IMAGES AUTOMATICALLY
let imgs = 0;  //Assign variable starting at 0
let imgtimer = setInterval(function(){
    console.log("Skyscrapper2 approaching")
    imgs++;             

    if(imgs === 6) {                                     
        document.querySelector(".buid6").src = buildingImgs[0];  
        console.log("image2 changed succesfully")                   
    }
    if(imgs === 10) {
        document.querySelector(".buid6").src = buildingImgs[1];  
        console.log("image2 changed succesfully")  
     }

     if(imgs === 12) {                                   
        document.querySelector(".buid6").src = buildingImgs[2];  
        console.log("image2 changed succesfully") 
     }      

     if(imgs === 18) {                                   
        document.querySelector(".buid6").src = buildingImgs[3];  
        console.log("image2 changed succesfully") 
     }
}, 3000);
//______________________________________________________________________________________________________________________
//FLY FUNCTION  

const fly = () => {
    let list = hero.classList
    list.add('fly');
 
     setTimeout(function(){
         hero.classList.remove('fly');
     }, 1000);
 }
 
 document.addEventListener('keydown', e =>{
      if(e.code === "Space" || e.key === 32){
         const heroDistance = parseInt(window.getComputedStyle(hero).getPropertyValue('top'))
 
         const buildDistance = parseInt(window.getComputedStyle(build6).getPropertyValue('top'))
         console.log("space clicked")
         console.log(heroDistance)
         console.log(buildDistance)
         fly();
         
  }
 })

//___________________________________________________________________________________________________________________________________

//HERO DIMENSIONS

let heroDim = hero.getBoundingClientRect()
let heroHeight = heroDim.height
let heroWidth = heroDim.width


// BUILDING 6 DIMENSIONS
//Get Dimensions: Height & Width 
let buildDim6 = build6.getBoundingClientRect()
let build6Height = buildDim6.height
let build6Width = buildDim6.width



//Function below checks if both objects (hero & building) have collided 
let death = setInterval(function(){

    const heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'))
    console.log(heroTop)

    const build6lftie= parseInt(window.getComputedStyle(build6).getPropertyValue('left'))
    console.log(build6lftie)

    if (heroTop >= 780  && heroWidth <= build6Width && heroHeight <= build6Height && build6lftie < heroWidth){   // using different dimensions to check if they've collided. These are more accurate 
         build6.style.animation = "none";
          console.log("Dead6")
          clearInterval(death)//stops animation
          clearInterval(timer) //stops timer 
          clearInterval(imgtimer) //stops setInterval               
          clearInterval(coinPoints)//stops coins 
          alert("Superman has died!!")
        } 
    }, 2000);

//______________________________________________________________________________________________________________________________________________________-

//COIN TRACKER

let coin =  document.querySelector(".coin")

//GET DIMENSIONS
let coinStart = 0


//checks if both objects (hero & coin) have collided  
let coinPoints = setInterval(function(){
    
 const heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'))
    console.log(heroTop)

    const coinlftie= parseInt(window.getComputedStyle(coin).getPropertyValue('left'))
    console.log(coinlftie)

 if (heroTop >= 775 && coinlftie < -1690){
    coinStart+= 1
    document.querySelector('#Coins').innerHTML =  "Coins: " + coinStart 
    }
    

     if(coinStart == 10) {
        changeBackg(boxBackg)
        alert("You Win!")
        clearInterval(coinPoints)
        coin.style.animation = "none";
       clearInterval(timer)
} }, 1000);

}

}




