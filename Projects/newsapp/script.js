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
  let url = `https://api.mediastack.com/v1/news?access_key=73c8f2f781229deaabf2e01346bc90e5&categories=${jcat}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let html = ``;
      if (data.error == null) {
        console.log(data);
        data.data.forEach((art) => {
          if (art.description != null) {
            html += `
              <div class="article">
                <div class="artimg">
                  <img src="imgu.png" alt="Article image">
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
                    <h4 class="dandt">${art["published_at"].slice(0, 10)}</h4>
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
