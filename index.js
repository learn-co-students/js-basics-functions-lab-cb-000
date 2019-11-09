function distanceFromHqInBlocks (street) {
  const distance = street > 42 ? (street - 42) : (42 - street);
  return distance;
}

function distanceFromHqInFeet (street) {
  const blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
  const distance = startingBlock < endingBlock ? ((endingBlock - startingBlock) * 264) : ((startingBlock - endingBlock) * 264);
  return distance;
}

function calculatesFarePrice (startingBlock, endingBlock) {
  const distanceTravelled = distanceTravelledInFeet(startingBlock, endingBlock);
  if (distanceTravelled > 2500) {
    return 'cannot travel that far';
  } else if (distanceTravelled > 2000) {
    return 25;
  } else if (distanceTravelled > 400) {
    return (distanceTravelled - 400) * 0.02;
  } else {
    return 0;
  }
}