function addCard(title, text) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  document.querySelector("#show-list").appendChild(template);
}

fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((json) => {
    //console.log(json);
    json.forEach((item) => {
      addCard(item.title, item.body);
    });
  });
