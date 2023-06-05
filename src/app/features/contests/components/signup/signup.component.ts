import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UjContestsService} from "../../../../core/services/uj-contests.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ujContestsService: UjContestsService,
    private dialogRef: MatDialogRef<SignupComponent>
  ) {
  }

  cancel() {
    this.dialogRef.close()
  }

  confirm() {
    this.ujContestsService.signUp(this.data.contestId).subscribe({
      next: (response) => {
        this.dialogRef.close()
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
