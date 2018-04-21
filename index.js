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
