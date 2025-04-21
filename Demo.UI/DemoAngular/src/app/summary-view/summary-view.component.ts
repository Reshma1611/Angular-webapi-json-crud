import { Component, OnInit, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {SampleRepository } from './../repositories/sample.repository'


export interface Sample {
  id: number;
  name: string;
  datas: Datas[];
}

export interface Datas {
  samplingTime: Date;
  properties: Properties[];
}

export interface Properties {
  value: any;
  label: string;
}

@Component({
  selector: 'app-summary-view',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './summary-view.component.html',
  styleUrl: './summary-view.component.css',
  providers: [SampleRepository]
})


export class SummaryViewComponent implements OnInit {
  sampleData?: Sample;

  // constructor(private repository: SampleRepository) {}
 private readonly _repository = inject(SampleRepository)

  ngOnInit(): void {
    this._repository.getData().subscribe({
      next: data => {
        this.sampleData = data;
        console.log("Sample data:", data);
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