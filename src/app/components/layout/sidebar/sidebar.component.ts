import { Component, OnInit } from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {UploadModalComponent} from './modals/upload-modal/upload-modal.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
    this.openUploadModal();
  }

  public openUploadModal(): void {
    this.dialogService.open(UploadModalComponent);
  }

}
