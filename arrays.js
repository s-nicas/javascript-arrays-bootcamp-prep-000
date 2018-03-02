var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  return ['foo',...array ];
}

function destructivelyAddElementToBeginningOfArray (array, element){
  return array.unshift('element');
}

function addElementToEndOfArray(array, element){
  return [...array, 'foo'];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push('element');
}