
const edu = document.getElementById('edu');
const search = document.getElementById('search');
const home = document.getElementById('home');
const connect = document.getElementById('connect');
const mainhome = document.getElementById('mainhome');
const learn = document.getElementById('learn');
const forum = document.getElementById('forum');
const profile = document.getElementById('profile');
const jobs = document.getElementById('jobs');
const card = document.querySelector(".card__inner");
card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});


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
