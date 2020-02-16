var fullName = {
  frstName: "Darshit",
  lastName: "Padhya",
  fullName() {
    console.log(this.frstName + " " + this.lastName);
  }
};

module.exports = fullName;
