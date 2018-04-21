// returns a distance in blocks
// calculates distances below 42nd street
function distanceFromHqInBlocks(blockNumber ) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

// returns a distance in feet
// calculates distances below 42nd street
function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

// returns the distance travelled in feet
// Calculates the number of feet a passenger travels given a starting block and an ending block - it only calculates distance North and South (uptown/downtown).
// It uses the knowledge that a block is 264 feet long.
function distanceTravelledInFeet(start, destination) {
  let result = Math.abs(start - destination) * 264;
  // console.log('start:', start);
  // console.log('dest: ', destination);
  // console.log('result: ', result);
  return result;
}

// gives customers a free sample
// charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
// charges 25 dollars for a distance over 2000 feet
// does not allow rides over 2500 feet
function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
