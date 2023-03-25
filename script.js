function arrayC()
    {
        for(i=0;i<=names.length;i++)//for loop to check every string in an array one by one
        {
            
            // console.log(names[i]);
            var uy=names[i].charAt(0); //variable to store first character of the sting
            // console.log(uy); to check if it is getting the first character in the string in the array
            if(uy=='i' || uy=='I'|| uy=='j' || uy=='J')//conditional statements to check if the first charcter is i or j
            {
                
                speakG(names[i]);
            }
            else
            {
                speakH(names[i]);
            }
        }
    }