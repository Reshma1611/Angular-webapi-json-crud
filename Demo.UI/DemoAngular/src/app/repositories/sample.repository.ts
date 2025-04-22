import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sample, Datas, Properties } from './sample.model';

@Injectable({
  providedIn: 'root'
})
export class SampleRepository {
  private readonly _http = inject(HttpClient);
  // private readonly _apiUrl = "https://localhost:7032/api";
  private readonly _apiUrl = "http://localhost:5038/api";

  public getAll(): Observable<HttpResponse<Sample>> {
    const url = `${this._apiUrl}/Project`;
    return this._http.get<Sample>(url, { observe: 'response' });
  }
  public get(samplingTime: Date): Observable<HttpResponse<Datas>> {
    const url = `${this._apiUrl}/Project/${encodeURIComponent(samplingTime.toString())}`
    return this._http.get<Datas>(url, { observe: 'response' });
  }
  public update(samplingTime: Date, properties: Properties[]): Observable<HttpResponse<void>> {
    debugger
    const url = `${this._apiUrl}/Project/${encodeURIComponent(samplingTime.toString())}`;
    return this._http.put<void>(url, properties, { observe: 'response' });
  }
}
