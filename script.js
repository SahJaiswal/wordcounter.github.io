
let txtbox = document.getElementById("txtbox");
txtbox.addEventListener("input", function() {
  let txt = this.value;
  let charcount = txt.length;
  txt = txt.trim();
  document.getElementById("char").innerHTML = charcount;
  let word_array = txt.split(/[\s, ]+/);
  let clist = word_array.filter(function(ele) {
    return ele != "";
  })
  document.getElementById("word").innerHTML = clist.length;
});