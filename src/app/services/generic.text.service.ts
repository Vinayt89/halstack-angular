import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericTextService {
  private basePath = 'assets/messages/';

  constructor(private http: HttpClient) {}

  /**
   * Load text from a given JSON file.
   * @param fileName The name of the JSON file
   * @returns Observable<any> containing the JSON data
   */
  readJSONFile(fileName: string): Observable<any> {
    const url = `${this.basePath}${fileName}`;
    return this.http.get(url);
  }
}
