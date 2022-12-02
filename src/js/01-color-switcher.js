const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  refs.btnStop.disabled = true;
let timer;
  function startRandomColor (){
    refs.btnStop.disabled = false;
    refs.btnStart.disabled = true;
    timer = setInterval(() => {
        document.body.style.backgroundColor = `${getRandomHexColor()}`;
      }, 1000);
  }
function stopRandomColor (){
    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;
    clearInterval(timer)
}


  refs.btnStart.addEventListener('click', startRandomColor);
  refs.btnStop.addEventListener('click', stopRandomColor)