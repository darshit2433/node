function greet() {
  console.log("Hi");
}

greet();

otherFuntion;
function otherFuntion(fn) {
  fn();
}

otherFuntion(greet);
