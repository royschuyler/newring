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
          text += 'bcolor ' + put*sin(m) + ' ' + put*sin(m) + ' ' + put*sin(m) + ' ' + finalCount + '\n'
        } else{
          text += 'bcolor ' + put*cos(m) + ' ' + put*cos(m)  + ' ' + put*cos(m)  + ' ' + finalCount + '\n'
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








