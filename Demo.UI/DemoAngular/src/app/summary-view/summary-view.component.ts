import { Component, OnInit, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {SampleRepository } from './../repositories/sample.repository'
import { Properties, Sample } from '../repositories/sample.model';

@Component({
  selector: 'app-summary-view',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './summary-view.component.html',
  styleUrl: './summary-view.component.css',
  providers: [SampleRepository]
})

export class SummaryViewComponent implements OnInit {
  sampleData: Sample | null = null;

 private readonly _repository = inject(SampleRepository)

  ngOnInit(): void {
    this._repository.getAll().subscribe({
      next: (response) => {

        if(response.status == 200)
          {
            this.sampleData = response.body;
          }
          else if(response.status == 500)
          {
            console.log("Something went wrong!")
          }
      },
      error: err => {
        console.error("API Error:", err);
      }
    });
  }

  getPropertyValue(properties: Properties[], label: string): any {
    const property = properties.find(p => p.label === label);
    return property ? property.value : '';
  }
}