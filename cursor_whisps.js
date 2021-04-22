let conf = {
  NUM_PARTICLES: 8, // length of tail
  NUM_STRANDS: 10, // Number of lines going
  FRAME_RATE: 60
}
let pos = {x: Math.random() * window.innerWidth + 1, y:Math.random() * window.innerHeight + 1}
function setup() {
  var canvas = createCanvas(window.innerWidth - 10, window.innerHeight - 10);
  canvas.parent('home-whisps-container');
  frameRate(conf.FRAME_RATE)
}
function windowResized() {
  resizeCanvas(window.innerWidth - 20, window.innerHeight - 10);
}
class Strand {
  constructor () {
    this.p = []
    let p = this.p
    let r = Math.random() * 0.4
    while(conf.NUM_PARTICLES > p.length) {
      r = r * 0.2
      let particle = new Particle(1 - p.length/conf.NUM_PARTICLES, r)
      if (p.length > 0) {
        particle.follow = p[p.length - 1]
      }
      p.push(particle)
    }
  }
  draw () {
    let q1, q2, q3, q4;
    this.p.map(p => {
      p.update()
    })
    const sections = {a:[], b:[]}
    let i;
    for (i = this.p.length - 1; i >= 0; i--){
      noStroke()
      const pt = this.p[i]
      if (i === 0 || i === this.p.length - 1) {
        q1 = [pt.x, pt.y]
        q2 = [pt.x, pt.y]
        sections.a.push(q1) //to-end
      } else {
        q1 = [
          Math.cos(pt.a+HALF_PI)*pt.w + pt.x,
          Math.sin(pt.a+HALF_PI)*pt.w + pt.y
        ]
        q2 = [
          Math.cos(pt.a-HALF_PI)*pt.w + pt.x,
          Math.sin(pt.a-HALF_PI)*pt.w + pt.y
        ]
        sections.a.push(q1) //to-end
        sections.b.unshift(q2) //to-front
      }
      if (i < this.p.length-1 && pt.a !== null){
        fill(color(140, pt.c/2 + 100, 195 + pt.c, pt.c - 180))
        quad(q1[0], q1[1], q2[0], q2[1], q3[0], q3[1], q4[0], q4[1])
      }
      q4 = [q1[0], q1[1]]
      q3 = [q2[0], q2[1]]
    }
    let s = sections.a.concat(sections.b)
    noFill()
    for (i = 3; i < s.length; i++){
      let pts = [...s[i-3], ...s[i-2], ...s[i-1], ...s[i]]
      stroke(140, 178, 255, 120);
      curve(...pts)
    }
  }
}
class Particle {
  constructor(n, r){
    try {
      this.x = mouseX
      this.y = mouseY
    } catch (e) {
      this.x = 0
      this.y = 0
    }
    this.vx = 0
    this.vy = 0
    this.c = Math.floor(n * 120 + 120)
    this.follow = null;
    this.a = null
    this.width = 1  // width of tail in movement
    this.r = r || Math.random() * 0.04
  }
  update () {
    if (a % 2 === 0) {
      if (this.follow !== null){
        this.vx = this.vx * (0.68 - this.r / 2) - (this.x - this.follow.x) * (0.07 - this.r*0.2)
        this.vy = this.vy * (0.68 - this.r / 2) - (this.y - this.follow.y) * (0.07 - this.r*0.2)
      } else {
        if(!mouseIsPressed){
          // on mouse-down, not follow mouse
          this.vx = this.vx * (0.98 - this.r * 0.13) - (this.x - mouseX) * (0.01 + this.r*0.5)
          this.vy = this.vy * (0.98 - this.r * 0.13) - (this.y - mouseY) * (0.01 + this.r*0.5)
        } else {
          this.vx = this.vx * (0.98 - this.r * 0.3) - (this.x - pos.x) * (0.02 + this.r*0.4)
          this.vy = this.vy * (0.98 - this.r * 0.3) - (this.y - pos.y) * (0.02 + this.r*0.4)
        }
      }
      this.a = Math.atan2(this.vy, this.vx)
      let len = Math.min(this.vy * this.vy + this.vx * this.vx, 7500) / 3500
      len = sin(len * HALF_PI)
      this.w = this.width // actuall width  original was this plus: '* len + 5'
    }
    this.vx = this.vx * 0.89
    this.vy = this.vy * 0.89
    this.x += this.vx / (conf.FRAME_RATE/85)
    this.y += this.vy / (conf.FRAME_RATE/85)
  }
}
window.addEventListener('resize', ()=>setup())
const strands = []
while (strands.length < conf.NUM_STRANDS) {
  strands.push(new Strand())
}
let a = 0
draw = () => {
    clear();
  a = (a + 1) % 1000
  if (a % 14 === 0) {
    // pick a new random location
    pos = {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }
  }
//  background(255,255,255);
  strands.forEach(s => s.draw())
}
