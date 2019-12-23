import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drag-and-drop-zone-file',
  templateUrl: './drag-and-drop-zone-file.component.html',
  styleUrls: ['./drag-and-drop-zone-file.component.scss']
})
export class DragAndDropZoneFileComponent implements OnInit {

  @Input() message: string = 'Drop your file here';

  @Output() fileDropped = new EventEmitter<FileList>();

  public isDraggedOver: boolean = false;

  constructor() { }

  ngOnInit() { }

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.isDraggedOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.isDraggedOver = false;
  }

  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files: FileList = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
    this.isDraggedOver = false;
  }

  private changeBackground(): void {
    // todo
  }

  private resetBackground(): void {
    // todo
  }

}
