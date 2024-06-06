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
  function page5(id) {
    document.getElementById(id).style.display='block';
    document.getElementById('Page5').style.display='none';
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