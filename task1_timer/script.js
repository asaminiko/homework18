let parent = document.getElementById('parent')
let element = document.createElement('h3')
let start = document.createElement('button')
let stopBtn = document.createElement('button')

stopBtn.id = 'stop'
start.id = 'start'

element.textContent = formatDate(0)
start.textContent = 'START'
stopBtn.textContent = 'STOP'

parent.appendChild(element)
parent.appendChild(start)

let time = 6000
let interval

function timer(newTime) {
  interval = setInterval(function () {
    if (newTime < 1000) {
      stopTime()
    }
    element.textContent = formatDate(newTime)
    newTime -= 1000
  }, 1000)

  parent.appendChild(stopBtn)
  start.remove()
}

function formatDate(newTime) {
  return new Date(newTime).toISOString().substr(14, 5)
}

parent.addEventListener('click', (event) => {
  if (event.target.id === start.id) {
    if (time > 1000) {
      timer(time)
    }
  }
  if (event.target.id === stopBtn.id) {
    stopTime()
  }
})
function stopTime() {
  element.textContent = formatDate(0)
  clearInterval(interval)
  stopBtn.remove()
  parent.appendChild(start)
}
