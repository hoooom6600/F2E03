const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => {
    // 這邊 then 接到的 promise 是剛好第5行 json() 方法是個 promise
    // 並不是一個 then 就有一個新的 promise
    users.forEach((user) => {
      console.log(user.email);
    });
  });
