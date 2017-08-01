var finalCount = 0;

var extra = 'blinewidth 2 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';

function cot (x) {
  return 1/Math.tan(x)
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

function asin (x) {
  return Math.asin(x)
}

function acos (x) {
  return Math.cos(x)
}

function atan (x) {
  return Math.atan(x)
}


function fancyNumbers (arr,f){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( 1-Math.pow(cos(arr[i]),f) )
  } return box
}

function fancyww1 (arr,f,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( n*(Math.pow(sin(arr[i]),f)) )
  } return box
}

function fancyww2 (arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    if(radians(1/arr[i]) != Infinity){
    box.push( radians(1/arr[i]) )
    }else{
      box.push( 0 )
    }
  } return box
}

function wrapRad(arr){
  var box1 = [];
  for(i = 0; i < arr.length; i++){
    if(i == 0){
      box1.push(0)
    }else if(i == 1){
      box1.push(arr[i])
    }else{
      box1.push(arr[i]+box1[i-1])
    }
  } return box1
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

function wrapXFun(arr,add,multiply,size){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]+add)*multiply[i]*size)
  } return box
}

function wrapYFun(pathx,e,wrapRad,radStart,pathy,size){
  var box = [];
  for(i = 0; i < pathx.length; i++){
    box.push(pathx[i]*e*size*cos(wrapRad[i]+radStart)+pathy[i])
  } return box
}


function getFront (x,y,s){
  var obj = {
    frontCount: 0,
    backCount: 0
  }
  for (i=0;i<x.length;i++){
    if(i+2){
      var hyp1 = Math.hypot(x[i], y[i]);
      var hyp2 = Math.hypot(x[i+1], y[i+1]);
      var hyp3 = Math.hypot(x[i+2], y[i+2]);
      if(hyp1 < hyp2 && hyp2 > hyp3 && hyp2 > s){
        var frontAdd = i+1;
        obj.frontCount = frontAdd;
        obj.backCount = (x.length - obj.frontCount);
      }
    }
  }
  return (obj)
}

function separate(xArr,yArr,frontCount,backcount,bAndDSize){
  var obj = {
    xFront: [],
    yFront: [],
    xBack: [],
    yBack: [],
  }
  for(i=0;i<xArr.length;i++){
    if(i<frontCount){
      obj.xFront.push(xArr[i]);
      obj.yFront.push(yArr[i]);
    }else{
      obj.xBack.push(xArr[i]);
      obj.yBack.push(yArr[i]);
    }
  }
  return obj
}

function equalOut(obj){

  var arr = [obj.x1,obj.x2,obj.x3,obj.x4];
  var count = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });

  return count
 }

function radians(degrees) {
  return degrees * Math.PI / 180;
};

function abs(n){
  return Math.abs(n)
}

function sqrt(n){
  return Math.sqrt(n)
}

function numbers (start, end, n){
  var arr = [];
  for(i = start; i <= end; i++){
    arr.push(i*n)
  } return arr
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

function fancy (arr,f,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( n*(Math.pow(sin(arr[i]),f)) )
  } return box
}

function basePoints(d,start,a,s,cy){
  var radUse = radians(360)/d;
  var e = 1/a;
  var small = [1,2,3,4];
  var obj = {
    p: [],
    x: [],
    y: [],
    dif: [],
    use: [],
    m: [],
    b: []
  }

  for(i=0;i<small.length;i++){
    obj.p.push(radians(start)+(radUse*((d/4)*small[i])));
    obj.x.push(s*sin(obj.p[i]));
    obj.y.push(((cos(obj.p[i])*e)+cy)*s);
  }

  for(i=0;i<small.length;i++){

    if(i<3){
      obj.dif.push(obj.x[i+1]-obj.x[i]);
      obj.m.push((obj.y[i+1]-obj.y[i])/(obj.x[i+1]-obj.x[i]));
    }else{
      obj.dif.push(obj.x[0]-obj.x[i]);
      obj.m.push((obj.y[0]-obj.y[i])/(obj.x[0]-obj.x[i]));
    }

    obj.use.push(obj.dif[i]/d);
    obj.b.push(obj.y[i]-(obj.m[i]*obj.x[i]));

  }return obj
}

function basePointsV(d,obj1,obj2){
  var small = [1,2,3,4];
  var obj = {
    p: obj1.p,
    x: obj1.x,
    y: obj1.y,
    dif: [],
    use: [],
    m: [],
    b: []
  }
  for(i=0;i<small.length;i++){
    obj.dif.push(obj2.x[i]-obj1.x[i]);
    obj.use.push(obj.dif[i]/d);
    obj.m.push((obj2.y[i]-obj1.y[i])/(obj2.x[i]-obj1.x[i]));
    obj.b.push(obj.y[i]-(obj.m[i]*obj.x[i]))
  } return obj
}

function points(objIn,d,start,tPeak,t,yLength,yLength1){
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
   obj.y1.push( (((-x*sin(t[j])) + (y*cos(t[j])))-yLength1)+yLength );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[1] + (objIn.use[1]*arr[j]);
   var y = objIn.b[1] + (objIn.m[1]*x);
   obj.x2.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y2.push( (((-x*sin(t[j])) + (y*cos(t[j])))-yLength1)+yLength );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[2] + (objIn.use[2]*arr[j]);
   var y = objIn.b[2] + (objIn.m[2]*x);
   obj.x3.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y3.push( (((-x*sin(t[j])) + (y*cos(t[j])))-yLength1)+yLength );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[3] + (objIn.use[3]*arr[j]);
   var y = objIn.b[3] + (objIn.m[3]*x);
   obj.x4.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y4.push( (((-x*sin(t[j])) + (y*cos(t[j])))-yLength1)+yLength );
  }
  return obj
}


function bigDance(){

function makeDancer(d,tPeak,start,start2,t1,t2,t3,t4,f,v,size){
  var rad90Use = radians(90)/d;
  var gap = t1-t4;
  var topDif = t1-t2;
  var btmDif = t3-t4;
  var topRate = topDif/gap;
  var btmRate = btmDif/gap;
  var bPeak = tPeak*btmRate;
  var topUse = (tPeak*topRate)/d;
  var btmUse = (tPeak*btmRate)/d;
  var topTarr =  tNumbers(d,tPeak,topUse);
  var btmTarr = tNumbers(d,bPeak,btmUse);
  var f1 = f;
  var v1 = v;
  var vm1 = cot(radians(v1));
  var fm1 = cot(radians(90)-t1);
  var fb1 = tan(t1)*abs(f1);
  var ix1 = (fb1-v1)/(vm1-fm1);
  var iy1 = vm1*((fb1-v1)/(vm1-fm1))+ v1;
  var y1 = (tan(t1)*f1)-iy1;
  var yLength1 = (tan(t1)*f1);
  document.write("yL1: " + yLength1);
  var a1;
  if(t1>0){
    a1 = abs(ix1/y1);
  }else{
    a1 = abs(ix1/y1) * -1;
  }
  var s1 = abs(ix1);
  var cy1 = iy1;
  var f2 = f;
  var v2 = v;
  var vm2 = cot(radians(v2));
  var fm2 = cot(radians(90)-t2);
  var fb2 = tan(t2)*abs(f2);
  var ix2 = (fb2-v2)/(vm2-fm2);
  var iy2 = vm2*((fb2-v2)/(vm2-fm2))+ v2;
  var y2 = (tan(t2)*f2)-iy2;
  var a2;
  if(t2>0){
    a2 = abs(ix2/y2);
  }else{
    a2 = abs(ix2/y2) * -1;
  }
  var s2 = abs(ix2);
  var cy2 = iy2;
  var f3 = f;
  var v3 = v;
  var vm3 = cot(radians(v3));
  var fm3 = cot(radians(90)-t3);
  var fb3 = tan(t3)*abs(f3);
  var ix3 = (fb3-v3)/(vm3-fm3);
  var iy3 = vm3*((fb3-v3)/(vm3-fm3))+ v3;
  var y3 = (tan(t3)*f3)-iy3;
  var a3;
  if(t3>0){
    a3 = abs(ix3/y3);
  }else{
    a3 = abs(ix3/y3) * -1;
  }
  var s3 = abs(ix3);
  var cy3 = iy3;
  var f4 = f;
  var v4 = v;
  var vm4 = cot(radians(v4));
  var fm4 = cot(radians(90)-t4);
  var fb4 = tan(t4)*abs(f4);
  var ix4 = (fb4-v4)/(vm4-fm4);
  var iy4 = vm4*((fb4-v4)/(vm4-fm4))+ v4;
  var y4 = (tan(t4)*f4)-iy4;
  var yLength4 = (tan(t4)*f4);
  document.write("yL4: " + yLength4);
  var yLength = (yLength1-yLength4)/2;
  document.write("yLength: " + yLength);
  var a4;
  if(t4>0){
    a4 = abs(ix4/y4);
  }else{
    a4 = abs(ix4/y4) * -1;
  }
  var s4 = abs(ix4);
  var cy4 = iy4;
  var radUse = radians(360)/d;
  var realUse = radUse/4;
  var e2 = 1/a2;
  var e1 = 1/a1;
  var e3 = 1/a3;
  var e4 = 1/a4;
  var num = numbers (0, d, 1)
  var obj1 = basePoints(d,start,a1,s1,cy1);
  var obj2 = basePoints(d,start,a2,s2,cy2);
  var objv = basePointsV(d,obj1,obj2);
  var obj3 = basePoints(d,start2,a3,s3,cy3);
  var obj4 = basePoints(d,start2,a4,s4,cy4);
  var objv2 = basePointsV(d,obj3,obj4);

  var obj = {
    big: points(obj1,d,start,tPeak,topTarr,yLength,yLength1),
    small: points(obj2,d,start,tPeak,topTarr,yLength,yLength1),
    vertical: points(objv,d,start,tPeak,topTarr,yLength,yLength1)
  }
  //console.log(obj)
  var obj2 = {
    big: points(obj3,d,start2,tPeak,btmTarr,yLength,yLength1),
    small: points(obj4,d,start2,tPeak,btmTarr,yLength,yLength1),
    vertical: points(objv2,d,start2,tPeak,btmTarr,yLength,yLength1)
  }

  var buffer = 'newbuffer' + '\n';
  var text = '';

  var minus = size*(yLength1-yLength);
  document.write(minus);
  function plot(side,x1,y1,x2,y2,size,minus){

     //1 = white
     //0 = black
     var color;
     if(side == 1){
       color = .2;
     }
     if(side == 2){
       color = .4;
     }
     if(side == 3){
       color = .6;
     }
     if(side == 4){
       color = .8;
     }
     if(side == 5){
       color = 0;
     }

     for(i=0;i<x1.length;i++){

        buffer += 'newbuffer' + '\n';
        text += 'addvalue ' + finalCount + ' ' + x1[i]*size + ' ' + (y1[i]*size-minus)+ '\n';
        text += 'addvalue ' + finalCount + ' ' + x2[i]*size + ' ' + (y2[i]*size-minus) + '\n';
        text += 'bcolor ' + color + ' ' + color + ' ' + .5 + ' ' + finalCount + '\n'

        finalCount++
     }
  }

  if(t1>=0 && t2>=0){
    if(start>=315 || start<45){
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      // //plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
      // //plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
    }
    if(start>=45 && start<135){
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      //plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
      //plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
    }
    if(start>=135 && start<225){
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      //plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
      //plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
    }
    if(start>=225 && start<315){
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      //plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
      //plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
    }
  }

  if(t1<=0 && t2<=0){
    if(start>=315 || start<45){
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start>=45 && start<135){
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start>=135 && start<225){
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start>=225 && start<315){
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
  }

  if(t1>=0 && t2<=0){
    if(start>=315 || start<45){
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
    }
    if(start>=45 && start<135){
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
    }
    if(start>=135 && start<225){
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
    }
    if(start>=225 && start<315){
      plot(2,obj.vertical.x2,obj.vertical.y2,obj.vertical.x3,obj.vertical.y3,size,minus);
      plot(3,obj.vertical.x3,obj.vertical.y3,obj.vertical.x4,obj.vertical.y4,size,minus);
      plot(4,obj.vertical.x4,obj.vertical.y4,obj.vertical.x1,obj.vertical.y1,size,minus);
      plot(1,obj.vertical.x1,obj.vertical.y1,obj.vertical.x2,obj.vertical.y2,size,minus);
    }
  }


  if(t3>=0 && t4>=0){
    if(start2>=315 || start2<45){
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      // //plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
      // //plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
    }
    if(start2>=45 && start2<135){
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      //plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
      //plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
    }
    if(start2>=135 && start2<225){
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      //plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
      //plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
    }
    if(start2>=225 && start2<315){
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      //plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
      //plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
    }
  }

  if(t3<=0 && t4<=0){
    if(start2>=315 || start2<45){
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start2>=45 && start2<135){
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start2>=135 && start2<225){
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
    if(start2>=225 && start2<315){
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      // plot(5,obj.vertical.x3,obj.vertical.y3,obj.vertical.x1,obj.vertical.y1);
      // plot(5,obj.vertical.x2,obj.vertical.y2,obj.vertical.x4,obj.vertical.y4);
    }
  }

  if(t3>=0 && t4<=0){
    if(start2>=315 || start2<45){
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
    }
    if(start2>=45 && start2<135){
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
    }
    if(start2>=135 && start2<225){
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
    }
    if(start2>=225 && start2<315){
      plot(2,obj2.vertical.x2,obj2.vertical.y2,obj2.vertical.x3,obj2.vertical.y3,size,minus);
      plot(3,obj2.vertical.x3,obj2.vertical.y3,obj2.vertical.x4,obj2.vertical.y4,size,minus);
      plot(4,obj2.vertical.x4,obj2.vertical.y4,obj2.vertical.x1,obj2.vertical.y1,size,minus);
      plot(1,obj2.vertical.x1,obj2.vertical.y1,obj2.vertical.x2,obj2.vertical.y2,size,minus);
    }
  }

  var end = buffer + text;
  ////console.log(end)
  return end
}

  var d = 200;
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
  return dance
////console.log(dance)
}


function makeWrap(bigSide){


function radians(degrees) {
  return degrees * Math.PI / 180;
};

function sqrt(n){
  return Math.sqrt(n)
}

function numbers (start, end, n){
  var arr = [];
  for(i = start; i < end; i++){
    arr.push(i*n)
  } return arr
}

function fancyNumbers (arr,f){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( 1-Math.pow(cos(arr[i]),f) )
  } return box
}

function fancyww1 (arr,f,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( n*(Math.pow(sin(arr[i]),f)) )
  } return box
}

function fancyww2 (arr){
  var box = [];
  for(i = 0; i < arr.length; i++){
    if(radians(1/arr[i]) != Infinity){
    box.push( radians(1/arr[i]) )
    }else{
      box.push( 0 )
    }
  } return box
}

function wrapRad(arr){
  var box1 = [];
  for(i = 0; i < arr.length; i++){
    if(i == 0){
      box1.push(0)
    }else if(i == 1){
      box1.push(arr[i])
    }else{
      box1.push(arr[i]+box1[i-1])
    }
  } return box1
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

function wrapXFun(arr,add,multiply,size){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push(sin(arr[i]+add)*multiply[i]*size)
  } return box
}

function wrapYFun(pathx,e,wrapRad,radStart,pathy,size){
  var box = [];
  for(i = 0; i < pathx.length; i++){
    box.push(pathx[i]*e*size*cos(wrapRad[i]+radStart)+pathy[i])
  } return box
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

function asin (x) {
  return Math.asin(x)
}

function acos (x) {
  return Math.cos(x)
}

function atan (x) {
  return Math.atan(x)
}

function getFront (x,y,s){
  var obj = {
    frontCount: 0,
    backCount: 0
  }
  for (i=0;i<x.length;i++){
    if(i+2){
      var hyp1 = Math.hypot(x[i], y[i]);
      var hyp2 = Math.hypot(x[i+1], y[i+1]);
      var hyp3 = Math.hypot(x[i+2], y[i+2]);
      if(hyp1 < hyp2 && hyp2 > hyp3 && hyp2 > s){
        var frontAdd = i+1;
        obj.frontCount = frontAdd;
        obj.backCount = (x.length - obj.frontCount);
      }
    }
  }
  return (obj)
}

function separate(xArr,yArr,frontCount,backcount,bAndDSize){
  var obj = {
    xFront: [],
    yFront: [],
    xBack: [],
    yBack: [],
  }
  for(i=0;i<xArr.length;i++){
    if(i<frontCount){
      obj.xFront.push(xArr[i]);
      obj.yFront.push(yArr[i]);
    }else{
      obj.xBack.push(xArr[i]);
      obj.yBack.push(yArr[i]);
    }
  }
  return obj
}

function equalOut(obj){

  var arr = [obj.x1,obj.x2,obj.x3,obj.x4];
  var count = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });

  return count
 }

//****************************************************************************************************



function makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart,aToCAdd,twist,side){
var text = '';
var buffer = '';
var ringText = '';
  var obj = {
    a: {
      x: [],
      y: [],
      frontCount: d/2,
      backCount: d/2,
      xBack: [],
      yBack: []
    },
    b: {
      x: [],
      y: [],
      frontCount: d/2,
      backCount: d/2,
      xBack: [],
      yBack: [],
    },
    c: {
      x: [],
      y: [],
      frontCount: d/2,
      backCount: d/2,
      xBack: [],
      yBack: [],
    },
    d: {
      x: [],
      y: [],
      frontCount: d/2,
      backCount: d/2,
      xBack: [],
      yBack: [],
    }
  }

  //*********************DERIVED*********************
  var e = 1/a;
  var aAndBStart = baseRingStart + ringStart;
  var cAndDStart = aAndBStart + aToCAdd;
  var conicE = sqrt((a*a)-1)/a;
  var radUse = radians(180)/d;
  var numbersArr = numbers(0,d,1);
  var radUseArr = numbers(0,d,radUse);
  var oneMinusCos = fancyNumbers(radUseArr,f1);
  var pathNum = arrMultiply(oneMinusCos,d/2);
  var pathRad = arrMultiply(pathNum,radUse);
  var pathx = arrSin(pathRad);
  var pathy = arrCos(pathRad,conicE);
  var ww1 = fancyww1(radUseArr,f2,n);
  var ww2 = fancyww2(ww1);
  var wrapRadArr = wrapRad(ww2);

  //MAKING WRAPS
  var wrapAx = wrapXFun(wrapRadArr,aAndBStart,pathx,1);
  var wrapAy = wrapYFun(pathx,e,wrapRadArr,aAndBStart,pathy,1);
  var wrapBx = wrapXFun(wrapRadArr,ringStart,pathx,bAndDSize);
  var wrapBy = wrapYFun(pathx,e,wrapRadArr,ringStart,pathy,bAndDSize);
  var wrapCx = wrapXFun(wrapRadArr,cAndDStart,pathx,1);
  var wrapCy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,1);
  var wrapDx = wrapXFun(wrapRadArr,cAndDStart,pathx,bAndDSize);
  var wrapDy = wrapYFun(pathx,e,wrapRadArr,cAndDStart,pathy,bAndDSize);

  //PUTING WRAPS IN OBJ
  obj.a.x = wrapAx;
  obj.b.x = wrapBx;
  obj.c.x = wrapCx;
  obj.d.x = wrapDx;
  obj.a.y = wrapAy;
  obj.b.y = wrapBy;
  obj.c.y = wrapCy;
  obj.d.y = wrapDy;

  obj.a.x.reverse();
  obj.b.x.reverse();
  obj.c.x.reverse();
  obj.d.x.reverse();
  obj.a.y.reverse();
  obj.b.y.reverse();
  obj.c.y.reverse();
  obj.d.y.reverse();

  obj.a.frontCount = getFront(obj.a.x,obj.a.y,.9).frontCount;
  obj.a.backCount = getFront(obj.a.x,obj.a.y,.9).backCount;
  obj.b.frontCount = getFront(obj.b.x,obj.b.y,.9*bAndDSize).frontCount;
  obj.b.backCount = getFront(obj.b.x,obj.b.y,.9*bAndDSize).backCount;
  obj.c.frontCount = getFront(obj.c.x,obj.c.y,.9).frontCount;
  obj.c.backCount = getFront(obj.c.x,obj.c.y,.9).backCount;
  obj.d.frontCount = getFront(obj.d.x,obj.d.y,.9*bAndDSize).frontCount;
  obj.d.backCount = getFront(obj.d.x,obj.d.y,.9*bAndDSize).backCount;

  var equalObj = {
    x1: obj.a.frontCount,
    x2: obj.b.frontCount,
    x3: obj.c.frontCount,
    x4: obj.d.frontCount
  }

  var frontCount = equalOut(equalObj);
  var backCount = d-frontCount;

  obj.a.frontCount = frontCount;
  obj.a.backCount = backCount;
  obj.b.frontCount = frontCount;
  obj.b.backCount = backCount;
  obj.c.frontCount = frontCount;
  obj.c.backCount = backCount;
  obj.d.frontCount = frontCount;
  obj.d.backCount = backCount;


  //SEPARATING FRONT AND BACK IN OBJ
  var separateA = separate(obj.a.x,obj.a.y,obj.a.frontCount,obj.a.backCount);
  var separateB = separate(obj.b.x,obj.b.y,obj.b.frontCount,obj.b.backCount);
  var separateC = separate(obj.c.x,obj.c.y,obj.c.frontCount,obj.b.backCount);
  var separateD = separate(obj.d.x,obj.d.y,obj.c.frontCount,obj.b.backCount);
  obj.a.xFront = separateA.xFront;
  obj.a.xBack = separateA.xBack;
  obj.b.xFront = separateB.xFront;
  obj.b.xBack = separateB.xBack;
  obj.c.xFront = separateC.xFront;
  obj.c.xBack = separateC.xBack;
  obj.d.xFront = separateD.xFront;
  obj.d.xBack = separateD.xBack;

  obj.a.yFront = separateA.yFront;
  obj.a.yBack = separateA.yBack;
  obj.b.yFront = separateB.yFront;
  obj.b.yBack = separateB.yBack;
  obj.c.yFront = separateC.yFront;
  obj.c.yBack = separateC.yBack;
  obj.d.yFront = separateD.yFront;
  obj.d.yBack = separateD.yBack;

  //console.log(obj);


   //*************PLOT STUFF************************************
  //var finalCount = 0;
  //var buffer = '';
  var mainBack = obj.a.backCount;
  var mainFront = obj.a.frontCount;
  var frontUse = 1/(mainFront/2);
  var backUse = 1/(mainBack/2);


  function plot(x1,y1,x2,y2,x3,y3,x4,y4){

     //1 = white
     //0 = black
    var scale = 1;
    var use = 1/(x1.length/2);
    var k = 0;
    var m = 0;

     for(i=0;i<x1.length;i++){
        if(k<mainFront/2){
          var put = frontUse * m;
          m++
          //end should be 1
        }
        if(k>=mainFront/2 && k<=mainFront){
          var put = frontUse * m;
          m--
          //end should be 0
        }
        if(k>mainFront && k<=mainFront+(mainBack/2)){
          var put = backUse * m;
          m++
          //end should be 1
        }
        if(k>mainFront+(mainBack/2) && k<=mainFront+mainBack){
          var put = backUse * m;
          m--
          //end should be 0
        }


       buffer += 'newbuffer' + '\n';
       buffer += 'newbuffer' + '\n';
       buffer += 'newbuffer' + '\n';
       buffer += 'newbuffer' + '\n';
       buffer += 'newbuffer' + '\n';
       //a to c
        text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '\n';
        text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '\n';
        text += 'bcolor ' + sin(put)*.4 + ' ' + sin(put)*.5 + ' ' + sin(put)*.3 + ' ' + finalCount + '\n'

        finalCount++

        //c to d
        text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '\n';
        text += 'addvalue ' + finalCount + ' ' + x3[i] + ' ' + y3[i] + '\n';
        text += 'bcolor ' + cos(put) + ' ' + sin(put) + ' ' + cos(put) + ' ' + finalCount + '\n'
       finalCount++
       //d to b
        text += 'addvalue ' + finalCount + ' ' + x3[i] + ' ' + y3[i] + '\n';
        text += 'addvalue ' + finalCount + ' ' + x4[i] + ' ' + y4[i] + '\n';
        text += 'bcolor ' + sin(put) + ' ' + cos(put) + ' ' + sin(put) + ' ' + finalCount + '\n'
       finalCount++
       //b to a
        text += 'addvalue ' + finalCount + ' ' + x4[i] + ' ' + y4[i] + '\n';
        text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '\n';
        text += 'bcolor ' + sin(put)*.9 + ' ' + cos(put)*.8 + ' ' + sin(put)*.7 + ' ' + finalCount + '\n'

        k++
        finalCount++
     }
  }

  if(side == 'front'){
    plot(obj.a.xBack,obj.a.yBack,obj.c.xBack,obj.c.yBack,obj.d.xBack,obj.d.yBack,obj.b.xBack,obj.b.yBack);
  }else{
    plot(obj.a.xFront,obj.a.yFront,obj.c.xFront,obj.c.yFront,obj.d.xFront,obj.d.yFront,obj.b.xFront,obj.b.yFront);
  }


var end = buffer + text;
////console.log(end);
return end
}


//END WORK
var addToStart = 0;
var addToCandD = 5;
var d = 200;
var n = 1.4;
var a = 1.61809332;
var f1 = 1;
var f2 = 1.1;
var bAndDSize = .95;
var twist = radians(10);
var baseRad = 20;
var baseAdd = (360/7)


if(bigSide == 'back'){
  var back1 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),twist,'back');
  var back2 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*1)),radians(addToCandD),twist,'back');
  var back3 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),twist,'back');
  var back4 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*3)),radians(addToCandD),twist,'back');
  var back5 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*4)),radians(addToCandD),twist,'back');
  var back6 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*5)),radians(addToCandD),twist,'back');
  var back7 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*6)),radians(addToCandD),twist,'back');
  var finish = back1+back2+back3+back4+back5+back6+back7;
}
if(bigSide == 'front'){
  var front1 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad),radians(addToCandD),twist,'front');
  var front2 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*1)),radians(addToCandD),twist,'front');
  var front3 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*2)),radians(addToCandD),twist,'front');
  var front4 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*3)),radians(addToCandD),twist,'front');
  var front5 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*4)),radians(addToCandD),twist,'front');
  var front6 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*5)),radians(addToCandD),twist,'front');
  var front7 =  makeShape(d,n,a,f1,f2,bAndDSize,radians(addToStart),radians(baseRad+(baseAdd*6)),radians(addToCandD),twist,'front');
  var finish = front1+front2+front3+front4+front5+front6+front7;
}

return finish
}




var back = makeWrap('back');
var danceTry = bigDance();
var front = makeWrap('front');

var finish = back + danceTry + front + extra

console.log(finish);




