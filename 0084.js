//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

function declareWinner(fighter1, fighter2, firstAttacker) {
	let turnsUntilDeath1 = Math.ceil(fighter1.health / fighter2.damage);
	let turnsUntilDeath2 = Math.ceil(fighter2.health / fighter1.damage);

	return turnsUntilDeath2 > turnsUntilDeath1
		? fighter2.name
		: turnsUntilDeath1 > turnsUntilDeath2
		? fighter1.name
		: firstAttacker;
}

function Fighter(name, health, damage) {
	this.name = name;
	this.health = health;
	this.damage = damage;
}

declareWinner(("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry");
