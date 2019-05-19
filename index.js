// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  let response;
  let distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    response = "cannot travel that far";
  }
  else if (distance > 2000) {
    response = 25;
  }
  else if (distance > 400) {
    response = (distance - 400) * 2 / 100;
  }
  else {
    response = 0;
  }
  return response;
}
