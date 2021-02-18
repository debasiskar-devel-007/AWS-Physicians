import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

export interface DialogData {
  msg: string;
  flag: string;
}
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  public formdata: any ;
  public cityVal:any = [];
  public stateVal:any = [];
  options: FormGroup;
  matcher = new MyErrorStateMatcher();
  // public emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //  public passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  constructor(public apiservice: ApiService,private activatedroute: ActivatedRoute,public dialog: MatDialog,public fb:FormBuilder) { 
    this.options = this.fb.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      phone:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      companyname:['',Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
    },{ validator: this.checkPasswords })
    
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

    // this.formdata = {
    //   successmessage: 'Added Successfully !!',
    //   submittext: 'Submit',
    //   canceltext: 'Cancel',
    //   resettext: 'Reset',
    //   //redirectpath: this.redirceturl,
    //   submitactive: true, 
    // //  apiUrl: this._apiService.api_url,
    //  // endpoint: 'api1/resourceadd',
    //  // jwttoken: this._apiService.jwtToken,
    //   //cancelroute: this.redirceturl,
    //   hidereset:true,
    //   hidecancel:true,
    //   fields: [
    //     {
    //       label: 'First Name',
    //       name: 'firstname',
    //       type: 'text',
    //       validations: [
    //         { rule: 'required', message: "First Name field is required" },
    //     ]
    //     },
    //     {
    //       label: 'Last Name',
    //       name: 'lastname',
    //       type: 'text',
    //       validations: [
    //         { rule: 'required', message: "Last Name field is required" },
    //     ]
    //     },
    //     {
    //       label: 'Phone No',
    //       name: 'phone',
    //       type: 'number',
    //       validations: [
    //         { rule: 'required', message: "Phone No field is required" },
    //     ]
    //     },
    //     {
    //       label: "Email",
    //       name: "email",
    //       type: 'email',
    //       validations: [
    //           { rule: 'required', message: "Email field is required" },
    //           { rule: 'pattern', value: this.emailregex, message: "Must be a valid Email" }
    //       ]
          
    //   },
    //   {
    //     label: "Password",
    //     name: "password",
    //     type: 'password',
    //     value: '',
    //     validations: [
    //         { rule: 'required', message: "Password field is required" },
    //         { rule: 'pattern', value: this.passwordregex, message: "Must contain a Capital Letter and a Number" }
    //     ]
    // },
    // {
    //     label: "Confirm Password",
    //     name: "confirmpassword",
    //     type: 'password',
    //     validations: [
    //         { rule: 'required', message: "Confirm Password field is required" },
    //         { rule: 'match', message: "Confirm Password field Needs to  match Password" },
    //         //{rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
    //     ],
 

    // },

    // {
    //   label: 'Company Name',
    //   name: 'company',
    //   type: 'text',
    //   validations: [
    //     { rule: 'required', message: "Company Name field is required" },
    // ]
    // },
    // {
    //   label: 'Address',
    //   name: 'address',
    //   type: 'textarea',
    //   validations: [
    //     { rule: 'required', message: "Address field is required" },
    // ]
    // },
    // {
    //   label: 'State',
    //   name: 'state',
    //   type: 'select',
    //   val:this.stateVal,
    //   validations: [
    //     { rule: 'required', message: "State field is required" },
    // ]
    // },
    // {
    //   label: 'City',
    //   name: 'city',
    //   type: 'select',
    //   val:this.cityVal,
    //   validations: [
    //     { rule: 'required', message: "City field is required" },
    // ]
    // },
    // {
    //   label: 'Zip',
    //   name: 'zip',
    //   type: 'number',
    //   validations: [
    //     { rule: 'required', message: "Zip field is required" },
    // ]
    // },
    // {
    //   label: 'Status',
    //   name: 'status',
    //   type: 'hideen',
    //   value:1
    // },
        
    //     {
    //       label: 'Parent Id',
    //       name: 'parentid',
    //       type: 'hideen',
    //       value: this.activatedroute.snapshot.params.userid
    //     },
    //     {
    //       label: 'Product Id',
    //       name: 'product_id',
    //       type: 'hideen',
    //       value: this.activatedroute.snapshot.params.productid
    //     },
    //     {
    //       label: 'Landing Page',
    //       name: 'landing_page',
    //       type: 'hideen',
    //       value:'Hps-landing-page-1'
    //     },
           
        
    //   ]
    // };
  
  }

  ngOnInit() {
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  console.log('dsfdsf',group);
  let pass = group.controls.password.value;
  let confirmPass = group.controls.confirmpassword.value;

  return pass === confirmPass ? null : { notSame: true }
}

inputUntouched(val: any) {
  this.options.controls[val].markAsUntouched();
}

contactUs(){     
  // console.log('++++ not valid',this.options.value)
   let formCalData: any;
  for (formCalData in this.options.controls) {
     this.options.controls[formCalData].markAsTouched();
   }
  if (this.options.valid) {
    
   let fromData ={
     data:{
       firstname :this.options.value.firstname,
       lastname: this.options.value.lastname,
       email:this.options.value.email,
       phone:this.options.value.phone.toString(),
       password:this.options.value.password,
       company:this.options.value.companyname,
       state:this.options.value.state,
       city:this.options.value.city,
       zip:this.options.value.zipcode,
       source:'Hps-landing-page-1',
       parentid:this.activatedroute.snapshot.params.userid,
       type:'lead',
       status:1,
       product_id:this.activatedroute.snapshot.params.productid
     }
    
   }

   this.apiservice.getDatalistForSubmit('api3/usersignup', fromData).subscribe((response: any) => {
     if(response.status == "success"){

          const dialogRef = this.dialog.open(FormConfirmComponent,{
            panelClass:'successModal',
            data:{ flag:'success'}
          });
          dialogRef.afterClosed().subscribe(result => {
          });
        this.options.reset();
          
       
     }

     if(response.status == "error"){

      const dialogRef = this.dialog.open(FormConfirmComponent,{
        panelClass:'successModal',
        data:{msg:response.errormessage , flag:'error'}
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
  constructor(public dialogRef: MatDialogRef<FormConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){
   // console.log('ddd',data)
  }
 }
