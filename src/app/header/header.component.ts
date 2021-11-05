import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  email: string = "";
  constructor(private oktaAuthService: OktaAuthService) {
    this.oktaAuthService.$authenticationState.subscribe(
      isAuth => this.isAuthenticated = isAuth
    );
   }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
    if(this.isAuthenticated){
      const userClaims = await this.oktaAuthService.getUser();
      this.email = userClaims.email || "";
    }
  }

  logout(){
    this.oktaAuthService.signOut();
  }



}


