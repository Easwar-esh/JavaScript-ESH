let json1=1
let json2=2
let jsono={
    "stock":"tcs",
    "price":350
}
let jsonarr=`[
    {
        "stock":"tcs",
        "price":3500  
    },
    {
        "stock":"hcl",
        "price":3150  
    },
    {
        "stock":"wipro",
        "price":3540  
    }
]`
let parsed=JSON.parse(jsonarr)
console.log(parsed[1].price)
console.log(JSON.stringify(parsed))