import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

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
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  public formdata: any;
  public cityVal: any = [];
  public stateVal: any = [];
  options: FormGroup;
  //matcher = new MyErrorStateMatcher();
  // public emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //  public passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  constructor(public apiservice: ApiService, private activatedroute: ActivatedRoute, public dialog: MatDialog, public fb: FormBuilder, public route: ActivatedRoute) {
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
          product_id: this.activatedroute.snapshot.params.productid
        }

      }

      this.apiservice.getDatalistForSubmit('api3/usersignup', fromData).subscribe((response: any) => {
        if (response.status == "success") {

          const dialogRef = this.dialog.open(FormConfirmComponent, {
            panelClass: 'successModal',
            data: { flag: 'success', userid: this.route.snapshot.params.userid, product: this.route.snapshot.params.productid }
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
