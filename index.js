import fs from "fs";
import utilities from "util";

const bar = fs.readFileSync("bar.json", "utf-8");
const bar_to_json = JSON.parse(bar);
console.log(utilities.inspect(bar_to_json));
console.log('Hello World') // this change happened in branch b1

