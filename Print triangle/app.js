function printStars(num) {
  let stars = "";
  for (let i = 0; i < num; i++) {
    stars += "*"
  }
  console.log(stars)
}

function printTriangle(size) {
  for (let i = 1; i <= size; i++) {
    printStars(i)
  }
}

printTriangle(window.prompt("Enter triangle size: "))