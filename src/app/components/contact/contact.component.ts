import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

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
  constructor(public apiService: ApiService) { }

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
