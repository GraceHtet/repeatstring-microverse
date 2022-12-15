function repeatStringNumTimes (str, num) {
  // write your code here
  
  let rpstr = '';

    if(num > 0) {
      for(let i = 1; i<= num ; i++){
        rpstr+= str;
      }
    }else {
      rpstr = '';
    }

  return rpstr.toString();
}

module.exports = repeatStringNumTimes


