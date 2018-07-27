// Code your solution in this file!
function distanceFromHqInBlocks(n){
  if (n <= 42) {
    return 42 - n;
  }
  else if (n >= 42){
    return n - 42;
  }
}

function distanceFromHqInFeet(n){
  return distanceFromHqInBlocks(n) * 264;
}

function distanceTravelledInFeet(start, finish){
  if (start >= finish) {
    return (start - finish) * 264;
  }
  else if (start <= finish){
    return (finish - start) * 264;
  }
}

function calculatesFarePrice(start, destination){
  distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    return 0;
  }
  else if (distance <= 2000){
    return (distance - 400) * 0.02
  }
  else if (distance <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far'
  }
}
