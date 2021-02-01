import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public contactusdata: any = {
  firstname:'',
  lastname:'',
  email:'',
  phone:'',
  description:'',
  capture:''
};
  constructor(public apiService: ApiService, private route: ActivatedRoute,private metaservice: MetaserviceService) {
    const data: object = {
      title: 'Contact Health Profit Solutions',
      keywords:'Contact Health Profit Solutions, Health Profit Solutions Contact, Contact HPS',
      og_title:'PECETM - Patient Encounter Compilation & Execution Software',
      description:'Get in touch with us at Health Profit Solutions with your queries, and we will be happy to answer any questions you have. You can also leave your feedback and someone will get in touch with you soon.',
      og_description:'Get in touch with us at Health Profit Solutions with your queries, and we will be happy to answer any questions you have. You can also leave your feedback and someone will get in touch with you soon.',
      og_url: 'https://healthprofitsolutions.com/contact',
      og_type: 'website',
      og_image: environment.share_image,
      twitter_card:environment.share_image,
    };
    this.metaservice.setmeta(data);

   }

  ngOnInit() {
  }
  doSubmit(){
    console.log(this.contactusdata,'+++++++');
    let data = {data:this.contactusdata}
    this.apiService.postdata(data ,'https://3l17ji3kka.execute-api.us-east-1.amazonaws.com/dev/api/addcontactusforhps').subscribe((res: any) => {
      console.log(res);
      if (res.status === 'success') {
        console.log(res);
        this.contactusdata = {
          firstname:'',
          lastname:'',
          email:'',
          phone:'',
          description:'',
          capture:''
        }
      }
    });
  }

}
