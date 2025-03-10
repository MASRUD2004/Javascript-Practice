const age=61;
const price=500;
if(age <=12){
    console.log("Children eat for free." );
}
else if(age>60){
    // 50% discount
    const discount=price* 50/100;
    const payAmount=price-discount;
    console.log("You can have a discount of 50%.");
    console.log(payAmount);
}
else{
    console.log("You have to pay the full bill.");
}
