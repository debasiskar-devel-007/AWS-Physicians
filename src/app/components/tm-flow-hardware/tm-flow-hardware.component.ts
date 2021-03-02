import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tm-flow-hardware',
  templateUrl: './tm-flow-hardware.component.html',
  styleUrls: ['./tm-flow-hardware.component.css']
})
export class TmFlowHardwareComponent implements OnInit {

  constructor(private route: ActivatedRoute,private metaservice: MetaserviceService) {
    const data: object = {
      title: 'HPS-TM-Flow Device Hardware',
      keywords:'The TM-Flow Device, TM-Flow ANS Device, ANS Device TM-Flow',
      og_title:'PECETM - Patient Encounter Compilation & Execution Software',
      description:'The TM-Flow device is a comprehensive, user-friendly, non-invasive tool that focuses on the early detection of complications in the Autonomous Nervous System by measuring 8 health risk areas within the body.',
      og_description:'The TM-Flow device is a comprehensive, user-friendly, non-invasive tool that focuses on the early detection of complications in the Autonomous Nervous System by measuring 8 health risk areas within the body.',
      og_url: 'https://healthprofitsolutions.com/tm-flow-hardware',
      og_type: 'website',
      // og_image: environment.share_image,
      // twitter_card:environment.share_image,
    };
    this.metaservice.setmeta(data);

  }

  ngOnInit() {
  }

}
