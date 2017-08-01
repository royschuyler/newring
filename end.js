var finalCount = 0;
var extra = 'blinewidth 2 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';

//WRAP
var dWrap = 500;
var n = 2;
var a = (1.2);
var f1 = 1;
var f2 = 1;
var bAndDSize = .95;
var baseRingStart = radians(0);
var base = 90;
var ringStart1 = radians(base);
var ringStart2 = radians(base+120);
var ringStart3 = radians(base+240);
var aToCAdd = radians(5);

//DANCE
  var d = 100;
  var tPeak = radians(5);
  var start = 335;
  var start2 = start/2;
  var t1 = radians(12);
  var t2 = radians(10);
  var t3 = radians(9);
  var t4 = radians(-4);
  var f = 25;
  var v = -8;
  var size = .12;

var dance = makeDancer(d,tPeak,start,start2,t1,t2,t3,t4,f,v,size);


//var ring1 = makeShape(dWrap,n,a,f1,f2,bAndDSize,baseRingStart,ringStart1,aToCAdd);
//var ring2 = makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart2,aToCAdd);
//var ring3 = makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart3,aToCAdd);
var finish = dance+extra;
//var finish = ring1 + extra;
//var finish = ring2 + extra;
//var finish = ring3 + extra;
//var finish = ring1 + ring2 + ring3 + extra;
console.log(finish);
//var here = bigDance();
//console.log(here)



