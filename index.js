// Code your solution in this file!
function distanceFromHqInBlocks(block){
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(blocks){
  return 264 * distanceFromHqInBlocks(blocks);
}

function distanceTravelledInFeet(start, end){
  return 264 * Math.abs(start - end);
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  let price;
  switch (true) {
    case distance < 400:
      price = 0.00;
      break;
    case distance < 2000:
      price = 0.02 * (distance - 400);
      break;
    case distance < 2500:
      price = 25;
      break
    default:
      price = "cannot travel that far"
  }
  return price;
}
