async function fetchData (){
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await resp.json();
  console.log(data);
}


fetchData()