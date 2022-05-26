//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
	let dadYears = dadYearsOld;
	let sonYears = sonYearsOld;
	if (sonYearsOld < dadYearsOld / 2) {
		while (dadYears / 2 > sonYears) {
			dadYears += 1;
			sonYears += 1;
		}
		console.log(dadYears - dadYearsOld);
	} else if (sonYearsOld > dadYearsOld / 2) {
		while (dadYears / 2 < sonYears) {
			dadYears -= 1;
			sonYears -= 1;
		}
		console.log(dadYearsOld - dadYears);
	} else {
		console.log("0");
	}
}

twiceAsOld(42, 21);
