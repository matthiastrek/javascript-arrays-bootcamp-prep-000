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