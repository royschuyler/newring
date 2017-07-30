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

//**********************END FUNCTIONS*********************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//*************GLOBAL VARS******************************************************************************************

//*************************************BEGIN MAIN BIG FUNCTION**************************************************
var finalCount = 0;
var extra = 'blinewidth 1 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';


function makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart,aToCAdd){
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

  console.log(obj);


   //*************PLOT STUFF************************************
  //var finalCount = 0;
  //var buffer = '';
  var mainBack = obj.a.backCount;
  var mainFront = obj.a.frontCount;
  var frontUse = 1/(mainFront/2);
  var backUse = 1/(mainBack/2);


  function plot(type,x1,y1,x2,y2,s,w){

     //1 = white
     //0 = black
    var scale = 1;
    //var use = 1/(x1.length/2);
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
        text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '\n';
        text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '\n';
        text += 'blinewidth ' + w + ' ' + finalCount + '\n';

        if(s == 's'){
          text += 'bcolor ' + sin(put) + ' ' + sin(put) + ' ' + sin(put) + ' ' + finalCount + '\n'
        } else{
          text += 'bcolor ' + cos(put*.9) + ' ' + cos(put)  + ' ' + cos(put)  + ' ' + finalCount + '\n'
        }
        k++
        finalCount++
     }
  }

  //***********FRONT IS BACK
// if(obj.a.x[50]<obj.b.x[50]){
  plot('ab', obj.a.xFront,obj.a.yFront,obj.b.xFront,obj.b.yFront,'s',1);
  //text+='ab-----------------------------------------------------------^^^^' + '\n'
  plot('bd', obj.b.xFront,obj.b.yFront,obj.d.xFront,obj.d.yFront,'b',1);
  //text+='bd------------------------------------------------------------^^^^' + '\n'
  plot('ac', obj.a.xFront,obj.a.yFront,obj.c.xFront,obj.c.yFront,'b',1);
  //text+='ac-----------------------------------------------------------^^^^' + '\n'
  plot('cd', obj.c.xFront,obj.c.yFront,obj.d.xFront,obj.d.yFront,'s',1);
  //text+='cd------------------------------------------------------------^^^^' + '\n'


// // if(obj.a.x[50]<obj.b.x[50]){
  plot('ab', obj.a.xBack,obj.a.yBack,obj.b.xBack,obj.b.yBack,'s',1);
  //text+='ab-----------------------------------------------------------^^^^' + '\n'
  plot('bd', obj.b.xBack,obj.b.yBack,obj.d.xBack,obj.d.yBack,'b',1);
  // //text+='bd------------------------------------------------------------^^^^' + '\n'
  plot('ac', obj.a.xBack,obj.a.yBack,obj.c.xBack,obj.c.yBack,'b',1);
  // //text+='ac-----------------------------------------------------------^^^^' + '\n'
  plot('cd', obj.c.xBack,obj.c.yBack,obj.d.xBack,obj.d.yBack,'s',1);
  //text+='cd------------------------------------------------------------^^^^' + '\n'


var end = buffer + text
return end
}

var extra = 'blinewidth 2 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';

  var d = 1000;
  var n = 3;
  var a = (1.618);
  var f1 = 1;
  var f2 = 1;
  var bAndDSize = .95;
  var baseRingStart = radians(0);
  var base = 30;
  var ringStart1 = radians(base);
  var ringStart2 = radians(base+120);
  var ringStart3 = radians(base+240);
  var aToCAdd = radians(5);

var ring1 = makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart1,aToCAdd);
var ring2 = makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart2,aToCAdd);
var ring3 = makeShape(d,n,a,f1,f2,bAndDSize,baseRingStart,ringStart3,aToCAdd);

//var finish = ring1 + extra;
//var finish = ring2 + extra;
//var finish = ring3 + extra;
var finish = ring1 + ring2 + ring3 + extra;

console.log(finish);






