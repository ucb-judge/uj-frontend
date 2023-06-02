import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated = false;

  constructor(public keycloakService: KeycloakService) { }
  
  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.keycloakService.isLoggedIn();
  }
}
