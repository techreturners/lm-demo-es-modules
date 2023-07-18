// 💡 file extensions here are .mjs
//      so node will "just work" even with this ES6 import/export syntax

import { detectMice } from './1-cat.mjs';

const itemsInPantry = ['beans', 'dust', 'mouse'];
const micePresent = detectMice(itemsInPantry);
console.log(`Have I got mice? ${micePresent}`);
