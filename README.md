File Traveler
===
Utility function to operate files

Install
---
    $ npm install --save file-traveler

Usage
---
Example:
```javascript
import FileTraveler, { listFiles, listFilesSync } from 'file-traveler'

// FP
// support both sync and async
console.log(listFilesSync('.'))

listFiles('.')
.then( files => console.log(files) )

// OOP
let fv = new FileTraveler('.')

console.log(fv.listFilesSync())


```


