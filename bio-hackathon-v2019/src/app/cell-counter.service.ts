import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";


const url = 'http://localhost:3000/upload';

@Injectable({
  providedIn: 'root'
})
export class CellCounterService {

  constructor(private http: HttpClient) {
  }

  count(image: File): Observable<HttpEvent<any>> {
    // create a new multipart-form for every file
    const formData: FormData = new FormData();
    formData.append('file', image, image.name);

    // create a http-post request and pass the form
    // tell it to report the upload progress
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }
}
