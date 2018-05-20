// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  return street < 42 ? 42 - street : street - 42;
}

function distanceFromHqInFeet(street) {
  const blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
  return start < end ? (end - start) * 264 : (start - end) * 264;
}

function calculatesFarePrice(start, end) {
  let fare;
  const feet = distanceTravelledInFeet(start, end);
  const discount = feet - 400;
  if (feet < 400) {
    return 0;
  } else if (feet > 400 && feet < 2000) {
    return discount * .02;
  } else if (feet > 2000 && feet < 2500) {
    return 25;
  } else if (feet > 2500) {
    return 'cannot travel that far';
  }
}
