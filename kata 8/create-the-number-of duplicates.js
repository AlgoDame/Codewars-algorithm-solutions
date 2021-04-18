function duplicateCount(text){
  //...
  
  let lowText = text.toLowerCase();
  let textArr = lowText.split("").sort((a,b)=>a-b);
  let freq = {};
  for(let item of textArr){
    if(!freq[item]){
      freq[item] = 1;
    }else{
      freq[item]++;
    }
  }
  let count = 0;
  for(let element in freq){
    if(freq[element] > 1){
      count++
    }
  }
  return count;
}
