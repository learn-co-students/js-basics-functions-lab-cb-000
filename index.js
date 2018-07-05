// Code your solution in this file!
function distanceFromHqInBlocks(distanceBlocks) {
  return Math.abs(42 - distanceBlocks)
}

function distanceFromHqInFeet(distanceBlocks) {
  return distanceFromHqInBlocks(distanceBlocks) * 264
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0
  }
  else if (400 < distanceInFeet && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02
  }
  else if (2000 < distanceInFeet && distanceInFeet <= 2500) {
    return 25
  }
  else if (2500 < distanceInFeet) {
    return 'cannot travel that far'
  }
}
