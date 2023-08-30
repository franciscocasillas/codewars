// Calcular si BONDDIA ofrece mejores rendmientos con su reinversión diaria o si Hey banco ofrece mejores rendimientos con su reinversión a 7 días

function bonddiaVSheybanco(inversion, plazo, tasaBonddia, tasaHeyBanco) {
	let totalBonddia = inversion;
	let totalHeyBanco = inversion;

	for (let i = 1; i <= plazo; i++) {
		totalBonddia += (totalBonddia * (tasaBonddia / 100)) / 360;
	}

	for (let i = 1; i <= plazo / 7; i++) {
		totalHeyBanco += ((totalHeyBanco * (tasaHeyBanco / 100)) / 360) * 7;
		console.log(totalHeyBanco);
	}

	console.log(totalBonddia);
	console.log(totalHeyBanco);
}

bonddiaVSheybanco(50000, 7, 7, 8);
