var _ = {
  once:function(fn){
   var invoked = false;
   var result;
   return function(){
	   if(!invoked) {
	   	invoked=true;
	   	result=fn();	   	
	   	return  result;
	   }
	   else {
	   	return result;
	   }
	 };
  },
  memoize:function(func,resolver){
  	var cache={};
  	return function(arg){
  		var key;
  		//if resolver exists
  		if(typeof resolver==='function'){
  			key=resolver(arg);
  		}
  		else{
  			key=arg;
  		}

  		if (cache.hasOwnProperty(key)) {
  			return cache[key];
  		}else{
  			//cache the func value because of  new arg
  			cache[key]=func(arg);
  			return cache[key];
  		}
  	}
  },
  bind:function(fn,context){
    return function(){
      return fn.call(context);
    }
  }

};

module.exports = _;