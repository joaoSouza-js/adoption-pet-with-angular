import { Component } from '@angular/core'; {RouterOutlet} from
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';
import { FileUploadComponent } from "./components/file-upload/file-upload.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FileUploadComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-router-sample';
}
