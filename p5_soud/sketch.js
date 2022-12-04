/*
 * @name Preload SoundFile
 * @description Call loadSound() during preload() to ensure that the
 * sound is completely loaded before setup() is called. It's best to always
 * call loadSound() in preload(), otherwise sounds won't necessarily be loaded
 * by the time you want to play them in your sketch.
 *
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */

let song,button , hel;


function preload() {
  song = loadSound('assets/music1.mp3');
}

function setup() {
  createCanvas(710, 200);
  button = createButton("Click");
  button.mousePressed(goaway);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0, 255, 0);
  dura = select('#dura');
  dura.html(song.duration().toFixed(0));
  cTime = select('#currentTime');
}
function draw(){
  cTime.html(song.currentTime().toFixed(0));
}
function goaway(){
  song.trime(40,50);
}

// function mousePressed() {
//   if (song.isPlaying()) {
//     // .isPlaying() returns a boolean
//     song.pause(); // .play() will resume from .pause() position
//     background(255, 0, 0);
//   } else {
//     song.play();
//     background(0, 255, 0);
//   }
// }
// let sound1, sound2, cnv, amplitude;

// function preload(){
//   sound1 = loadSound('assets/music1.mp3');
//   sound2 = loadSound('assets/music2.mp3');
// }
// function setup(){
//   cnv = createCanvas(100, 100);
//   cnv.mouseClicked(toggleSound);

//   amplitude = new p5.Amplitude();
//   amplitude.setInput(sound2);
// }

// function draw() {
//   background(220);
//   text('tap to play', 20, 20);

//   let level = amplitude.getLevel();
//   let size = map(level, 0, 1, 0, 200);
//   ellipse(width/2, height/2, size, size);
// }

// function toggleSound(){
//   if (sound1.isPlaying() && sound2.isPlaying()) {
//     sound1.stop();
//     sound2.stop();
//   } else {
//     sound1.play();
//     sound2.play();
//   }
// }