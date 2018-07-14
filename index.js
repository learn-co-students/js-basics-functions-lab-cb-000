// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  // let distance = street - 42

  if (distance > 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
    return 264 * distanceFromHqInBlocks(distance);
}

function distanceTravelledInFeet(start, end) {
  function distanceTravelledInBlocks(start, end) {
    if (start > end) {
      return start - end;
    } else {
      return end - start;
    }
  }
  return 264 * distanceTravelledInBlocks(start, end);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance < 2000 && distance > 400) {
    return 2.56;
  } else {
    return 0;
  }
}

// function distanceFromHqInBlocks (blockNumber) {
//   if (blockNumber > 42) {
//     return blockNumber - 42;
//   } else {
//     return 42 - blockNumber;
//   }
// }
