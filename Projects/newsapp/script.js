let newsarea = document.querySelector(".newsarea");
let categories = document.querySelectorAll(".cat");
categories.forEach((cate) => {
  cate.addEventListener("click", () => {
    changeactiveness(cate.dataset.cat);
    update(cate.dataset.cat);
  });
});

update("business");
changeactiveness("business");
function update(jcat) {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${jcat}&apiKey=9b42d4d3602b498987d90652c7f6317a`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let html = ``;
      if (data.status == "ok") {
        data.articles.forEach((art) => {
          if (art.description != null) {
            html += `
              <div class="article">
                <div class="artimg">
                  <img src="${art.urlToImage}" alt="Article image">
                </div>
                <div class="artdetails">
                  <div class="arttitle">
                    ${art.title.slice(0, 80)}${
              art.title.length > 80 ? "..." : ""
            }
                  </div>
                  <div class="artdesc">
                    ${art.description.slice(0, 150)}${
              art.description.length > 150 ? "..." : ""
            }
                  </div>
                  <div class="artfoot">
                    <a href="${art.url}" class="url">Read It Here</a>
                    <h4 class="dandt">${art.publishedAt.slice(0, 10)}</h4>
                  </div>
                </div>
              </div>`;
          }
        });
        newsarea.innerHTML = html;
      }
    });
}

function changeactiveness(cate) {
  categories.forEach((item) => {
    if (item.dataset.cat == cate) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
