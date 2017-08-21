File Traveler
===
Utility function to operate files

Install
---
    $ npm install

Usage
---
Example:
```javascript
import FileTraveler, { listFiles, listFilesSync } from 'file-traveler'

// FP
// support both sync and async
console.log(listFilesSync('.'))

listFilesSync('.')
.then( files => console.log(files) )

// OOP
let fv = new FileTraveler('.')

console.log(fv.listFilesSync())


```


