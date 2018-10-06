const gamediv = document.getElementById('game');

class Game {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    init(backgroundImage, backgroundColor) {
        gamediv.style.width = this.width + 'px';
        gamediv.style.height = this.height + 'px';
        gamediv.style.zIndex -= 5;
        gamediv.style.position = 'relative'
        gamediv.style.backgroundColor = backgroundColor;
    }
}
class HpBar {
    constructor() {
        this.maxhp = 100;
        this.minhp = 0;
        this.currenthp = 100;
        this.god = false;
    }

    remove(hp) {
        if (!this.god) {
            this.currenthp -= hp;
        }
    }
}
class Sprite {
    constructor(x, y, h, w, src) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.src = src;

        this.img = 0;

        this.player = false;
        this.steps = 10;
        this.static = false;
        this.input = 'wasd';
    }

    render() {
        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.position = 'absolute';
        this.img.style.left = this.x + 'px';
        this.img.style.top = this.y + 'px';
        this.img.style.zIndex = -1;
        console.log(this.height);
        this.img.style.height = this.height + 'px';
        this.img.style.width = this.width + 'px';

        this.img.onload = () => {
            gamediv.appendChild(this.img);
        }


    }

    moveForce(x, y) {
        console.log("MOVE");
        if (!this.static) {
            console.log(this.static);
            this.x += x;
            this.y += y;

            this.img.style.left = this.x + 'px';
            console.log(this.img);
        }
    }
    move() {
        if (!this.static && this.input === 'wasd' && this.player === true) {
            if (document.onkeydown = 37) {
                console.log("123");
            }
            let input = (key) => {
                console.log(key);
                let parseWidth = gamediv.style.width.toString();
                parseWidth = parseWidth.replace("px", "");
                let parseHeight = gamediv.style.height.toString();
                parseHeight = parseHeight.replace("px", "");
                if (key === 'ArrowRight' && this.x < parseWidth - this.width) {
                    this.x += 10;
                    this.img.style.left = this.x + 'px';
                } else if (key === 'ArrowLeft' && this.x > 0) {
                    this.x -= 10;
                    this.img.style.left = this.x + 'px';
                } else if (key === 'ArrowDown' && this.y < parseHeight - this.height) {
                    this.y += 10;
                    this.img.style.top = this.y + 'px';
                } else if (key === 'ArrowUp' && this.y > 0) {
                    this.y -= 10;
                    this.img.style.top = this.y + 'px';
                }


            }

            window.addEventListener('keydown', function (e) {
                // ERROR IS CAUSED BECAUSE "THIS" CAN NOT BE USED INSIDE AN EVENT LISTERNER: THEN ITS REFFERED TO AS THIS.event or whatever.
                const getkey = e.key; // "a", "1", "Shift", etc
                input(getkey);
            });


        }

    }
}
