import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-doctor-recommend',
  templateUrl: './doctor-recommend.component.html',
  styleUrls: ['./doctor-recommend.component.css']
})
export class DoctorRecommendComponent implements OnInit {
  public youtubeFlage:boolean=false;
  public hideSpan:boolean=true;

  constructor(private route: ActivatedRoute,private metaservice: MetaserviceService) {
    const data: object = {
      title: 'HPS- Doctor Recommendation',
      keywords:'Dr. Samah Mohiuddin recommends PECETM, PECETM Doctor Recommendation, PECETM Recommendation',
      og_title:'PECETM - Patient Encounter Compilation & Execution Software',
      description:'Dr. Samah Mohiuddin, a Board-certified Neurologist from New York, talks about the efficiency and usefulness of the PECETM ANS Testing Medical Device Platform, and how it can improve patient care significantly.',
      og_description:'Dr. Samah Mohiuddin, a Board-certified Neurologist from New York, talks about the efficiency and usefulness of the PECETM ANS Testing Medical Device Platform, and how it can improve patient care significantly.',
      og_url: 'https://healthprofitsolutions.com/doctor-recommend',
      og_type: 'website',
      // og_image: environment.share_image,
      // twitter_card:environment.share_image,
    };
    this.metaservice.setmeta(data); 
  }

  ngOnInit() {
  }
 /**show video modal on click of thamnail function by sourav */
 fetchvideo(){
  this.youtubeFlage=true;
  this.hideSpan=false;
}  

}
