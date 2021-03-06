import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
import { environment } from 'src/environments/environment';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public code:any = '';
public errorCaptchaMessage:any = true
public clickCaptcha:boolean = false
options: FormGroup;
public contactusdata: any = {
  first_name:'',
  last_name:'',
  email:'',
  phone:'',
  message:'',
  capture:''
};
  constructor(public fb:FormBuilder,public apiService: ApiService, private route: ActivatedRoute,private metaservice: MetaserviceService,private _snackBar: MatSnackBar) {
    const data: object = {
      title: 'Contact Health Profit Solutions',
      keywords:'Contact Health Profit Solutions, Health Profit Solutions Contact, Contact HPS',
      og_title:'PECETM - Patient Encounter Compilation & Execution Software',
      description:'Get in touch with us at Health Profit Solutions with your queries, and we will be happy to answer any questions you have. You can also leave your feedback and someone will get in touch with you soon.',
      og_description:'Get in touch with us at Health Profit Solutions with your queries, and we will be happy to answer any questions you have. You can also leave your feedback and someone will get in touch with you soon.',
      og_url: 'https://healthprofitsolutions.com/contact',
      og_type: 'website',
     og_image: 'https://all-frontend-assets.s3.amazonaws.com/AWS-Physicians/images/HPS_OG+Image_Somnath_02-01-2021.jpg',
      // twitter_card:environment.share_image,
    };
    this.metaservice.setmeta(data);
  
    this.options = this.fb.group({
      first_name:['', Validators.required],
      last_name:['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      phone:['',Validators.required],
      message:['',Validators.required],
      captcha:['',Validators.required]
    })    
    this.clickCaptcha = false
    console.log("sssss======>",this.options .controls)
    console.log("Click event const ===>",this.clickCaptcha)

   }

  ngOnInit() {    
    this.createCaptchaOnload()
  }
  doSubmit(){
    console.log("Click event ===>",this.clickCaptcha)
    let formCalData: any;
    for (formCalData in this.options.controls) {
       this.options.controls[formCalData].markAsTouched();
     }
    let userGivenCaptcha = this.options.controls[formCalData].value
    if (this.options.valid) {    
      //console.log(this.contactusdata,'+++++++');

      
      let captchadata = this.contactusdata.captcha;
      
      this.errorCaptchaMessage = (userGivenCaptcha!='' && (this.code === userGivenCaptcha)) ? true : false;
      console.log(this.errorCaptchaMessage);
      if(this.errorCaptchaMessage){
        let data = this.contactusdata
        this.apiService.postdata(data ,'https://hblr907g1d.execute-api.us-east-1.amazonaws.com/dev/insert').subscribe((res: any) => {
          console.log(res);
          
          this.openSnackBar('Contact Submitted Successfully');
          this.options.reset();
          Object.assign(this.contactusdata, {
            first_name:'',
            last_name:'',
            email:'',
            phone:'',
            message:'',
            capture:''
          });
          console.log("sssss=====>",this.contactusdata)

          if (res.status === 'success') {
            console.log(res);
            this.openSnackBar('Contact Submitted Successfully');
            //this.options.reset();
            
            /*this.contactusdata = {
              first_name:'',
              last_name:'',
              email:'',
              phone:'',
              message:'',
              capture:''
            }*/
          }
        });
      }
      
    }
  }
 

  createCaptcha($event) {
      $event.preventDefault()
    

    //clear the contents of captcha div first 
    console.log("Click event ===>",this.clickCaptcha)
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    this.code = captcha.join("");
    
    
    return this.code
    //document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
  }

  createCaptchaOnload(){
    //clear the contents of captcha div first 
    console.log("Click event ===>",this.clickCaptcha)
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
      if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
      else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    this.code = captcha.join("");    
    return this.code
  }

  inputUntouched(val: any) {
    this.options.controls[val].markAsUntouched();
  }
 
  openSnackBar(str:any) {
    this._snackBar.open(str, 'ok', {
      duration: 6000,
    });
  }



}
