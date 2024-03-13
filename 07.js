// async function fetchData (){
//   const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await resp.json();
//   console.log(data);
// }


// fetchData()


async function getCom(){
  const [data1,data2]= await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((resp)=>
    resp.json()),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((resp)=>
    resp.json()),
  ])
  const combiData={
    todo : data1,
    post:data2,
  };
  return combiData
}

getCom().then((data)=>console.log(data))