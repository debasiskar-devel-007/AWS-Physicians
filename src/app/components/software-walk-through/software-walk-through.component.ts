import { Component, OnInit, Inject, ViewEncapsulation, HostListener  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice/metaservice.service';
import { environment } from 'src/environments/environment';
export interface DialogData {
  data: any;
}
@Component({
  selector: 'app-software-walk-through',
  templateUrl: './software-walk-through.component.html',
  styleUrls: ['./software-walk-through.component.css']
})
export class SoftwareWalkThroughComponent implements OnInit {

  constructor(public dialog:MatDialog, private route: ActivatedRoute,private metaservice: MetaserviceService) {
    const data: object = {
      title: 'HPS PECETM Software Walk-through',
      keywords:'HPS PECETM Software Walk-through, How Does HPS PECETM Work, HPS PECETM Software Functioning',
      og_title:'PECETM - Patient Encounter Compilation & Execution Software',
      description:'Explore the features and functions of the PECETM ANS Testing Software program through visual representations and demonstrative videos to understand some of the features and functioning of the platform.',
      og_description:'Explore the features and functions of the PECETM ANS Testing Software program through visual representations and demonstrative videos to understand some of the features and functioning of the platform.',
      og_url: 'https://healthprofitsolutions.com/software-walk-through',
      og_type: 'website',
      og_image: environment.share_image,
      twitter_card:environment.share_image,
    };
    this.metaservice.setmeta(data);

   }

  ngOnInit() {
  }
  viewImage(val:any){
    console.log(val)
            //console.log('>>>>>>>>>>>>>>>>>>',this.safeSrc)
            const dialogRef = this.dialog.open(ImageModalComponent, {
              // panelClass:['modal-md','success-modal'],
              panelClass: 'image_modal',
              width:'1000px',
              height:'450px',
              data: val
            });
            dialogRef.afterClosed().subscribe(result => {
            }); 
    }

}

@Component({
  selector: 'app-imageModal',
  templateUrl: './imageModal.html'
})
export class ImageModalComponent {
  public profile: any;
  public fulldata:any;
  constructor(public dialogRef: MatDialogRef<ImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
 
  }

}
