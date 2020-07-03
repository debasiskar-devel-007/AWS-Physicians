import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-rm3a-aws-program',
  templateUrl: './rm3a-aws-program.component.html',
  styleUrls: ['./rm3a-aws-program.component.css']
})
export class Rm3aAwsProgramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ptp(){
    document.getElementById("ptp").scrollIntoView({
      behavior:"smooth"
    });
  }
  wpo(){
    document.getElementById("wpo").scrollIntoView({
      behavior:"smooth"
    });
  }
  pop(){
    document.getElementById("pop").scrollIntoView({
      behavior:"smooth"
    });
  }
  mnm(){
    document.getElementById("mnm").scrollIntoView({
      behavior:"smooth"
    });
  }
  pt(){
    document.getElementById("pt").scrollIntoView({
      behavior:"smooth"
    });
  }
  sc(){
    document.getElementById("sc").scrollIntoView({
      behavior:"smooth"
    });
  }
  mri(){
    document.getElementById("mri").scrollIntoView({
      behavior:"smooth"
    });
  }

  rs(){
    document.getElementById("rs").scrollIntoView({
      behavior:"smooth"
    });
  }

  pr(){
    document.getElementById("pr").scrollIntoView({
      behavior:"smooth"
    });
  }

  addtest(){
    document.getElementById("addtest").scrollIntoView({
      behavior:"smooth"
    });
  }

  billc(){
    document.getElementById("billc").scrollIntoView({
      behavior:"smooth"
    });
  }

  wwp(){
    document.getElementById("wwp").scrollIntoView({
      behavior:"smooth"
    });
  }

  dob(){
    document.getElementById("dob").scrollIntoView({
      behavior:"smooth"
    });
  }
}
