function memorize(f) {
  var cache = {};
  return function () {
    var key = arguments.length + Array.prototype.join(arguments, ",");
    if (key in cache) {
      return cache[key];
    } else return (cache[key] = f.apply(this, arguments));
  };
}
