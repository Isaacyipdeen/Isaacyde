$(function() {

  var edit = document.getElementById('edit');

  $(edit).blur(function(){
    localStorage.setItem('todoData', this.innerHTML);
  });

  //when the page loads
  if (localStorage.getItem('todoData')){
    edit.innerHTML = localStorage.getItem('todoData');
  }
});


if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
} else {
  // Sorry! No Web Storage support..
}
