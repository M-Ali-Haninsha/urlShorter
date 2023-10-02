import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrlService } from '../app/url.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url';

  inputUrl: string = '';

  shortenedUrl!: any;

  constructor(private urlShortenerService: UrlService, private clipboard: Clipboard) {}

  onSubmitUrlForm(urlForm: NgForm) {
    const originalUrl = this.inputUrl;
    

    this.urlShortenerService.shortenUrl(originalUrl).subscribe(
      (response) => {        
        this.shortenedUrl = response; 
      }
    );
  }

  copyToClipboard() {
    if (this.shortenedUrl) {
      this.clipboard.copy(this.shortenedUrl);
    }
  }

  resetForm(urlForm: NgForm) {
    urlForm.resetForm();
    this.shortenedUrl = null;
  }
}
