import { Component, OnInit, Inject, HostListener, ElementRef } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
// import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
//     const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

//     return (invalidCtrl || invalidParent);
//   }
// }

export interface DialogData {
  msg: string;
  flag: string;
  userid: any;
  product: any
}
export interface DialogDataForContent {
  flag: string
}
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  isShow: boolean;
  windowScrolled: boolean;
  topPosToStartShowing = 1000;
  public formdata: any;
  public cityVal: any = [];
  public stateVal: any = [];
  public ip: any;
  public cookieval: any;
  options: FormGroup;
  //matcher = new MyErrorStateMatcher();
  // public emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //  public passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  constructor(public apiservice: ApiService, private activatedroute: ActivatedRoute, public dialog: MatDialog, public fb: FormBuilder, public route: ActivatedRoute, public metaservice: MetaserviceService, public cookieservice: CookieService) {
    let data: object = {
      title: 'PECETM ANS Testing Medical Device Platform',
      keywords: 'PECETM ANS Testing Device, ANS Testing Platform, ANS Testing Software',
      og_title: 'PECETM - Patient Encounter Compilation & Execution Software',
      description: 'PECETM - The Complete ANS Testing Medical Device Platform for Physicians and their practice. This cutting-edge technology offers better patient data to significantly improve patient outcomes.',
      og_description: 'PECETM - The Complete ANS Testing Medical Device Platform for Physicians and their practice. This cutting-edge technology offers better patient data to significantly improve patient outcomes.',
      og_url: 'https://healthprofitsolutions.com/landingpage/' + this.route.snapshot.params.userid + '/' + this.route.snapshot.params.productid,
      og_type: 'website',
      // og_image: environment.share_image,
      // twitter_card: environment.share_image,

    };
    this.metaservice.setmeta(data);



    this.options = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      phone: ['', Validators.required],
      companyname: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    })

    var currentTimeInSeconds = Math.floor(Date.now());
    this.cookieval = currentTimeInSeconds.toString();
    //console.log(currentTimeInSeconds,'lll',cookieval);


    this.apiservice.getclientip().subscribe((res: any) => {

      this.ip = res.ip.toString();
      console.log(res, 'ffffffff', this.ip);
    });




    this.apiservice.getCity().subscribe((response: any) => {
      for (const i in response) {
        this.cityVal.push(
          { 'val': response[i].city, 'name': response[i].city },
        );
      }



    });

    this.apiservice.getState().subscribe((response: any) => {
      for (const i in response) {
        this.stateVal.push(
          { 'val': response[i].abbreviation, 'name': response[i].name },
        );
      }

    });




  }

  ngOnInit() {
    setTimeout(() => {
      let clickdata: any = {
        data: {
          products: this.activatedroute.snapshot.params.productid,
          time: parseInt(this.cookieservice.get('hpstime')),
          userid: this.activatedroute.snapshot.params.userid,
          source: "Hps-landing-page-1",
          ip: this.ip
        }
      }
      //console.log(clickdata);
      this.apiservice.getDatalistForSubmit('api/sharelinkclickcount', clickdata).subscribe((response: any) => { });

      this.cookieservice.set('hpstime', this.cookieval);
    }, 3000);


  }
  //   checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  //   console.log('dsfdsf',group);
  //   let pass = group.controls.password.value;
  //   let confirmPass = group.controls.confirmpassword.value;

  //   return pass === confirmPass ? null : { notSame: true }
  // }

  inputUntouched(val: any) {
    this.options.controls[val].markAsUntouched();
  }

  contactUs() {
    // console.log('++++ not valid',this.options.value)
    let formCalData: any;
    for (formCalData in this.options.controls) {
      this.options.controls[formCalData].markAsTouched();
    }
    if (this.options.valid) {

      let fromData = {
        data: {
          firstname: this.options.value.firstname,
          lastname: this.options.value.lastname,
          email: this.options.value.email,
          phone: this.options.value.phone.toString(),
          //password:this.options.value.password,
          company: this.options.value.companyname,
          state: this.options.value.state,
          city: this.options.value.city,
          zip: this.options.value.zipcode,
          source: 'Hps-landing-page-1',
          parentid: this.activatedroute.snapshot.params.userid,
          type: 'lead',
          status: 1,
          products: this.activatedroute.snapshot.params.productid
        }

      }

      this.apiservice.getDatalistForSubmit('api3/usersignup', fromData).subscribe((response: any) => {
        if (response.status == "success") {

          const dialogRef = this.dialog.open(FormConfirmComponent, {
            panelClass: 'successModal',
            data: { flag: 'success', userid: this.activatedroute.snapshot.params.userid, product: this.activatedroute.snapshot.params.productid }
          });
          dialogRef.afterClosed().subscribe(result => {
          });
          this.options.reset();


        }

        if (response.status == "error") {

          const dialogRef = this.dialog.open(FormConfirmComponent, {
            panelClass: 'successModal',
            data: { msg: response.errormessage, flag: 'error' }
          });
          dialogRef.afterClosed().subscribe(result => {
          });
          // this.options.reset();
        }

      }, error => {
      });

    }
  }


  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    console.warn('test');
  }

  @HostListener("window:scroll", [])
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




  //   }
  //   listenFormFieldChange(val:any){
  //   //console.log('ddd',val);
  //   if(val.field == "fromsubmit" && val.fieldval == "success"){

  //    let submitData ={
  //      data:val.fromval

  //    }
  //   // console.log('lllllllll',submitData);
  //    this.apiservice.getDatalistForSubmit('api/addusers', submitData).subscribe((response: any) => {
  //     if(response.status == "success"){

  //       const dialogRef = this.dialog.open(FormConfirmComponent,{
  //         panelClass:'successModal',
  //         data:{ flag:'success'}
  //       });
  //       dialogRef.afterClosed().subscribe(result => {
  //       });
  //  }

  //  if(response.status == "error"){

  //   const dialogRef = this.dialog.open(FormConfirmComponent,{
  //     panelClass:'successModal',
  //     data:{msg:response.errormessage , flag:'error'}
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //   });
  //  }
  //    });
  //   }

  //   }

  modalcall(value) {
    // console.log('hhhhhhhh')
    const dialogRef = this.dialog.open(ContentModalComponent, {
      panelClass: 'successModal',
      data: { flag: value }
    });
    dialogRef.afterClosed().subscribe(result => {
    });


  }

}

@Component({
  selector: 'app-confirm',
  templateUrl: './success.html',
  styleUrls: ['./landingpage.component.css']
})

export class FormConfirmComponent {
  public formdata: any = {};
  public progressSpinner: any = {
    mode: 'indeterminate',
    loading: false,
    bookingStatus: 'Sending request'
  };
  public productid: any;

  constructor(public dialogRef: MatDialogRef<FormConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public apiservice: ApiService, public snackBar: MatSnackBar) {
    console.log(data.product, 'form+++++++++++++++==')
    this.productid = data.product
    // this.formdata = {
    //   successmessage: 'Submitted Successfully !!',
    //   submitactive: true, // optional, default true
    //   submittext: 'Submit',
    //   jwttoken: '',
    //   // cancelroute: '',
    //   // custombuttons: [
    //   //   {
    //   //     name: 'save',
    //   //     label: 'Save',
    //   //     class: 'savecls',
    //   //     type: 'button'
    //   //   }
    //   // ],
    //   fields: [
    //     {
    //       label: 'Projects all cost differently, but we require a minimum of $100k on all potential custom software builds.  Can your potential client afford this?',
    //       name: 'cost',
    //       value: '',
    //       type: 'text',
    //       validations: [
    //         { rule: 'required', message: 'field is required' },
    //       ]
    //     },
    //     {
    //       label: 'Is the person getting on the call able to make a financial decision for the company?',
    //       name: 'company_financial',
    //       value: 1,
    //       type: 'radio',
    //       validations: [
    //         { rule: 'required', message: 'field is required' },
    //       ],
    //       val: [{ key: 1, val: 'Yes' }]
    //     },
    //     {
    //       label: 'Give a brief description of what they are looking for: ',
    //       name: 'description',
    //       value: '',
    //       type: 'textarea',
    //       validations: [
    //         { rule: 'required', message: 'field is required' },
    //       ]
    //     }
    //   ]
    // }
    // console.log('ddd',data)
  }

  // listenFormFieldChange(val: any) {
  //   console.log(val, '++=++')



  //   //for submit



  //   if (val.field == 'fromsubmit' && val.fieldval == 'success') {
  //     this.progressSpinner.loading = true;

  //     // this.data.flag = 'submit';
  //     // this.data.val = val;
  //     // this.data.worksheet_val = 1;


  //     let form_data = {
  //       worksheet_data: val.fromval,
  //       worksheet_val: 1,
  //       user_id: this.data.userid,
  //       product_id: this.data.product
  //     }

  //     this.apiservice.customRequest1('work-sheet', form_data).subscribe((response: any) => {
  //       if (response.status == 'success') {
  //         this.progressSpinner.loading = false;

  //         this.openSnackBar('Worksheet Submit Successfully.', null);

  //         this.dialogRef.close(this.data);

  //       } else {
  //         this.openSnackBar('Something went wrong. Please try again.', null);
  //       }
  //     })
  //   }
  // }
  openSnackBar(message: string, action: string = null) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}

@Component({
  selector: 'app-confirm',
  templateUrl: './contentmodal.html',
  styleUrls: ['./landingpage.component.css']
})

export class ContentModalComponent {
  constructor(public dialogRef: MatDialogRef<ContentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataForContent) {

  }
}