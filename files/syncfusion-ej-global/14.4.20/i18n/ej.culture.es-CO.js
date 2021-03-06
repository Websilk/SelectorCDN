ej.addCulture( "es-CO", {
	name: "es-CO",
	englishName: "Spanish (Colombia)",
	nativeName: "Español (Colombia)",
	language: "es",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "NeuN",
		negativeInfinity: "-Infinito",
		positiveInfinity: "Infinito",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-$n","$n"],
			",": ".",
			".": ","
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
				namesAbbr: ["dom.","lun.","mar.","mié.","jue.","vie.","sáb."],
				namesShort: ["do.","lu.","ma.","mi.","ju.","vi.","sá."]
			},
			months: {
				names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
				namesAbbr: ["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dic.",""]
			},
			AM: ["a. m.","a. m.","A. M."],
			PM: ["p. m.","p. m.","P. M."],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				f: "dddd, dd' de 'MMMM' de 'yyyy h:mm tt",
				F: "dddd, dd' de 'MMMM' de 'yyyy h:mm:ss tt",
				M: "d' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});