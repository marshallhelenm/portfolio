document.addEventListener("DOMContentLoaded", main);
function main() {
  fetchPosts();
}

function fetchPosts() {
  fetch("https://dev.to/api/articles/me/published", {
    method: "GET",
    headers: {
      "api-key": "kVaN98morrQBgw3sQDSR3dqK"
    }
  })
    .then(response => response.json())
    .then(posts => {
      console.log(posts);
    });
}

// <article class="col-6 col-12-xsmall work-item">
// 								<a href="https://dev.to/marshallhelenm/creating-the-tome-part-ii-hdo" class="image fit thumb"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--cFDANO1F--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/dwfqeeh5f/image/upload/v1575140146/Blog%2520Images/Screen_Shot_2019-11-30_at_10.38.43_AM.png" alt="" /></a>
// 								<h3>Creating the Tome - Part II</h3>
// 							</article>
