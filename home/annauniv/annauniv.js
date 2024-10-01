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
    window.location.href = '../';
});
forum.addEventListener('click', function() {
  window.location.href = '../forum/forum.html'; 
});
connect.addEventListener('click', function() {
  window.location.href = '../connect/connect.html';
});
learn.addEventListener('click', function() {
  window.location.href = '../';
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
function toggleContent(id) {
  var content = document.getElementById(id);
  content.style.display = content.style.display === "block" ? "none" : "block";
}