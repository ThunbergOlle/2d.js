const gamecanvas = document.getElementById('game');

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

class Sprite {
    constructor(x, y, h, w, src) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.src = src;

        this.img = 0;

        
        this.alive = true;
        this.hp = 100;
        
        this.player = false;
        this.steps = 10;
        this.static = false;
        this.input = 'wasd';
    }


    render() {
        document.getElementById("hp").innerHTML = this.hp;
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
        if (!this.static && this.alive) {
            console.log(this.static);
            this.x += x;
            this.y += y;

            this.img.style.left = this.x + 'px';
        }
    }
    move() {
        if (!this.static && this.input === 'wasd' && this.player === true && this.alive) {
            let input = (key) => {
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
    die () {
        this.alive = false;
        this.img = undefined;
    }
    updatehp(hp) {
        this.hp += hp;
        console.log(this.hp);
        document.getElementById("hp").innerHTML = this.hp;
        if(this.hp < 0){
            this.alive = false;
            this.img.style.visibility = "hidden";
        }
    }
}
