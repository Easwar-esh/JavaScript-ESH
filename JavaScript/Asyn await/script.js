//async function - always return a promise
async function fn1(){
    return 'hello'
}

console.log(fn1())

fn1().then((msg)=>console.log('success '+msg))

let reachA = new Promise((resolve,reject)=>{
    const reached = true
    if(reached)
        setTimeout(resolve,3000,"Vidya reached")
    else
        reject("Vidya not reached")
})

async function asyncstatus(){
    try{
        console.log('hi..')
        res = await reachA
        console.log(res)
        console.log('bye')
    }
    catch(err){
        console.log(err)
    }
}

asyncstatus()