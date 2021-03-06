import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';


// const URL = '/api/';
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
// const URL = 'http://localhost:3003/profile';
const URL = 'http://localhost:3003/data/monster';

@Component({
    moduleId: module.id,
  selector: 'upload-demo',
  templateUrl: 'upload-demo.html',
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class UploadDemoComponent {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

ngOnInit() {
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
        form.append('someField', 'baba');
        form.append('someField2', 67);
    };
}
  
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}