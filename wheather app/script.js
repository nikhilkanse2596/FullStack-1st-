const loadBtn = document.getElementById("loadBtn");
const postsDiv = document.getElementById("posts");

loadBtn.addEventListener("click", function () {

    postsDiv.innerText = "Loading posts...";

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {

            postsDiv.innerHTML = "";

            posts.forEach(post => {
                postsDiv.innerHTML += `
                    <div class="post">
                        <h4>${post.title}</h4>
                        <p>${post.body}</p>
                    </div>
                `;
            });

        })
        .catch(error => {
            postsDiv.innerText = "Failed to load posts!";
        });
});