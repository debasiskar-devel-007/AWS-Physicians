import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { TestresolveService } from './testresolve.service';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { DemoMaterialModule } from './material-module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { SoftwareWalkThroughComponent, ImageModalComponent } from './components/software-walk-through/software-walk-through.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeceVirtualPlatformComponent } from './components/pece-virtual-platform/pece-virtual-platform.component';
import { TheScienceComponent } from './components/the-science/the-science.component';
import { TeamComponent } from './components/team/team.component';
import { DoctorRecommendComponent } from './components/doctor-recommend/doctor-recommend.component';
import { Rm3aAwsProgramComponent } from './components/rm3a-aws-program/rm3a-aws-program.component';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { TheTmFlowDeviceComponent } from './components/the-tm-flow-device/the-tm-flow-device.component';
import { PeceTmFlowSystenMarkerComponent } from './components/pece-tm-flow-systen-marker/pece-tm-flow-systen-marker.component';
import { TmFlowHardwareComponent } from './components/tm-flow-hardware/tm-flow-hardware.component';

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: '',
    defaults: {
      title: '',
      description: '',
      'og:image': '',
      'og:type': 'website',
      'og:locale': 'en_US',
      'og:locale:alternate': 'en_US,nl_NL,tr_TR'
    }
  });
}
// export function translateLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }

@NgModule({
  declarations: [
    AppComponent,
    SoftwareWalkThroughComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PeceVirtualPlatformComponent,
    TheScienceComponent,
    TeamComponent,
    DoctorRecommendComponent,
    Rm3aAwsProgramComponent,
    ImageModalComponent,
    TheTmFlowDeviceComponent,
    PeceTmFlowSystenMarkerComponent,
    TmFlowHardwareComponent
  ],
  imports: [
    ScrollToModule.forRoot(),
    DemoMaterialModule,
    BrowserAnimationsModule,
    MetaModule.forRoot(
      {
      provide: MetaLoader,
      useFactory: (metaFactory),
      // deps: [TranslateService]
    }
    ),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TransferHttpCacheModule,
    NgtUniversalModule,
  ],
  providers: [
    CookieService,TestresolveService,ApiService
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],

  entryComponents:[
    ImageModalComponent
  ]
})
export class AppModule {
  constructor(public http: HttpClient, public router: Router) {
  //  this.router.navigateByUrl('/')
  }

}
