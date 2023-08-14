// // fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// // .then((res)=>res.json())
// // .then((msg)=>console.log(msg[0].setup,msg[0].punchline))
// // .catch((err)=>console.log(err))

// // fetch('https://api-thirukkural.vercel.app/api?num=1')
// // .then(res=>res.json())
// // .then((msg)=>console.log(msg.line1,msg.line2,msg.tam_exp))
// // .catch(err=>console.log(err))

// get,post
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// .catch(err=>console.log(err))
// // fetch('https://jsonplaceholder.typicode.com/todos',{
// //     method:'POST',
// //     headers:{'content-type':'appliction/json'},
// //     body:JSON.stringify({
// //         userId:22,
// //         id:456,
// //         title:'test',
// //         completed:false
// //     })
// // })
// //       .then(response => response.json())
// //       .then(json => console.log(json))

fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
.then((msg)=>console.log(msg[0].setup,msg[0].punchline))
.catch((err)=>console.log(err))

fetch('https://api-thirukkural.vercel.app/api?num=25')
.then(res => {
    if(res.ok)
        console.log('success')
    else
        console.log('Failed')
    return res.json()
})
.then(msg => console.log(msg.line1,msg.line2,msg.tam_exp) )
.catch(err=>console.log(err))

// get,post,put,delete
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
        userId:22,
        id:156,
        title:'test',
        completed:false
    })
})
      .then(response => response.json())
      .then(json => console.log(json))