module.exports = {
	content: [
    	"./src/**/*.{js,ts,jsx,tsx}",
  	],
  	theme: {
		extend: {
    		height: {
				"15v": "15vh",
				"70v": "70vh",
			},
			colors: {
				azul: {
					claro: "#4286f4",
					escuro: "#030161"
				},
				cinza: {
					pages: "#373B44",
					err: "#333333",
				},
				vermelho: "#dd1818",
				display: "#0004",
				botao: {
					cinza: "#888",
					branco: "#f0f0f0",
					active: "#ccc",
					laranja: {
						normal: "#fa8231",
						active: "#fa8231cc"
					},
					verde: {
						normal: "#36f008",
						active: "#36f008cc"
					}
				}
			},
			borderRadius: {
				"50": "50%",
			},
			fontFamily: {
				"orbitron": ["Orbitron", "sans-serif"]
			},
			gridTemplateRows: {
				"calc": "1fr 45px 45px 45px 45px 45px"
			},
			gridTemplateColumns: {
				"calc": "repeat(4, 25%)"
			},
			borderWidth: {
				"1": "1px"
			}
			// boxShadow: {
			// 	"hamb": "0 0 0 0 #dd1818, 0 0 0 0 #dd1818",
			// 	"hover": "0 0 0 4px #dd1818, 0 0 0 4px #dd1818"
			// },
    	},
  	},
  	plugins: [],
}