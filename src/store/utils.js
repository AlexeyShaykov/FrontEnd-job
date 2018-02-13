export function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      promise.then(resolve, reject);
    }, ms);
  });
}
