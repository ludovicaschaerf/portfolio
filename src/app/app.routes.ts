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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calvino', component: CalvinoComponent },
  { path: 'ai-curation', component: AiCurationComponent },
  { path: 'critical-ai', component: CriticalAiComponent },
  { path: 'generative-ai', component: GenerativeAiComponent },
  { path: 'art-authentication', component: ArtAuthenticationComponent },
  { path: 'publications', component: ResourcesComponent },
  { path: 'about', component: AboutComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}