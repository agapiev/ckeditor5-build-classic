ClassicEditor
  .create(document.querySelector('#editor'))
  .catch(error => {
    console.error('There was a problem initializing the editor.', error);
  });
