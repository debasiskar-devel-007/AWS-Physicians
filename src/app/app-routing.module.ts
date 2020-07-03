import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeceVirtualPlatformComponent } from './components/pece-virtual-platform/pece-virtual-platform.component';
import { TheScienceComponent } from './components/the-science/the-science.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { DoctorRecommendComponent } from './components/doctor-recommend/doctor-recommend.component';
import { SoftwareWalkThroughComponent } from './components/software-walk-through/software-walk-through.component';
import { Rm3aAwsProgramComponent } from './components/rm3a-aws-program/rm3a-aws-program.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'pece-virtual-platform', component: PeceVirtualPlatformComponent }, 
  { path: 'the-science', component: TheScienceComponent }, 
  { path: 'team', component: TeamComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'doctor-recommend', component: DoctorRecommendComponent },
  { path: 'software-walk-through', component: SoftwareWalkThroughComponent },
  { path: 'rm3a-aws-program', component: Rm3aAwsProgramComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
