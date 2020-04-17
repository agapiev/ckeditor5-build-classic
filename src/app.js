import CRM_UploadAdapter from './crm-customUploadAdapter.js';

function CRM_UploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new CRM_UploadAdapter(loader, 'http://dev.reaktiv.com.mk:8080/api/cms/files/');
  };
}

ClassicEditor
  .create(document.querySelector('#editor'), {
    extraPlugins: [CRM_UploadAdapterPlugin]
  })
  .then(editor => {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new CRM_UploadAdapter(loader);
    };
  })
  .catch(error => {
    console.error('There was a problem initializing the editor.', error);
  });

