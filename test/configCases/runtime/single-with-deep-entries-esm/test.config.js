"use strict";

module.exports = {
	findBundle() {
		return [
			"./runtime.mjs",
			"./one.mjs",
			"./dir2/two.mjs",
			"./three.mjs",
			"./dir4/four.mjs",
			"./dir5/dir6/five.mjs",
			"./dir5/dir6/six.mjs"
		];
	}
};
