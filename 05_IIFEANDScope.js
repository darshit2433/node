function def() {
  fname = "Darshit";
  (function() {
    fname = "Darshit2";
    //fname = "Darshit2";
    console.log(fname);
  })();

  console.log(fname);
}

module.exports = def;
