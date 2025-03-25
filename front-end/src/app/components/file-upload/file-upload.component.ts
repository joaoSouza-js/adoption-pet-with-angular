import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  onImageFile = output<File | null>();

  changeImage(event: Event) {
    const inputTarget = event.target as HTMLInputElement;
    if (!inputTarget.files || !inputTarget.files.length) {
      this.onImageFile.emit(null);
      return;
    }
    const firstFile = inputTarget.files[0];
    this.onImageFile.emit(firstFile);
  }
}
