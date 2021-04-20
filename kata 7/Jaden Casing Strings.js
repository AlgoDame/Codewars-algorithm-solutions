String.prototype.toJadenCase = function() {
  //...
    if (this == "") {
        return this;
    }
  
  
  let splitArr = this.split(" ");
  let arr = [];
  splitArr.forEach((item) => {
    let el = item.split("");
    let index = el.shift();
    let result = index.toUpperCase().concat(...el);
    arr.push(result);
  });
  let final = arr.join(" ");
  return final;
};
