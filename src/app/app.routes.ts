import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // adjust as needed
import { DigitalHumanitiesComponent } from './digital-humanities/digital-humanities.component'; // Adjust the import path as needed
import { DataVisualizationComponent } from './data-visualization/data-visualization.component'; // Adjust the import path as needed
import { CriticalAiComponent } from './critical-ai/critical-ai.component'; // Adjust the import path as needed
import { GenerativeAiComponent } from './generative-ai/generative-ai.component'; // Adjust the import path as needed
import { ResourcesComponent } from './resources/resources.component'; // Adjust the import path as needed
import { AboutComponent } from './about/about.component'; // Adjust the import path as needed

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'digital-humanities', component: DigitalHumanitiesComponent },
  { path: 'data-visualization', component: DataVisualizationComponent },
  { path: 'critical-ai', component: CriticalAiComponent },
  { path: 'art-and-ai', component: GenerativeAiComponent },
  { path: 'publications', component: ResourcesComponent },
  { path: 'about', component: AboutComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}