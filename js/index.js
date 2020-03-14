// circle13
let circleAnimation = anime({
  targets: circle,
  rotate: [0, 360],
  easing: 'linear',
  duration: 50000,
  loop: true
});

let barAnimation = anime({
  targets: bar,
  translateX: 200
  autoplay: false
})
let bar = document.getElementById('bar')
bar.onclick = barAnimation.play

// // icon_12
// let iconAnimation = anime ({
//   targets: icon,
//   rotate: [0, 360],
//   autoplay: false,
//   duration: 2000
// })
// let icon01 = document.getElementById('icon')
// icon01.onclick = iconAnimation.play

// alert не работает
function myFunction() {
  let guest1 = prompt("Please enter your name", "Hot stuff");
  if (guest1 != null) {
    document.getElementById("guest").innerHTML = guest1
  }
}

// кнопАчка больше не вертится
let blocks = document.querySelector('.blocks');
let icon = document.querySelector('.icon');
blocks.style.display = 'none'

icon.addEventListener("click",      function() {

    if(blocks.style.display == 'none')  blocks.style.display = 'block';
    else blocks.style.display = 'none'

  });

let rectangles = document.querySelector('.rectangles');
let tool2 = document.querySelector('.tool2');
rectangles.style.display = 'none'

tool2.addEventListener("click",      function() {

    if(rectangles.style.display == 'none')  rectangles.style.display = 'block';
    else rectangles.style.display = 'none'

  });
