import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pece-virtual-platform',
  templateUrl: './pece-virtual-platform.component.html',
  styleUrls: ['./pece-virtual-platform.component.css']
})
export class PeceVirtualPlatformComponent implements OnInit {

  constructor(private route: ActivatedRoute,private metaservice: MetaserviceService) {
    const data: object = {
      title: 'HPS PECETM Virtual Platform',
      keywords:'HPS PECETM Virtual Platform, HPS PECETM Software Program, ANS testing Software',
      og_title:'PECETM - Patient Encounter Compilation & Execution Software',
      description:'A complete 360-degree solution for the ANS testing industry offering Fully Managed Services to Physician practices across multiple locations through its Enterprise Management System and systematic algorithms.',
      og_description:'A complete 360-degree solution for the ANS testing industry offering Fully Managed Services to Physician practices across multiple locations through its Enterprise Management System and systematic algorithms.',
      og_url: 'https://healthprofitsolutions.com/pece-virtual-platform',
      og_type: 'website',
      og_image: environment.share_image,
      twitter_card:environment.share_image,
    };
    this.metaservice.setmeta(data);

   }

  ngOnInit() {
  }

}
