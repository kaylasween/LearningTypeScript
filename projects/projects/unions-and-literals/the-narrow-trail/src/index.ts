export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let availableResource: "Food" | "Water" | undefined;
	let day = 1;
	let food = 5;
	let water = 5;
	const rollDice = () => Math.floor(Math.random() * (6)) + 1

	for(;day < 8; day++) {
		let dice = rollDice()
		if(dice === 1) {
			availableResource = "Food"
		} else if (dice === 2) {
			availableResource = "Water"
		} else {
			if(!availableResource) {
				availableResource = dice % 2 === 0 ? "Food" : "Water" 
			} else {
				if(availableResource === "Food") {
					food += dice
				} else {
					water += dice
				}
				availableResource = undefined
			}
		}
		food -= 1
		water -= 1

		if(food === 0 || water === 0){
			return false
		}
	}
	return true
}
