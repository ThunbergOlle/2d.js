const game = document.getElementById('game');


class hpBar {
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
    constructor(x, y, h, w, src, staticIn) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.src = src;

        this.img;
        this.static = staticIn;

    }

    render() {
        this.img = document.createElement("img");
        this.img.src = this.src;
        this.img.style.position = 'absolute';
        this.img.style.zIndex = -1;
        console.log(this.height);
        this.img.style.height = this.height + 'px';
        this.img.style.width = this.width + 'px';

        this.img.onload = () => {
            game.appendChild(this.img);
        }


    }
    move(x, y) {
        console.log("MOVE");
        if (!this.static) {
            console.log(this.static);
            this.x += x;
            this.y += y;

            this.img.style.left = this.x + 'px';
            console.log(this.img);
        }
    }
}
