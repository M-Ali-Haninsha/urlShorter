import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private apiUrl = 'http://tinyurl.com/api-create.php?url=';

  constructor(private http: HttpClient) { }

  shortenUrl(originalUrl: string): Observable<string> {
    const fullApiUrl = this.apiUrl + encodeURIComponent(originalUrl);
    return this.http.get(fullApiUrl, {responseType:'text'});
  }
}
