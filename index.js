function distanceFromHqInBlocks(blockNumber) {
	let distance = parseInt(blockNumber, 10) - 42;
	return distance < 0 ? Math.abs(distance) : distance;
}

function distanceTravelledInFeet(start, destination) {
	let distance = parseInt(Math.abs(destination - start));
	return (distance) * 264;
}

function distanceFromHqInFeet(blockNumber) {
	return distanceFromHqInBlocks(blockNumber) * 264
	//Returns the number of feet from Scuber's headquarters to the pickup location. 
}

function calculatesFarePrice(start, destination) {
	let distance = distanceTravelledInFeet(start, destination);
	let discountedDistance;
	let fare;

	if (distance < 400) {
		return 0; 
	} else if (distance >= 400 && distance < 2000) {
		discountedDistance = distance - 400;
		return fare = discountedDistance * .02;
	} else if (distance > 2000 && distance < 2500) {
		return 25;
	} else {
		return 'cannot travel that far';
	}
}