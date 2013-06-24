# augur

A tiny little promises library that is much more akin to classic node control
flow than the Promises/A+ spec. It also takes up a whopping 17 lines. Aw, yiss.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Augur,_Nordisk_familjebok.png/150px-Augur,_Nordisk_familjebok.png"/> 

## why do this thing?

I found many promises libraries, and all of them were bloated and monolithic.
I wanted something incredibly tiny, for the single simple purpose of passing
around resolvable values. Although it looks a bit like the Promises/A+ model, I
purposefully *do not* fully comply to it.

## how might one partaketh of thy plight?

```javascript
var augur = require('augur');
var promise = augur();

fs.readFile('amazing_text', 'utf8', promise);

promise.then(function(err, amazingText) {
  //omg
});
```

That's it. That's all. Use it wisely.

## license?

MIT
