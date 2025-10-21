const url = "https://fakestoreapi.com/products";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    products.forEach((product) => {
      console.log(product.title);
    });
  })
  .catch((err) => {
    console.log(err);
  });
