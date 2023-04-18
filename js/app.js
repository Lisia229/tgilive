let bubble1 = document.getElementById('bubble_1')
let bubble2 = document.getElementById('bubble_2')
let bubble3 = document.getElementById('bubble_3')
let bubble4 = document.getElementById('bubble_4')
let bubble5 = document.getElementById('bubble_5')
let bubble6 = document.getElementById('bubble_6')
let zone1 = document.getElementById('hover_area_1')
let zone2 = document.getElementById('hover_area_2')
let zone3 = document.getElementById('hover_area_3')
let zone4 = document.getElementById('hover_area_4')
let zone5 = document.getElementById('hover_area_5')
let zone6 = document.getElementById('hover_area_6')

zone5.addEventListener('mouseover', function () {
  bubble4.classList.add('show')
})
zone5.addEventListener('mouseout', function () {
  bubble4.classList.remove('show')
})

zone3.addEventListener('mouseover', function () {
  bubble3.classList.add('show')
})
zone3.addEventListener('mouseout', function () {
  bubble3.classList.remove('show')
})

zone4.addEventListener('mouseover', function () {
  bubble1.classList.add('show')
})
zone4.addEventListener('mouseout', function () {
  bubble1.classList.remove('show')
})

zone2.addEventListener('mouseover', function () {
  bubble6.classList.add('show')
})
zone2.addEventListener('mouseout', function () {
  bubble6.classList.remove('show')
})

zone1.addEventListener('mouseover', function () {
  bubble2.classList.add('show')
})

zone1.addEventListener('mouseout', function () {
  bubble2.classList.remove('show')
})

zone6.addEventListener('mouseover', function () {
  bubble5.classList.add('show')
})

zone6.addEventListener('mouseout', function () {
  bubble5.classList.remove('show')
})

