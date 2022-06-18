// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// NAME
// ——————————————————————————————————————————————————

const name = [
  'aitor garcia',
  'aitor garcia'
]

const eln = document.querySelector('#name')
const fxn = new TextScramble(eln)

let countern = 0
const nextn = () => {
  fxn.setText(name[countern]).then(() => {
    setTimeout(nextn, 2000)
  })
  countern = (countern + 1) % name.length
}

nextn()

// ——————————————————————————————————————————————————
// INTRO
// ——————————————————————————————————————————————————

const phrases = [
  'programmer & computer scientist',
  'software-developer & game developer',
  'full-stack developer'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()

// ——————————————————————————————————————————————————
// ABOUT
// ——————————————————————————————————————————————————

const about = [
  'about',
  'about',
  'about',
  'about'
]

const ela = document.querySelector('#about')
const fxa = new TextScramble(ela)

let countera = 0
const nexta = () => {
  fxa.setText(about[countera]).then(() => {
    setTimeout(nexta, 2000)
  })
  countera = (countera + 1) % about.length
}

nexta()

// ——————————————————————————————————————————————————
// SKILLS
// ——————————————————————————————————————————————————

const skills = [
  'skills',
  'skills',
  'skills',
  'skills'
]

const els = document.querySelector('#skills')
const fxs = new TextScramble(els)

let counters = 0
const nexts = () => {
  fxs.setText(skills[counters]).then(() => {
    setTimeout(nexts, 2000)
  })
  counters = (counters + 1) % skills.length
}

nexts()

// ——————————————————————————————————————————————————
// RECENT
// ——————————————————————————————————————————————————

const recent = [
  'recent',
  'recent',
  'recent',
  'recent'
]

const elr = document.querySelector('#recent')
const fxr = new TextScramble(elr)

let counterr = 0
const nextr = () => {
  fxr.setText(recent[counterr]).then(() => {
    setTimeout(nextr, 2000)
  })
  counterr = (counterr + 1) % recent.length
}

nextr()

// ——————————————————————————————————————————————————
// CONTACT
// ——————————————————————————————————————————————————

const contact = [
  'contact',
  'contact',
  'contact',
  'contact'
]

const elc = document.querySelector('#contact')
const fxc = new TextScramble(elc)

let counterc = 0
const nextc = () => {
  fxc.setText(contact[counterc]).then(() => {
    setTimeout(nextc, 2000)
  })
  counterc = (counterc + 1) % contact.length
}

nextc()