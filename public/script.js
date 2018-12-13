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
$('.end').click(appear)


const mouseEnter = (e) => {
	const className = e.currentTarget.classList[1]
	$(`.${className}-text`).css('display', 'block');
}

const mouseLeave = (e) => {
	const className = e.currentTarget.classList[1]
	$(`.${className}`).css("opacity", 1)
	$(`.${className}-text`).css('display', 'none')
}

$('.point1').hover(mouseEnter, mouseLeave)
$('.point2').hover(mouseEnter, mouseLeave)
$('.point3').hover(mouseEnter, mouseLeave)
$('.point4').hover(mouseEnter, mouseLeave)
$('.point5').hover(mouseEnter, mouseLeave)
$('.point6').hover(mouseEnter, mouseLeave)
$('.point7').hover(mouseEnter, mouseLeave)
$('.point8').hover(mouseEnter, mouseLeave)
$('.point9').hover(mouseEnter, mouseLeave)
$('.point10').hover(mouseEnter, mouseLeave)
$('.point11').hover(mouseEnter, mouseLeave)

