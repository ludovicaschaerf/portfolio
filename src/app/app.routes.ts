import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // adjust as needed
import { CalvinoComponent } from './calvino/calvino.component'; // Adjust the import path as needed
import { AiCurationComponent } from './ai-curation/ai-curation.component'; // Adjust the import path as needed
import { CriticalAiComponent } from './critical-ai/critical-ai.component'; // Adjust the import path as needed
import { GenerativeAiComponent } from './generative-ai/generative-ai.component'; // Adjust the import path as needed
import { ArtAuthenticationComponent } from './art-authentication/art-authentication.component'; // Adjust the import path as needed
import { ResourcesComponent } from './resources/resources.component'; // Adjust the import path as needed
import { AboutComponent } from './about/about.component'; // Adjust the import path as needed
import { LecturesComponent } from './lectures/lectures.component';
import { SketchesComponent } from './sketches/sketches.component'; // Adjust the import path as needed

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Ludovica Schaerf | AI and Visual Culture Research' },
  { path: 'calvino', component: CalvinoComponent, title: 'Calvino and Multimodal AI | Ludovica Schaerf' },
  { path: 'ai-curation', component: AiCurationComponent, title: 'AI Art Curation | Ludovica Schaerf' },
  { path: 'critical-ai', component: CriticalAiComponent, title: 'Critical AI | Ludovica Schaerf' },
  { path: 'generative-ai', component: GenerativeAiComponent, title: 'Generative AI | Ludovica Schaerf' },
  { path: 'sketches', component: SketchesComponent, title: 'Sketches | Ludovica Schaerf' },  // Add this line
  { path: 'art-authentication', component: ArtAuthenticationComponent, title: 'AI Art Authentication | Ludovica Schaerf' },
  { path: 'publications', component: ResourcesComponent, title: 'Publications | Ludovica Schaerf' },
  { path: 'lectures', component: LecturesComponent, title: 'Lectures | Ludovica Schaerf' },
  { path: 'about', component: AboutComponent, title: 'About | Ludovica Schaerf' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}