
//I referred to this website for info: https://www.w3schools.com/jsref/event_onload.asp


let image = document.querySelector("#image img");

function changeImage()
{
    let random = Math.floor(Math.random() * 7) + 1; 

    if(random == 1)
        {
            image.src = "mainPageImages/main.png";
        }
        else if(random == 2)
        {
            image.src = "mainPageImages/main1.png";
        }
        else if(random == 3)
        {
            image.src = "mainPageImages/main2.png";
        }
        else if(random == 4)
        {
            image.src = "mainPageImages/main3.png";
        }
        else if(random == 5)
        {
            image.src = "mainPageImages/main4.png";
        }
        else if(random == 6)
        {
            image.src = "mainPageImages/main5.png";
        }
        else
        {
            image.src = "mainPageImages/main6.png";
        }

}

window.addEventListener("load", changeImage);
window.addEventListener("load", updateMessage);

let title = document.querySelector("#title a");
let colorList = ["#d4af37", "white", "darkgray", "black", "red", "darkred"];

title.addEventListener("click", titleClick);

function titleClick(event)
{
    event.preventDefault();
    changeColor();
}


function changeColor()
{
    let randomColor = colorList[Math.floor(Math.random()*colorList.length)];
    title.style.color = randomColor;
}

function updateMessage()
{
    const day = new Date().getDay();
    const messages = document.getElementById("messages");
    
    let tip = "";

    if(day === 0)
    {
        tip = "Stronger heartbeat means the hunter is nearby!";
    }
    else if(day === 1)
    {
        tip = "Hunters' movement speed varies!";
    }
    else if(day === 2)
    {
        tip = "Let the rescuer rescue!";
    }
    else if(day === 3)
    {
        tip = "Cipher progress is shared across the team!";
    }
    else if(day === 4)
    {
        tip = "Don't waste pallets too early in the match!";
    }
    else if(day === 5)
    {
        tip = "Knowing the hunter’s ability is key to countering it!";
    }
    else if(day === 6)
    {
        tip = "Rotate away from teammates when being chased!";
    } 
    messages.textContent = tip;
}

let menu = document.getElementById("menu");
let navs = document.querySelectorAll("nav");

menu.addEventListener("click", function(){
    for(let i = 0; i< navs.length; i++)
    {
        navs[i].classList.toggle("show");
    }
});