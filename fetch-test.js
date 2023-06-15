fetch("https://api.github.com/repos/evanw/esbuild")
  .then((response) => response.json())
  .then((data) => {
    return { name: data.name, id: data.id, height: data.height, weight: data.weight }; 
  })
 
  .then((data) => {
    console.log(data);
  });

console.log("End of File");
