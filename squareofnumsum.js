function checkNum(num){
    for(var i = 0; i<=Math.sqrt(num); i++)
    {
        for(var j = 0; j<num; j++)
        {
            if(i*i+j*j==num && i<=j)
            console.log(i+", "+j);
        }
    }
}
checkNum(50);