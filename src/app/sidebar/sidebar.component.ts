import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/security/auth.service";
import {AuthInfo} from "../shared/security/auth-info";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  authInfo: AuthInfo;

  constructor(private authService:AuthService) {



  }

  ngOnInit() {


      this.authService.authInfo$.subscribe(authInfo =>  this.authInfo = authInfo);


  }


    logout() {
        this.authService.logout();
    }


}
