var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, foo){
  return ['foo',...array ];
}

function destructivelyAddElementToBeginningOfArray (array, foo){
  return array.push(foo)
}