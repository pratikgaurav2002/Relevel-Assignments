function isPalindrome(num) {  
        var a, b, temp = 0;   
        b = num;  

        while (num > 0)  
        {  
            a = num % 10;  
            no = parseInt( num / 10);  
            temptemp = temp*10 + a;  
        }  
        if (temp == b)  
            {  
             return 1;
            }  
        else  
            {  
             return 0;
            }  
    }  
    function printPalindrome(num)
    {
        for(let i =0; i<=num; i++)
        {
            if(isPalindrome(num)==1)
            console.log(i);

        }
    }
    printPalindrome(50);