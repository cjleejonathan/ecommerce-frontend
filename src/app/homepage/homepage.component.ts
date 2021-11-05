import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isAuthenticated: boolean = false;



  constructor(private authService: OktaAuthService) { }

  async ngOnInit() {
    this.isAuthenticated = await this.authService.isAuthenticated();


  }

}
