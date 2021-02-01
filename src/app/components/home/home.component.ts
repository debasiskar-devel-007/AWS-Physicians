import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShow: boolean;
  windowScrolled: boolean;
  topPosToStartShowing = 1000;

  constructor(private route: ActivatedRoute,private metaservice: MetaserviceService) { 
    const data: object = {
      title: 'PECETM ANS Testing Medical Device Platform',
      keywords:'PECETM ANS Testing Device, ANS Testing Platform, ANS Testing Software',
      og_title:'PECETM - Patient Encounter Compilation & Execution Software',
      description:'PECETM - The Complete ANS Testing Medical Device Platform for Physicians and their practice. This cutting-edge technology offers better patient data to significantly improve patient outcomes.',
      og_description:'PECETM - The Complete ANS Testing Medical Device Platform for Physicians and their practice. This cutting-edge technology offers better patient data to significantly improve patient outcomes.',
      og_url: 'https://healthprofitsolutions.com/',
      og_type: 'website',
      og_image: environment.share_image,
      twitter_card:environment.share_image,
    };
    this.metaservice.setmeta(data);
  }

  ngOnInit() {
  }
  
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    console.warn('test');
  }
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
    }
}

scrollToTop() {
  (function smoothscroll() {

      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 8));
      }

  })();
}

}
