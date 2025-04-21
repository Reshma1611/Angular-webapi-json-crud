import { Observable } from 'rxjs';
import { Sample } from './sample.model';

export interface ISampleRepository {
  getData(): Observable<Sample>;
}
