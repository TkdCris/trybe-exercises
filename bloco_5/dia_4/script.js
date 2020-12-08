window.onload = function() {

  // Coloca listener no botão darkMode
  function btnDarkMode() {
    let btn_bg_color = document.querySelector('#btn_bg_color');
    btn_bg_color.addEventListener('click', darkMode);
    console.log(btn_bg_color)
  }
  btnDarkMode();

}

function changeDarkMode() {
  let darkModeStatus = localStorage.getItem('darkModeStatus');
  if (darkModeStatus === 'false') {
    darkModeStatus = true;
  } else {
    darkModeStatus = false;
  }
  localStorage.setItem('darkModeStatus', darkModeStatus)
}

//Acionada com click no botão darkMode
function darkMode() {
  darkModeStatus = localStorage.getItem('darkModeStatus');
  console.log(darkModeStatus)
  if (darkModeStatus === 'true') {
    let body = document.querySelector('body');
    document.body.style.backgroundColor = 'rgb(195, 206, 194)';
    document.body.style.color = 'rgb(0,0,0)';

  } else {
    let bg_dark_color = 'rgb(10,20,30)';
    let body = document.querySelector('body');
    document.body.style.backgroundColor = 'rgb(10,20,30)';
    document.body.style.color = 'rgb(150,150,180)';
    localStorage.setItem('bg_dark_color', bg_dark_color);
  }
  changeDarkMode();

}