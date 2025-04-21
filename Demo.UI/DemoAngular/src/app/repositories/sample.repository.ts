import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISampleRepository } from './sample.repository.interface'; 
import { Sample } from './sample.model';

@Injectable({
  providedIn: 'root'
})
export class SampleRepository implements ISampleRepository {
  private readonly _http = inject(HttpClient);

  public getData(): Observable<Sample> {
    return this._http.get<Sample>("https://localhost:7032/api/Project");
  }
}
