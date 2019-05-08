// Code your solution in this file!
function distanceFromHqInBlocks(street){
 return Math.abs(42 - street)
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(street1, street2){
  return Math.abs(street1 - street2) * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (isNotValidDistance(distance)){
    return "cannot travel that far"
  }

  return fare(distance)
}

function isNotValidDistance(distance) {
  return distance > 2500 ? true:false
}

function fare(distance) {
  if (distance <= 400) {
    return 0
  } else if (distance > 2000) {
    return 25
  } else {
    return (distance - 400) * 0.02
  }
}
