import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShow: boolean;
  windowScrolled: boolean;
  topPosToStartShowing = 1000;

  constructor() { }

  ngOnInit() {
  }
  
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    console.warn('test');
  }
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

}
