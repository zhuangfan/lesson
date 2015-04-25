var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ;
    	    if(b!=c) return false ;
    	    if(a<=0) return false ;
    		return true ;
    	
    },
    isIsosceles : function(a,b,c) {
    		if(a!=b&&b!=c&&a!=c) return false;
    		if(a+b<=c||a+c<=b||b+c<=a) return false ;
    		if(a-b>=c||a-c>=b||b-c>=a) return false ;
    		if(a<=0) return false ;
    		if(b<=0) return false ;
    		if(c<=0) return false ;
    	    return true ;
    },
    isScalene : function(a,b,c) {
	    	if(a+b<=c||a+c<=b||b+c<=a)return false ;
	    	if(a-b>=c||a-c>=b||b-c>=a)return false ;
	    	if(a<=0) return false ;
	    	if(b<=0) return false ;
	    	if(c<=0) return false ;
    	    return true ;
    }
};