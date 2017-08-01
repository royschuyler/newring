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



