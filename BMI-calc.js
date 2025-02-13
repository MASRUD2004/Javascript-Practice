let weight = 100;
let height = 1;
BMI= weight/(height*height);

if(BMI< 18.5){
    console.log("under-weight")
}
else if(BMI>=18.5 && BMI<24.9){
    console.log("Normal weight")
}
else if(BMI>=25 && BMI<29.9){
    console.log("Overweight")
}
else{
    console.log("obese")
}