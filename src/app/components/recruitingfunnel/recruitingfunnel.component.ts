import { Component, OnInit, Inject , HostListener, ElementRef} from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, ErrorStateMatcher, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

export interface DialogData {
  msg: string;
  flag: string;
}

@Component({
  selector: 'app-recruitingfunnel',
  templateUrl: './recruitingfunnel.component.html',
  styleUrls: ['./recruitingfunnel.component.css']
})
export class RecruitingfunnelComponent implements OnInit {
  isShow: boolean;
  windowScrolled: boolean;
  topPosToStartShowing = 1000;
  public formdata: any ;
  public cityVal:any = [];
  public stateVal:any = [];
  options: FormGroup;
 
  constructor(public apiservice: ApiService,private activatedroute: ActivatedRoute,public dialog: MatDialog,public fb:FormBuilder) { 
    this.options = this.fb.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      phone:['',Validators.required],
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
       state:this.options.value.state,
       city:this.options.value.city,
       zip:this.options.value.zipcode,
       parentid:this.activatedroute.snapshot.params.userid,
       product_id:this.activatedroute.snapshot.params.productid
     }
    
   }

   this.apiservice.getDatalistForSubmit('api3/submitdata', fromData).subscribe((response: any) => {
     if(response.status == "success"){

          const dialogRef = this.dialog.open(FormConfirmMsgComponent,{
            panelClass:'successModal',
            data:{ flag:'success'}
          });
          dialogRef.afterClosed().subscribe(result => {
          });
        this.options.reset();
          
       
     }

     if(response.status == "error"){

      const dialogRef = this.dialog.open(FormConfirmMsgComponent,{
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

}
@Component({
  selector: 'app-confirm',
  templateUrl: './successmodal.html',
  styleUrls: ['./recruitingfunnel.component.css']
})

export class FormConfirmMsgComponent {
  constructor(public dialogRef: MatDialogRef<FormConfirmMsgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){
   // console.log('ddd',data)
  }
 }