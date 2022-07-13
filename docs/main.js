function fancyPrint(text, size, color) {
	console.log(
		`%c ${text} \n`,
		`font-weight: bold; font-size: ${size}; color: ${color}; text-shadow: 2px 2px 0 #000, 4px 4px 0 #222, 6px 6px 0 #444, 8px 8px 0 #666, 10px 10px 0 #888, 12px 12px 0 #AAA, 14px 14px 0 #CCC`
	)
}

// function updateCopyrightYear() {
// 	const year = new Date().getFullYear()
// 	if (year >= 2022) {
// 		document.getElementById('copyright-year').innerHTML = year
// 	}
// }

fancyPrint('Toroban', '60px', '#ABC')
// updateCopyrightYear()
