function registration(id){
  document.getElementById(id).style.display='block';
  document.getElementById('registration').style.display='none';
  return false;
}
function page1(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page1').style.display='none';
    document.getElementById('body').style.background='none';
    return false;
  }
function page2(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page2').style.display='none';
    return false;
  }
function page3(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page3').style.display='none';
    return false;
  }
  function page4(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page4').style.display='none';
    return false;
  }
  function choice(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('choice').style.display='none';
    return false;
  }
  function page5(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page5').style.display='none';
    return false;
  }
  function woosh(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page6').style.display='none';
    document.getElementById('choice').style.display='none';
    return false;
  }
function morw(c, nc) {
  document.getElementById(c).style.background='#E1741C';
  document.getElementById(nc).style.background='#000';
}
function point(p, n1, n2){
  document.getElementById(p).style.display='block';
  document.getElementById(n1).style.display='none';
  document.getElementById(n2).style.display='none';
}

//при нажатии на кнопку меняю фон на градиент, а также заношу в массив значения с кнопок
let info = []
const buttons = document.querySelectorAll('.filters_element .element1');
buttons.forEach(button => {
    button.addEventListener('click', () => {
         if (button.style.background === '' || button.style.background === 'none') {
            if((info.includes(button.value)) === false){info.push(button.value)}
            console.log(info)
            button.style.background = 'linear-gradient(45deg, #DA00C2, #DA0C47,#DA1505,#E1741C'
            }
         else 
            {
                info = info.filter(item => item !== button.value);
                console.log(info)
                button.style.background = '';
            }
      });
 });





