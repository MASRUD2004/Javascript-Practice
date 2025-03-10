const products =[
    {id:1, name:"xiaomi phone one", price:10000},
    {id:2, name:"iphone one", price:50000},
    {id:3, name:"samsung phone one", price:15000},
    {id:4, name:"m1 chip laptop", price:100000},
    {id:5, name:"hp laptop", price:55000},
    {id:6, name:"xiaomi phone one", price:12000},
    {id:7, name:"xiaomi phone one", price:18000},
];
function matchedProducts(products,search){
    const matched = []
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}
const result = matchedProducts(products,"phone")
console.log(result)