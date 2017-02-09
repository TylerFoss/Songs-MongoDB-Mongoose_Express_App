$(document).ready( function() {
  var $title = $('#title');
  var $description = $('#description');
  var originalTitle = $title.val();
  var originalDescription = $description.val();

  function toggleForm() {
    $edit = $('#edit');
    $edit.toggleClass('hide');
    $edit[0].reset();
    $('#edit_button').toggleClass('hide');
  }

  function livePreview() {
    $('h1').html($title.val());
    $('p').html($description.val());
  }

  $('#edit_button').click( function() {
    toggleForm();
  });

  $('#cancel').click( function() {
    $('h1').text(originalTitle);
    $('p').text(originalDescription);
    toggleForm();
  });

  $('#title').on('keyup', function() {
    livePreview();
  });

  $('#description').on('keyup', function() {
    livePreview();
  });

});
