function union(p1,p1) {
    var s1 = typeof p1;
    var s2= typeof p2; 
    if(s1 ==='object' && s2 === 'object' )
    {
        if(s1 && s2)
      {  if(p1 instanceof Array && p2 instanceof Array)
        {
            var d1=p1.concat(p2);
            return d1;
        }
        else {
           $.extend(p1,p2);
           return p1;
        }
    }
}
else{
    return undefined;
}

    }
    union();
    