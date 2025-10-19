// var beholderImage;
// var timerId;



// function startMovingRight() {
//    beholderImage = document.getElementById("beholder");
//    timerId = setInterval(movePicRight,0,10);
// }


// function startMovingLeft() {
//    beholderImage = document.getElementById("beholder");
//    timerId = setInterval(movePicLeft,0,10);
// }


// function movePicRight() {
//    let left = parseInt(beholderImage.style.left) || 0;
//    beholderImage.style.left = left + 5 + "px";
// }


// function movePicLeft() {
//    let right = parseInt(beholderImage.style.right) || 0;
//    beholderImage.style.right = right + 5 + "px";
// }


window.addEventListener("load",startMovingRight);
setTimeout(() => clearInterval(timerId), 200);
window.setTimeout(timerId);








async function fetchCharacter() {
      const response = await fetch("https://github.com/dev-bhhtaxman/dnd-character-generator/blob/6659282a9b8b7a2d507e9c3e0f7ccf74f4d6a482/app.py");
      const data = await response.json();

      document.getElementById("abcdef").value = JSON.stringify(data, null, 2);
    }




















