// ⚠️ This is the outdated CommonJS syntax - works only in Node and is incompatible with
//    modern import/export. Unfortunately it still matters! 😢

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// ⚠️ This is NOT syntax we want you to USE, just syntax that it's useful to UNDERSTAND ⚠️
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

function detectMice(items) {
	return items.includes('mouse');
}

// exports are "an object" which we then "require" in another file
module.exports = {
	detectMice,
};

// 💡 There are other ways of doing this, e.g.
//        module.exports.detectMice = (items) => items.includes("mouse");
//
//     But it's more common in CommonJS to export an object with everything on it.
