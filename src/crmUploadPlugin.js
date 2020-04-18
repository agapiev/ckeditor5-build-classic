import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';

import CrmUploadAdapter from './crmUploadAdapter';

export default class CrmUploadPlugin extends Plugin {

  static get requires() {
    return [FileRepository];
  }

  static get pluginName() {
    return 'CrmUploadPlugin';
  }

  init() {
    const url = this.editor.config.get('uploadSettings.uploadEndpoint');

    if (!url) {
      console.warn('uploadSettings.uploadEndpoint is not configured')
      return;
    }

    this.editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new CrmUploadAdapter(loader, this.editor.config.get('uploadSettings'), this.editor.t);
    };
  }
}