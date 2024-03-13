const books = [
  {
    title:"The GK",
    author:"F. SSC",
    year:1999,
  },
  {
    title:"LAxmiKant",
    author:"SSC, Upsc",
    year:1999,
  },
  {
    title:"English",
    author:"ALL",
    year:1990,
  },
  {
    title:"Math",
    author:"ALL",
    year:2000,
  },
];

function logTitles(titles){
  titles.sort();
  console.log(titles.join(" , "));
}

function extractTit (books , callback){
  const titles = books.map((book)=>book.title)
  callback(titles);
}


extractTit(books, logTitles)