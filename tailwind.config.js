/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
            brightOrange: "hsl(31, 77%, 52%)",
            darkCyan: "hsl(184, 100%, 22%)",
            veryDarkCyan: "hsl(179, 100%, 13%)",
            transparentWhite: "hsla(0, 0%, 100%, 0.75)",   // paragraphs
            veryLightGray: "hsl(0, 0%, 95%)",  // background, headings, buttons
        },
		extend: {
            bigShoulders: "'Big Shoulders Display', cursive",
            lexend: "'Lexend Deca', sans-serif",
        },
	},
	plugins: [],
};
