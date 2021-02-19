import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pece-tm-flow-systen-marker',
  templateUrl: './pece-tm-flow-systen-marker.component.html',
  styleUrls: ['./pece-tm-flow-systen-marker.component.css']
})
export class PeceTmFlowSystenMarkerComponent implements OnInit {

  constructor(private route: ActivatedRoute,private metaservice: MetaserviceService) {
    const data: object = {
      title: 'HPS-TM-Flow System Markers',
      keywords:'TM-Flow System Markers, PECETM TM-Flow System Markers, System Markers TM-Flow',
      og_title:'PECETM - Patient Encounter Compilation & Execution Software',
      description:'The system markers are presented on the PECETM TM-Flow ANS testing device medical reports and enable the early detection of potential health risks and diseases in the Autonomous and Vascular Nervous Systems.',
      og_description:'The system markers are presented on the PECETM TM-Flow ANS testing device medical reports and enable the early detection of potential health risks and diseases in the Autonomous and Vascular Nervous Systems.',
      og_url: 'https://healthprofitsolutions.com/pece-tm-flow-systen-marker',
      og_type: 'website',
      og_image: environment.share_image,
      twitter_card:environment.share_image,
    };
    this.metaservice.setmeta(data);

   }

  ngOnInit() {
  }

}
