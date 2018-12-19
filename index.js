// Code your solution in this file!
const blockLengthInFeet = 264;

function distanceTravelledInBlocks(startingBlock, endingBlock) {
  return Math.abs(startingBlock - endingBlock);
}

function distanceFromHqInBlocks(blockAtLocation) {
  const blockAtHq = 42;
  return distanceTravelledInBlocks(blockAtHq, blockAtLocation);
}

function distanceFromHqInFeet(blockAtLocation) {
  return distanceFromHqInBlocks(blockAtLocation) * blockLengthInFeet;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return distanceTravelledInBlocks(startingBlock, endingBlock) * blockLengthInFeet;
}

function calculatesFarePrice(startingBlock, endingBlock) {
  const distance = distanceTravelledInFeet(startingBlock, endingBlock);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    // subtract 400 for the first free 400 feet
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
