import polyfill from 'babel-polyfill';
import ln, {pi, e, asyncFunc} from "./lib/mathplus";

console.log("2π = " + ln(e)*pi*2);
asyncFunc();
