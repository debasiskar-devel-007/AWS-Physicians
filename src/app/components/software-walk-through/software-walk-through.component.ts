import { Component, OnInit, Inject, ViewEncapsulation, HostListener  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
export interface DialogData {
  data: any;
}
@Component({
  selector: 'app-software-walk-through',
  templateUrl: './software-walk-through.component.html',
  styleUrls: ['./software-walk-through.component.css']
})
export class SoftwareWalkThroughComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

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
