import ln, {pi, e, asyncFunc} from "./lib/mathplus";
import FileManager from './FileManager.js'


FileManager.list('./src')
.then( res => console.log(res) )

let fm = new FileManager('.')
console.log(fm.listSync())
fm.enter('./src/lib')
console.log(fm.listSync())
