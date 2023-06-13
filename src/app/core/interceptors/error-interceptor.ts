import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private snackBar: MatSnackBar) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.showMessage(`Error: ${error.status} - ${error.error.message}`);
        if (error.status === 404) {
          this.router.navigate(['/404']).then(r => console.log('redirect to 404 page'));
        }
        else if (error.status === 403) {
          this.router.navigate(['/403']).then(r => console.log('redirect to 403 page'));
        }
        return throwError(error);
      })
    );
  }

  showMessage(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000, // Duration in milliseconds
    });
  }
}
