function radians(degrees) {
  return degrees * Math.PI / 180;
};

function abs(n){
  return Math.abs(n)
}

function sqrt(n){
  return Math.sqrt(n)
}

function sin (x) {
  return Math.sin(x)
}

function cos (x) {
  return Math.cos(x)
}

function tan (x) {
  return Math.tan(x)
}

function cot (x) {
  return 1/Math.tan(x)
}

function asin (x) {
  return Math.asin(x)
}

function acos (x) {
  return Math.cos(x)
}

function atan (x) {
  return Math.atan(x)
}

function numbers (start, end, n){
  var arr = [];
  for(i = start; i < end; i++){
    arr.push(i*n)
  } return arr
}

function arrMultiply(arr,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( arr[i]*n )
  } return box
}

function arrSin(arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]))
  } return box
}

function arrCos(arr,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(cos(arr[i])*n)
  } return box
}

function tNumbers (d,start,use){
  var arr = [];
  for(i=0; i<=d;i++){
    arr.push(start-(use*i))
  } return arr
}

function backNumbers (start, end, n){
  var arr = [];
  for(i = start; i >= end; i--){
    arr.push(i*n)
  } return arr
}



