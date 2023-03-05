// const senior = document.querySelector('.senior');
// // const wrap = document.querySelector('.wrap')


// senior.addEventListener('click', function(e){
//     if((e.target.nodeName)=="SPAN"){
//   alert("別再點了");
// }
//   else{
//     alert('開門啦');
// }
// }
// )

// let mySl = document.myForm.mySelect;
// function GO(){
//   newWin = open();
//   newWin.location.href = mySl.options[mySl.selectedIndex].value;}

// let mySl2 = document.myForm2.mySelect;
// function GO2(){
//   newWin2 = open();
//   newWin2.location.href = mySl2.options[mySl2.selectedIndex].value;}

$(".dropAn5")
  .mouseover(function() {
  $(".dropdownAn5").show(300);
});
$(".dropAn5")
  .mouseleave(function() {
  $(".dropdownAn5").hide(300);     
});

$(".dropShih5")
  .mouseover(function() {
  $(".dropdownShih5").show(300);
});
$(".dropShih5")
  .mouseleave(function() {
  $(".dropdownShih5").hide(300);     
});

$(".dropAn6")
  .mouseover(function() {
  $(".dropdownAn6").show(300);
});
$(".dropAn6")
  .mouseleave(function() {
  $(".dropdownAn6").hide(300);     
});

$(".dropShih6")
  .mouseover(function() {
  $(".dropdownShih6").show(300);
});
$(".dropShih6")
  .mouseleave(function() {
  $(".dropdownShih6").hide(300);     
});

Swal.fire({
  title: '歡迎光臨，已進入收費模式，每分鐘十萬元，未滿一分鐘以一分鐘計算。',
  width: 780,
  padding: '3em',
  color: '#716add',
  background: '',
  backdrop: `
    rgba(0,0,123,0.4)
 url(https://sweetalert2.github.io/#examplesimages/trees.png)',
    left top
    no-repeat
  `
})

const panels = document.querySelectorAll('.panel'); 

panels.forEach( panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach( panel => {
        panel.classList.remove('active');
    })
}

const panelBgsizeCover = document.querySelector(".panelBgsizeCover")
const panelBgsizeContain = document.querySelector(".panelBgsizeContain")
const panel = document.querySelectorAll(".panel")
panelBgsizeContain.addEventListener("click" , function() {
  
panel.forEach(function (item) {
  item.style.backgroundSize = "contain"
})
})

panelBgsizeCover.addEventListener("click" , function() {
  
  panel.forEach(function (item) {
    item.style.backgroundSize = "cover"
  })
  })

  const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}