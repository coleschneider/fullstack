const DjanstraAlgo = (a, b) => {
  if(!b){
    return a
  }
  return DjanstraAlgo(b, a % b)
}
console.log(DjanstraAlgo(10, 5))

const sumAll = (numArr) => {
  return numArr.reduce((acc, num) => {
  acc+=num
  return acc
})
}

console.log(sumAll([3, 4, 12]))


const subtractAll = (numArr) => {
  //todo
  return numArr.reduce((acc, num) => {
    acc-=num
    return acc
  })

}

console.log(subtractAll([12, 3, 4]))