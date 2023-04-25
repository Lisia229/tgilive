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


gsap.registerPlugin()

const tl = new TimelineMax({
  paused: true
})

const clickArea = $('#background')

let click = true

// clickArea.on("click", function(){
//   console.log('click');
//   click ? tl.play() : tl.reverse();
//   click = !click;
// });
var intervalId = setInterval(function () {
  click ? tl.play() : tl.reverse()
  click = !click
}, 10000)

clickArea.on('click', function () {
  clearInterval(intervalId)
  click ? tl.play() : tl.reverse()
  click = !click
  intervalId = setInterval(function () {
    click ? tl.play() : tl.reverse()
    click = !click
  }, 10000)
})

tl.staggerTo(
  '#background',
  1,
  {
    'background-image': 'linear-gradient(#000,#333,#000, #111111)'
  },
  2,
  0
)
  .staggerTo(
    '#earth-ring-4 stop',
    1,
    {
      cycle: {
        stopColor: ['#CEA3C1', '#5DA6F3']
      }
    },
    0.5,
    0
  )
  .staggerTo(
    '#earth-ring-3 stop',
    1,
    {
      cycle: {
        stopColor: ['#CA9AC1', '#5396E0']
      }
    },
    0.5,
    0
  )
  .staggerTo(
    '#earth-ring-2 stop',
    1,
    {
      cycle: {
        stopColor: ['#C694C3', '#3978C0']
      }
    },
    0.5,
    0
  )
  .staggerTo(
    '#earth-ring-1 stop',
    1,
    {
      cycle: {
        stopColor: ['#A675AE', '#265489']
      }
    },
    0.5,
    0
  )
  .staggerTo(
    '#earth-1 stop',
    1,
    {
      cycle: {
        stopColor: ['#FFF9EB', '#3A96B9']
      }
    },
    0.5,
    0
  )
  .to('#land-light-1', 1, { fill: '#D9FFA9' }, 0)
  .to('#land-light-2', 1, { fill: '#D9FFA9' }, 0)
  .to('#land-light-3', 1, { fill: '#D9FFA9' }, 0)
  .to('#land-dark-1', 1, { fill: '#95CB8B' }, 0)
  .to('#land-dark-2', 1, { fill: '#95CB8B' }, 0)
  .to('#land-dark-3', 1, { fill: '#95CB8B' }, 0)
  .to('#city-right-1', 1, { fill: '#B3C4B3' }, 0)
  .to('#city-right-2', 1, { fill: '#D5DDC2' }, 0)
  .to('#city-left-2', 1, { fill: '#D5DDC2' }, 0)
  .to('#city-left-3', 1, { fill: '#D5DDC2' }, 0)
  .to('#earth', 1, { ease: Power4.easeInOut, y: 200 }, 0)
  .to('#land', 1, { ease: Power4.easeInOut, y: -320 }, 0)
  .to('#moon', 1, { ease: Power4.easeInOut, y: -300 }, 0)
  .progress(1)
  .progress(0)

const blink1 = $('.blink-1')
const blink2 = $('.blink-2')
const blink3 = $('.blink-3')

const tlBlink1 = new TimelineMax({
  repeat: -1,
  yoyo: true
})

tlBlink1
  .to(blink1, 1, { opacity: 0 }, 1)
  .to('#cloud-1', 2, { ease: Power4.easeInOut, x: 30 }, 1)
  .to('#cloud-1', 2, { opacity: 0 }, 1)
  .to('#cloud-4', 2, { ease: Power4.easeInOut, x: -20 }, 1)
  .to('#cloud-4', 2, { opacity: 0 }, 1)
  .to('#cloud', 2, { ease: Power4.easeInOut, x: -50 }, 1)
  .to('#cloud', 2, { opacity: 0 }, 1)
  .play()

const tlBlink2 = new TimelineMax({
  repeat: -1,
  yoyo: true
})

tlBlink2
  .to(blink2, 1, { opacity: 0 }, 2)
  .to('#cloud-2', 2, { ease: Power4.easeInOut, x: -20 }, 2)
  .to('#cloud-2', 2, { opacity: 0 }, 2)
  .to('#cloud-6', 2, { ease: Power4.easeInOut, x: 30 }, 2)
  .to('#cloud-6', 2, { opacity: 0 }, 2)
  .play()

const tlBlink3 = new TimelineMax({
  repeat: -1,
  yoyo: true
})

tlBlink3
  .to(blink3, 1, { opacity: 0 }, 3)
  .to('#cloud-3', 2, { ease: Power4.easeInOut, x: -30 }, 3)
  .to('#cloud-3', 2, { opacity: 0 }, 3)
  .to('#cloud-5', 2, { ease: Power4.easeInOut, x: 30 }, 3)
  .to('#cloud-5', 2, { opacity: 0 }, 3)
  .play()

