function person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;
}

person.prototype.fullName = function() {
  console.log(this.firstName + "  " + this.lastName);
};

function proto() {
  this.me = new person("darshit", "padhya");
  this.me.fullName();
}

module.exports = proto;
