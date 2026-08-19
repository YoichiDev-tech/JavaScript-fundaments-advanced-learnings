function truncateString(str, num) {

  if(str.length > num) {

    const reducedStr = str.slice(0, num) + "...";
    
    return reducedStr;

  } else {

    return str;
  }
  return;
}

let str = "A-tisket a-tasket A green and yellow basket";
let num = 8;