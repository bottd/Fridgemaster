function appear(e) {
  for (let i = 0; i < 12; i ++ ){
    if(e.target.classList[1].includes(`${i}`)) {
      $(`.endpoint${i}`).toggleClass('appear', `.endpoint${i}`)  
    }
  }
}

$('.point1').click(appear)
$('.point2').click(appear)
$('.point3').click(appear)
$('.point4').click(appear)
$('.point5').click(appear)
$('.point6').click(appear)
$('.point7').click(appear)
$('.point8').click(appear)
$('.point9').click(appear)
$('.point10').click(appear)
$('.point11').click(appear)