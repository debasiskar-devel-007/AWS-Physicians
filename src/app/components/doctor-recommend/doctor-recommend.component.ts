import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-recommend',
  templateUrl: './doctor-recommend.component.html',
  styleUrls: ['./doctor-recommend.component.css']
})
export class DoctorRecommendComponent implements OnInit {
  public youtubeFlage:boolean=false;
  public hideSpan:boolean=true;

  constructor() { }

  ngOnInit() {
  }
 /**show video modal on click of thamnail function by sourav */
 fetchvideo(){
  this.youtubeFlage=true;
  this.hideSpan=false;
}  

}
