function equalOut(obj){
  var arr = [obj.x1,obj.x2,obj.x3,obj.x4];
  var count = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  return count
 }
