import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SampleRepository } from './../repositories/sample.repository';
import { Sample, Properties } from '../repositories/sample.model';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-detailed-view',
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './detailed-view.component.html',
  styleUrl: './detailed-view.component.css',
  providers: [SampleRepository]
})

export class DetailedViewComponent implements OnInit {
  sampleData: Sample | null = null;
  form!: FormGroup;
  selectedIndex: number = 0;

  private readonly _repository = inject(SampleRepository);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this._repository.getAll().subscribe({
      next: (data) => {
        
        this.sampleData = data.body;
        const properties : Properties[] = data.body?.datas[this.selectedIndex].properties || [];

        this.buildForm(properties);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  buildForm(properties: Properties[]) {
    const group: any = {};
    properties.forEach(p => {
      group[p.label] = p.value;
    });
    
    if (this.form) {
      this.form.reset(group);
    } else {
      this.form = this.fb.group(group);
    }
  }

  selectData(index: number) {
    this.selectedIndex = index;
    const selectedSamplingTime = this.sampleData!.datas[index].samplingTime;
    this._repository.get(selectedSamplingTime).subscribe({
      next: (response) => {
        if(response.status == 200)
          {
            const properties : Properties[] = response.body?.properties || [];
            this.buildForm(properties);
          }
          else if(response.status == 500)
          {
            console.log("Something went wrong!")
          }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onSave() {
    const propeties : Properties[] = [];
    Object.entries(this.form.value).forEach(([key, value]) => {
      const property: Properties = {
        label: key,
        value: value
      };
      propeties.push(property);
    });

    this._repository.update(this.sampleData!.datas[this.selectedIndex].samplingTime, propeties).subscribe({
      next: (response) =>{
        debugger
        if(response.status == 200)
        {
          alert("Updated Successful!")
        }
        else if(response.status == 500)
        {
          console.log("Something went wrong!")
        }
      },
      error: (err) => {
      }

    });

  }

}
