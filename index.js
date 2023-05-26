// Code your solution in this file!
function distanceFromHqInBlocks(start){
  let hq = 42;
  if (start > hq) {
    return start-hq;
  } else {
    return hq-start;
  }
}

function distanceFromHqInFeet(start){
  return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  if (startBlock > endBlock) {
    return (startBlock - endBlock) * 264;
  } else {
    return (endBlock - startBlock) * 264;
  }

}

function calculatesFarePrice(start, destination){

  let price;
  let dist = distanceTravelledInFeet(start, destination)

  if (dist < 400) {
    return 0;
  } else if (dist > 400 && dist < 2000) {
    return (dist-400) * .02;
  } else if (dist > 2000 && dist < 2500) {
    return 25;
  } else  {
    return "cannot travel that far";
  }

}
