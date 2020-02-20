function fancyPrint(text, size, color) {
	console.log(
		`%c ${text} \n`,
		`font-weight: bold; font-size: ${size}; color: ${color}; text-shadow: 2px 2px 0 #000, 4px 4px 0 #222, 6px 6px 0 #444, 8px 8px 0 #666, 10px 10px 0 #888, 12px 12px 0 #AAA, 14px 14px 0 #CCC`
	)
}

fancyPrint('Toroban', '60px', '#ABC')
fancyPrint('Super Secret Demo', '30px', '#ABC')
console.log(
	'Click here to play: https://toroban.com/super_secret_demo/\n\n\u26a0\ufe0f Note that this is an early prototype, and is not representative of what is planned for the official release. \u26a0\ufe0f\n'
)
