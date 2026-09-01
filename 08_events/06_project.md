```js
let startGame;
function randomColor(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}
document.querySelector("#start").addEventListener('click',function(e){
  startGame=setInterval(function(){
    document.body.style.backgroundColor=randomColor();
  },1000)
})

document.querySelector("#stop").addEventListener('click',function(e){
  clearInterval(startGame);
})
```