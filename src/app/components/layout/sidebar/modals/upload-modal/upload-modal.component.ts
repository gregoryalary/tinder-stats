import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {TinderUsageFactoryService} from '../../../../../services/tinder-usage.factory.service';
import {UsageStore} from '../../../../../stores/usage.store';
import {TinderDailyUsage} from '../../../../../models/tinder-daily-usage.model';

@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss']
})
export class UploadModalComponent implements OnInit {

  private fileReader: FileReader;

  constructor(private dialogRef: NbDialogRef<void>, private tinderUsageFactoryService: TinderUsageFactoryService, private usageStore: UsageStore) {}

  ngOnInit() {
    this.fileReader = new FileReader();
    this.fileReader.onload = (e) => {
      // try {
        const usage: TinderDailyUsage[] = this.tinderUsageFactoryService.buildTinderUsageObjectFromTinderData(this.fileReader.result as string);
        console.log(usage);
        this.usageStore.updateUsage(usage);
        this.closeModal();
      // } catch (e) {
      //   console.error(e.message);
      //   console.warn('parse error');
      // }
    };
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  onFileDropped(files: FileList): void {
    if (files && files.length >= 1 && files[0] && files[0].size <= 1000000 && this.fileIsTxtOrJson(files[0])) {
      this.fileReader.readAsText(files[0]);
    }
  }

  private fileIsTxtOrJson(file: File): boolean {
    const splittedName: string[] = file.name.split('.');
    return splittedName[splittedName.length - 1] === 'txt'
        || splittedName[splittedName.length - 1] === 'json';
  }

}
