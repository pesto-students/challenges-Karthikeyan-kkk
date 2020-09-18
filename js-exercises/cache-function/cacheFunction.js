function cacheFunction() {
  let cache = {};
  return function (cachedfn){
    return cachedfn in cache ? cache[cachedfn] : cache[cachedfn] = callBack(cachedfn);
  }
}

export {
  cacheFunction,
};
