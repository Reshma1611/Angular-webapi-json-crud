import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DetailedViewComponent, SummaryViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'DemoAngular';
  activeTab = 'summary';
}
