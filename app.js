window.addEventListener("load", ()=>{
    document.querySelector(".song").play();
})

let items = ["heart1", "heart2", "heart3", "heart4", "heart5", "heart6"];

for(let i = 0; i<items.length; i++){
    let heartElement = document.createElement("div");
    heartElement.classList.add(items[i]);
    heartElement.classList.add("heart")
    document.body.appendChild(heartElement);
}

document.body.classList.add("darkMode");

// Stage 2

window.setTimeout(()=>{
    let removeItems = document.querySelectorAll(".heart");
    removeItems.forEach(element => {
        document.body.removeChild(element);
    });
    
    let frame = document.createElement("div");
    frame.classList.add("frame");
    document.body.appendChild(frame);

    let balloons = document.querySelectorAll(".balloon")

    for(let i = 0; i<=3; i++){
        balloons[i].classList.add("floatTop" + (i+1).toString());
    }

},6000)

window.setTimeout(()=>{
    var typed = new Typed(document.querySelector(".text"), {
        strings: ['My lovely Zelly, I wish you <br> a very warm, wonderful and <br> happy birthday! You mean <br> the most to me, and I am so <br> glad that I have you in my <br> life. The world\'s cutest, <br> sweetest, most caring and <br> the most special person was <br> born on this day! I love you <br> so much, my sweetheart. <br> <br> 💖 Happy Birthday 💖'],
        typeSpeed: 30,
      });
},8000)

