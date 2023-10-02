let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

function addNews(title, content) {
  // clone the template
  const template = document
    .getElementById("news-template")
    .content.cloneNode(true);
  // populate the template
  template.querySelector(".news-title").innerText = title;
  template.querySelector(".news-content").innerText = content;
  // include the polulated template into the page
  document.querySelector("#news-list").appendChild(template);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/*
Every 5 sec repopulate the page with all of the articles.
 */
let submitForm = document.querySelector(".form");
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTitle = document.getElementById("title").value;
  let newContent = document.getElementById("content").value;
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  news.push({
    id: news.length + 1,
    title: newTitle,
    content: newContent,
  });
});

/* Variant - Instead of adding new news, updating 
existing 3 elements in the array by removing the first element
and adding the latest one at the end of the array.
*/
// let submitForm = document.querySelector(".form");
// submitForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let newTitle = document.getElementById("title").value;
//     let newContent = document.getElementById("content").value;
//     document.getElementById("title").value = "";
//     document.getElementById("content").value = "";
//     let id = news[0].id;
//     news.shift();
//     news.push({
//         id: id,
//         title: newTitle,
//         content: newContent
// });
// });

setInterval(async () => {
  news.forEach((article) => {
    addNews(article.title, article.content);
  });
  // news.splice(0, 3, news[0], news[1], news[2]);
  await sleep(4600);
  document.querySelector("#news-list").innerHTML = "";
}, 5000);
