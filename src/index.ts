// @ts-ignore: import wasm
import buffer from "../build/untouched.wasm";
import { instantiateBuffer } from "assemblyscript/lib/loader";
const bin = Buffer.from(buffer.slice(29), "base64");
const asutil = instantiateBuffer(bin);
console.log(asutil);
