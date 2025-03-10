function calculateVAT(price){
    const vatRate=7.5/100;
    if(price>0 && typeof price=== "number"  ){
        vatAmount=price*vatRate;
        return vatAmount;
    }
    else{
        return "invalid"
    }
}


function  validContact( contact ) {
    if( typeof contact === "string"){
        if(contact.length ===11 && /^\d+$/.test(contact)){
            return true;
        }
        else{
            return false;
        }
    }
    return "invalid";
}


function  willSuccess( marks ) {
    const pass = [];
    const fail = [];
    if (typeof marks === "object" && Array.isArray(marks)) {
        for(const mark of marks){
            if(mark>=50){
                pass.push(mark);
            }
            else{
                fail.push(mark);
            }  
        };
        if(pass.length > fail.length){
            return true
        }
        else{
            return false
        }
    } else {
        return "Invalid";
    }
}


function  validProposal( person1 , person2 ) {
    let ageDifference= Math.abs(person1.age - person2.age) 
    if (typeof person1 === "object" && typeof person2 === "object"){
        if(person1.gender !== person2.gender && ageDifference <=7 ){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return "invalid"
    }
}


function calculateSleepTime(times) {
    if (Array.isArray(times)) {
        let totalTime = 0; 

        for (let time of times) { 
            totalTime += time; 
        }

        let hour = Math.trunc(totalTime / 3600);
        let min = Math.trunc((totalTime % 3600) / 60);
        let sec = totalTime % 60; 

        return `${hour} hour(s), ${min} min, ${sec} sec`; 
    } else {
        return "Invalid";
    }
}

