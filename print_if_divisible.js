    let i;
    for(i = 1; i<=100; i++)
    {
        if(i%3==0&&i%5!=0&&i%15!=0)
        console.log('Relevel');
        
        else if(i%3==0&&i%5==0&&i%15!=0){
            console.log('Relevel');
            console.log('Buzz');
        }
        else if(i%3==0&&i%5==0&&i%15==0)
        {
        console.log('Relevel');
        console.log('Buzz');
        console.log('6IndBuzz')
        }
        else 
        console.log(i);
    }