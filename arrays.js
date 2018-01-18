var chocolateBars = ['snickers', 'hundered grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(list, x){
  newList = [x,...list]
  return newList
}

function destructivelyAddElementToBeginningOfArray(list, x){
  list = ['j', 'k']
  list.unshift(x)
  return list
}

function addElementToEndOfArray(list, x){
  return
}

function destructivelyAddElementToBeginningOfArray(list, x){
  list = ['j', 'k']
  list.push(x)
  return list
}

function accessElementInArray (list, x) {
  return list[x]
}

function destructivelyRemoveElementFromBeginningOfArray(list){
  list.shift()
  return list
}

function RemoveElementFromBeginningOfArray(list){
  list.shift()
  return list
}