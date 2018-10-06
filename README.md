<h1 style="text-align: center">2D.js</h1>
--
*"2D.js is a small game library for Javascript and web development" ❤️* 

This library is also a great and fun way to get started with object oriented programming while making awesome small games.
 
Get started here or jump right into the [docs](https://github.com/ThunbergOlle/2d.js#2djs).


---
### Getting started

**Install**
1. Clone or [download](https://github.com/ThunbergOlle/2d.js/archive/master.zip) this repository.
2. Locate "index.js". (/page/index.js)
3. Copy and paste that into your project folder.
4. Import the library inside your html file.
```html
<script src="index.js"></script>
```

**First setup**

The first thing that you always have to do is to create and initialize a game or a scene. 

Before making that, you will have to create a regular html5 document. Make sure that you **have** to include a div tag with **the id of "game"**. Like this:
```html
<!DOCTYPE html5>
<html>
    <head>
        <title>My game</title>
    </head>
    <body>
        <div id="game"></div>
    </body>
</html>

```

After that's done we will need to import the Game Library

(Inside the "body" tag)
```html
<script src="index.js"></script>
```

Nice! Let's now open up another script tag so we can begin creating the game scene
```html
<script>
//  let game = new Game(height, width);
    let game = new Game(500, 500);
//  game.init(backgroundImageURL, backgroundColor);
    game.init(null, '#008000');
</script>
```

