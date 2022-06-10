function isPerfectSquare(x)
    {
        if (x >= 0) {
            
            let sr = Math.sqrt(x);
         
            return ((sr * sr) == x);
        }
        return false;
    }

    let x = 22;
  
        if (isPerfectSquare(x))
            console.log("Yes");
        else
            console.log("No");
 