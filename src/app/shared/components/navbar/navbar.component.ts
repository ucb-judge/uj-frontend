import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated = false;

  constructor(public keycloakService: KeycloakService, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.keycloakService.isLoggedIn();
  }

  logout() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: '¿Esta seguro que desea cerrar sesión?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.keycloakService.logout('http://localhost:4200/');
      }
    });
  }
}
