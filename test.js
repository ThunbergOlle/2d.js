const twodjs = require('./index.js');

let background = new twodjs.Background();
console.log(background);
let sprite = new twodjs.Sprite();
console.log(sprite.x);
console.log(sprite.texture);
sprite.move();
console.log(sprite.x);