
function balancedBraces(...args) {
  const bracesMap = new Map();
  bracesMap.set(']','[');
  bracesMap.set(')','(');
  bracesMap.set('}','{');
  const closingBraces = [...bracesMap.keys()];
  const openingBraces = [...bracesMap.values()];
  const bracesInArgs = [];
  for(const item of args){ 
    if(openingBraces.includes(item)) { 
      bracesInArgs.push(item);
    } else if(closingBraces.includes(item)) { 
      let expectedBracket = bracesMap.get(item);
      if(bracesInArgs.lastIndexOf(expectedBracket) === bracesInArgs.length - 1){ 
        bracesInArgs.pop();
      } else { 
      	return false;
      }
    }
  }
  return bracesInArgs.length > 0 ? false : true;
}

export {
  balancedBraces,
};
