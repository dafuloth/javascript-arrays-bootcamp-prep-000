var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, newElement) {
  return [newElement, ...array]
}


function destructivelyAddElementToBeginningOfArray(array, newElement) {
  array.unshift(newElement)
  return array
}
