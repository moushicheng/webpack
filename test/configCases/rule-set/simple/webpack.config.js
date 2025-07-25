"use strict";

/** @type {import("../../../../").Configuration} */
module.exports = {
	module: {
		rules: [
			{
				oneOf: [
					{
						test: {
							and: [/a.\.js$/, /b\.js$/, { not: /not-/ }]
						},
						resourceQuery: { not: /not/ },
						loader: "./loader",
						options: "first"
					},
					{
						test: [require.resolve("./a"), require.resolve("./c")],
						issuer: require.resolve("./b"),
						use: [
							"./loader",
							{
								loader: "./loader",
								options: "second-2"
							},
							{
								loader: "./loader",
								options: {
									get() {
										return "second-3";
									}
								}
							}
						]
					},
					{
						test: {
							or: [require.resolve("./a"), require.resolve("./c")]
						},
						loader: "./loader",
						options: "third"
					}
				]
			}
		]
	}
};
