function addElementToBeginningOfArray(list, x){
  list = ['j', 'k']
  const newList = [list]
  newList.unshift(x)
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