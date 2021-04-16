function increaseRankBy(n) {
  let newVar = document.querySelectorAll('.ranked-list li')
  let  i = 0
  for (i=0; i<newVar.length;i++) {
    newVar[i].innerHTML = parseInt(newVar[i].innerHTML) + n
  }
  return newVar
}


function deepestChild() {
  
}