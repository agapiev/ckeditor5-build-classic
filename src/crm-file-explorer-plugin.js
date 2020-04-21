import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import uploadIcon from './icons/upload.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class CrmFileExporerPlugin extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('fileExplorer', locale => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Choose a file',
        icon: uploadIcon,
        tooltip: true
      });

      // Callback executed once the icon is clicked
      view.on('execute', () => {
         // fire a JS event
         window.dispatchEvent(new Event('open-crm-file-explorer'));
      });

      return view;
    });
  }
}
