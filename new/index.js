let ctx;
class Game{
    constructor(w, h){
        this.canvas = document.createElement('canvas');
        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx = this.canvas.getContext("2d");
        ctx = this.ctx;
        this.interval = setInterval(this.update(this.canvas), 20);

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);        

    }
    
    update(canvas){
       ctx.clearRect(0,0, canvas.width, canvas.height);
    }
}

class Sprite{
    constructor(w, h, x, y, img){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.src = img;


        this.controllable = false;
        this.static = false;
        this.alive = true;
    }
    display(){
        if(this.src === undefined){
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y, this.width, this.height);   
        }
    }
}
