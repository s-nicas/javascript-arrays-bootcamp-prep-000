var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, foo){
  return ['foo',...array ];
}

function destructivelyAddElementToBeginningOfArray (array, element){
  return array.ushift('foo');
}