const DjanstraAlgo = (a, b) => {
  if(!b){
    return a
  }
  return DjanstraAlgo(b, a % b)
}
console.log("GCD: ", DjanstraAlgo(10, 5))

const sumAll = (numArr) => {
  return numArr.reduce((acc, num) => {
  acc+=num
  return acc
})
}

console.log("sum: ", sumAll([3, 4, 12]))


const subtractAll = (numArr) => {
  //todo
  return numArr.reduce((acc, num) => {
    acc-=num
    return acc
  })

}

console.log("subtract: ", subtractAll([12, 3, 4]))

const divideAll = (numArr) => {
  //todo
  return numArr.reduce((acc, num) => {
    acc = acc / num
    return acc
  })

}

console.log("divide: ", divideAll([50, 5, 2]))