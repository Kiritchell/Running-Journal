import { posts } from "/Running Posts.js";
const polaroidTitle = document.querySelector('.polaroid-title')
let journalFeed = document.querySelector('.feed')
const newPostButton = document.querySelector('#new-post');

document.addEventListener('click', function(e){
console.log(e.target.id)
})


function render(){

posts.forEach(function eachPost(post){
    journalFeed.innerHTML += `
    <a>
    <div class="post-wrapper">
        <div class="polaroid-frame">
          <div class="film">
          </div>
          <h3 class="polaroid-title">${post.polaroidtitle}</h3>
          <div class="post-date-title">
            <h6 class="date">${post.date}</h6>
            <h6 class="title">${post.collection}</h6>
            </div>
        </div>
      </div>
      </a>`
})
}

render()

const postModal = document.querySelector('#post-modal');

newPostButton.addEventListener('click', function() {
  postModal.classList.toggle("show-modal")
})