function points(objIn,d,start,tPeak,t){
  var arr = numbers (0, d, 1);
  var obj = {
    x1: [],
    y1: [],
    x2: [],
    y2: [],
    x3: [],
    y3: [],
    x4: [],
    y4: []
  }

  for(j=0;j<arr.length;j++){
   var x = objIn.x[0] + (objIn.use[0]*arr[j]);
   var y = objIn.b[0] + (objIn.m[0]*x);
   obj.x1.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y1.push( ((-x*sin(t[j])) + (y*cos(t[j]))) );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[1] + (objIn.use[1]*arr[j]);
   var y = objIn.b[1] + (objIn.m[1]*x);
   obj.x2.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y2.push( ((-x*sin(t[j])) + (y*cos(t[j]))) );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[2] + (objIn.use[2]*arr[j]);
   var y = objIn.b[2] + (objIn.m[2]*x);
   obj.x3.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y3.push( ((-x*sin(t[j])) + (y*cos(t[j]))) );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[3] + (objIn.use[3]*arr[j]);
   var y = objIn.b[3] + (objIn.m[3]*x);
   obj.x4.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y4.push( ((-x*sin(t[j])) + (y*cos(t[j]))) );
  }
  return obj
}
