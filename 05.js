function greet(name ){
  return new Promise((resolve)=>{
    const greeting = `Hello , ${name}`;
    resolve(greeting)
  })
}

greet("Santosh").then((massage)=>console.log(massage));