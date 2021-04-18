function isIsogram(str){
  //...
  let strlength = str.length;     // get length of string
  let arr = str.toLowerCase().split("");    // convert string to lowercase, then split into an array
  let filteredlength = [...new Set(arr)].length;  // use set to get only unqiue characters from the array and note the length
  // compare the length of string with length of unquie chars array
  if(strlength == filteredlength){
    return true;
  }else{
    return false;
  }
  
}
