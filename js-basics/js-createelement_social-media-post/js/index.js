console.clear();

const post = document.createElement("section");
post.classList.add("class", "post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUserName = document.createElement("span");
postUserName.classList.add("post__username");
postUserName.textContent = "@shilpap";

const postLikeButton = document.createElement("button");
postLikeButton.classList.add("post__button");
postLikeButton.textContent = " ♥ Like";
postLikeButton.addEventListener("click", handleLikeButtonClick);

postFooter.append(postUserName, postLikeButton);
post.append(postContent, postFooter);
document.body.append(post);

function handleLikeButtonClick(event) {}

// Exercise:
// Use document.createElement() and append another social media post to the body.
