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
import { TheTmFlowDeviceComponent } from './components/the-tm-flow-device/the-tm-flow-device.component';
import { PeceTmFlowSystenMarkerComponent } from './components/pece-tm-flow-systen-marker/pece-tm-flow-systen-marker.component';
import { TmFlowHardwareComponent } from './components/tm-flow-hardware/tm-flow-hardware.component';
import { RecruitingfunnelComponent } from './components/recruitingfunnel/recruitingfunnel.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HpsStudyComponent } from './components/hps-study/hps-study.component';

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
  { path: 'the-tm-flow-devicem', component: TheTmFlowDeviceComponent },
  { path: 'pece-tm-flow-systen-marker', component: PeceTmFlowSystenMarkerComponent },
  { path: 'tm-flow-hardware', component: TmFlowHardwareComponent },
  { path: 'rep/:userid/:productid', component: RecruitingfunnelComponent },
  { path: 'landingpage/:userid/:productid', component: LandingpageComponent },
  { path: 'hps-Study', component: HpsStudyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
