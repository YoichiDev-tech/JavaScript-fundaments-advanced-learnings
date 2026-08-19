function confirmEnding(str1, str2) {
  
  let ending = str2.length;

  let endStr1 = str1.slice(-ending);

  if(str2 == endStr1) {

    return true;

  } else {

    return false;
  }
}

confirmEnding("Bastian", "n");