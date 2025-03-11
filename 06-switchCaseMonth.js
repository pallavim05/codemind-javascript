function monthOfYear(Month) {
    switch (Month) {
        case 1:
            console.log(`${Month} - January `);
            
            
            break;
        case 2:
            console.log(`${Month} - February `);
                
                
            break;
        case 3:
             console.log(`${Month} - March `);
                    
                    
            break;
        case 4:
                console.log(`${Month} - April `);
                       
                       
               break;
        case 5:
                console.log(`${Month} - May `);
                       
                       
               break;
        case 6:
                console.log(`${Month} - June `);
                       
                       
               break;
        case 7:
                console.log(`${Month} - July `);
                       
                       
               break;
        case 8:
                console.log(`${Month} - August `);
                       
                       
               break; 
        case 9:
                console.log(`${Month} - September `);
                       
                       
               break;
        case 10:
                console.log(`${Month} - October `);
                       
                       
               break;
        case 11:
                console.log(`${Month} - November`);
                       
                       
               break;   
        case 12:
                console.log(`${Month} - December `);
                       
                       
               break;                                                          
    
        default:
            console.log(`Invalid Month : ${Month}`);
            
            break;
    }
    
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);