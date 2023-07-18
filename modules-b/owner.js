// 💡 file extensions here are .js
//      so node requires "type": "module" in package.json in order to use ES6 import/export
//          (OR some kind of secondary tool such as Babel - many tools use this approach)

import { detectMice } from './cat.js';

const itemsInPantry = ['beans', 'dust', 'mouse'];
const micePresent = detectMice(itemsInPantry);
console.log(`Have I got mice? ${micePresent}`);
