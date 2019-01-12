// Code your solution in this file!

function distanceFromHqInBlocks(location){
  let distance;
  distance = Math.abs(location - 42);
  return distance;
}

function distanceFromHqInFeet(blocks) {
  let distance;
  distance = distanceFromHqInBlocks(blocks) * 264;
  return distance;
}

function distanceTravelledInFeet(start, end) {
  let distance;
  distance = Math.abs(start - end) * 264;
  return distance;
}

function calculatesFarePrice(start, end){
  let fare;
  let distance;
  distance = distanceTravelledInFeet(start, end);
  if (distance <= 400) {
    fare = 0
  } else if (distance >= 2500) {
    fare = "cannot travel that far"
  } else if (distance > 2000) {
    fare = 25
  } else {
    fare = (distance - 400) * .02
  }

  return fare;
}
