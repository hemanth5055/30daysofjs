let newsarea = document.querySelector(".newsarea");
let categories = document.querySelectorAll(".cat");

// Event listener for category clicks
categories.forEach((cate) => {
  cate.addEventListener("click", () => {
    changeactiveness(cate.dataset.cat);
    update(cate.dataset.cat);
  });
});

// Initial update for "business" category
update("business");
changeactiveness("business");

// Function to fetch and display news based on category
function update(jcat) {
  newsarea.innerHTML = "<div class='loading'>Loading...</div>"; // Show loading indicator while fetching data
  
  let url = `https://api.mediastack.com/v1/news?access_key=73c8f2f781229deaabf2e01346bc90e5&categories=${jcat}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.error == null) {
        console.log(data);
        data.data.forEach((art) => {
          if (art.description != null) {
            // Use article image or placeholder if none exists
            let imageUrl = art.image ? art.image : "imgu.png";
            // Format the date to improve readability
            let publishedDate = new Date(art["published_at"]).toLocaleDateString();

            html += `
              <div class="article">
                <div class="artimg">
                  <img src="${imageUrl}" alt="Article image">
                </div>
                <div class="artdetails">
                  <div class="arttitle">
                    ${art.title.slice(0, 80)}${art.title.length > 80 ? "..." : ""}
                  </div>
                  <div class="artdesc">
                    ${art.description.slice(0, 150)}${art.description.length > 150 ? "..." : ""}
                  </div>
                  <div class="artfoot">
                    <a href="${art.url}" class="url" target="_blank">Read It Here</a>
                    <h4 class="dandt">${publishedDate}</h4>
                  </div>
                </div>
              </div>`;
          }
        });
        newsarea.innerHTML = html;
      } else {
        newsarea.innerHTML = "<div class='error'>Error loading news. Please try again later.</div>";
      }
    })
    .catch(() => {
      newsarea.innerHTML = "<div class='error'>Error loading news. Please check your internet connection.</div>";
    });
}

// Function to change active category style
function changeactiveness(cate) {
  categories.forEach((item) => {
    if (item.dataset.cat == cate) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
