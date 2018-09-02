const DjanstraAlgo = (a, b) => {
  if(!b){
    return a
  }
  return DjanstraAlgo(b, a % b)
}
console.log(DjanstraAlgo(10, 5))