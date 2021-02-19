import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-the-science',
  templateUrl: './the-science.component.html',
  styleUrls: ['./the-science.component.css']
})
export class TheScienceComponent implements OnInit {

  constructor(private route: ActivatedRoute,private metaservice: MetaserviceService) {
    const data: object = {
      title: 'HPS-ANS Science',
      keywords:'ANS Science, Science of ANS Testing, ANS Testing Science',
      og_title:'PECETM - Patient Encounter Compilation & Execution Software',
      description:'The science that governs the PECETM ANS testing Medical Device Platform to assess the health risk areas in the Autonomous Nervous System for potential complications and diseases.',
      og_description:'The science that governs the PECETM ANS testing Medical Device Platform to assess the health risk areas in the Autonomous Nervous System for potential complications and diseases.',
      og_url: 'https://healthprofitsolutions.com/the-science',
      og_type: 'website',
      og_image: environment.share_image,
      twitter_card:environment.share_image,
    };
    this.metaservice.setmeta(data);

   }

  ngOnInit() {
  }

}
