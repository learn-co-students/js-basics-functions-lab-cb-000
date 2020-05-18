function distanceFromHqInBlocks(numBlocks) {
  return Math.abs(numBlocks - 42);
}

function distanceFromHqInFeet(numBlocks) {
  return (distanceFromHqInBlocks(numBlocks) * 264);
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs((startBlock - endBlock) * 264);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * .02;
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}