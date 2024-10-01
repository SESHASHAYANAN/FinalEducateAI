
const edu = document.getElementById('edu');
const search = document.getElementById('search');
const home = document.getElementById('home');
const connect = document.getElementById('connect');
const mainhome = document.getElementById('mainhome');
const learn = document.getElementById('learn');
const forum = document.getElementById('forum');
const profile = document.getElementById('profile');
const jobs = document.getElementById('jobs');



edu.addEventListener('click', function() {
    window.location.href = '../home/home.html';
});
forum.addEventListener('click', function() {
  window.location.href = '../forum/forum.html'; 
});
connect.addEventListener('click', function() {
  window.location.href = '../connect/connect.html';
});
learn.addEventListener('click', function() {
  window.location.href = '../learn/learn.html';
});
search.addEventListener('click', function() {
window.location.href = '../search/search.html'; 
});
mainhome.addEventListener('click', function() {
window.location.href = '../mainhome/mainhome.html';
});
connect.addEventListener('click', function() {
  window.location.href = '../connect/connect.html';
});
jobs.addEventListener('click', function() {
  window.location.href = '../jobs/jobs.html';
});
profile.addEventListener('click', function() {
  window.location.href = '../profile/profile.html';
});



document.getElementById('postButton').addEventListener('click', function() {
  const postContent = document.querySelector('.post-input textarea').value;
  if (postContent.trim() !== "") {
      const postsContainer = document.querySelector('.posts');
      
      const newPost = document.createElement('div');
      newPost.className = 'post';

      newPost.innerHTML = `
          <div class="post-header">
              <span class="username">@seshashayanan</span>
          </div>
          <div class="post-content">
              <p>${postContent}</p>
          </div>
          <div class="post-actions">
              <button class="like-btn">
                  <svg width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                      <path d="M8 2.748-.717 5.64c-.94 1.023-1.052 2.72-.264 4.184l7.482 7.58a1.42 1.42 0 0 0 2.008 0l7.482-7.58c.788-1.463.676-3.16-.264-4.184L8 2.748zM8 15c-.26 0-.52-.104-.707-.293L.293 8.707a.997.997 0 0 1 0-1.414L8 0l7.707 7.293a.997.997 0 0 1 0 1.414l-7.07 7.07A1 1 0 0 1 8 15z"/>
                  </svg>
                  Like
              </button>
              <button class="comment-btn">
                  <svg width="20" height="20" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                      <path d="M2 0a2 2 0 0 0-2 2v11.5a.5.5 a.5 0 0 0 .757.429l3.111-2.074A5.957 5.957 0 0 0 5.5 12h6A1.5 1.5 0 0 0 13 10.5V2a2 2 0 0 0-2-2H2zm3.5 11A4.5 4.5 0 0 1 1 6.5V2a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-.5.5h-6z"/>
                  </svg>
                  Comment
              </button>
              <button>Forward</button>
          </div>
          <div class="comments-section">
              <div class="comment"><strong>@Vimal:</strong> I am Intrested!</div>
              <div class="comment"><strong>@Jaga:</strong> How many members tho?</div>
              <div class="comment"><strong>@Hari:</strong> 6 people.</div>
          </div>
      `;
      
      postsContainer.insertBefore(newPost, postsContainer.firstChild);
      document.querySelector('.post-input textarea').value = "";
      attachEventListeners();
  }
});

function attachEventListeners() {

  document.querySelectorAll('.like-btn').forEach(button => {
      button.addEventListener('click', function() {
          this.classList.toggle('active');
      });
  });


  document.querySelectorAll('.comment-btn').forEach(button => {
      button.addEventListener('click', function() {
          const commentsSection = this.parentElement.nextElementSibling;
          commentsSection.style.display = commentsSection.style.display === 'block' ? 'none' : 'block';
      });
  });
}


attachEventListeners();





