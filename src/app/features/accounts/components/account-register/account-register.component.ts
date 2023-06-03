import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UjCampusService} from "../../../../core/services/uj-campus.service";
import {UjCampusMajorService} from "../../../../core/services/uj-campus-major.service";
import {CampusDto} from "../../models/campus.dto";
import {CampusMajorDto} from "../../models/campus-major.dto";
import {UjUsersService} from "../../../../core/services/uj-users.service";

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {
  registerForm: FormGroup;
  campuses: CampusDto[] = [];
  campusesMajors: CampusMajorDto[] = [];
  selectedCampusMajorId: number = 0;

  constructor(private formBuilder: FormBuilder, private ujCampusService: UjCampusService, private ujCampusMajorService: UjCampusMajorService, private userService: UjUsersService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      campus: ['', Validators.required],
      major: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ujCampusService.getCampuses().subscribe({
      next: (data) => {
        // console.log(data);
        this.campuses = data.data!;
        this.registerForm.patchValue({
          campus: this.campuses[0].campusId,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.ujCampusMajorService.getMajorsByCampusId(1).subscribe({
      next: (data) => {
        // console.log(data);
        this.campusesMajors = data.data!;
        this.registerForm.patchValue({
          major: this.campusesMajors[0].campusMajorId,
        });
        this.selectedCampusMajorId = this.campusesMajors[0].campusMajorId;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onCampusChange(event: any) {
    console.log(event.value);
    console.log('event :' + event.value);
    this.ujCampusMajorService.getMajorsByCampusId(event.value).subscribe({
      next: (data) => {
        this.campusesMajors = data.data!;
        this.registerForm.patchValue({
          major: this.campusesMajors[0].campusMajorId,
        });
        // console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onMajorChange(event: any) {
    // console.log('event :' + event);
    // console.log(event.value);
    this.selectedCampusMajorId = event.value;
    console.log(this.selectedCampusMajorId);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      formData.campusMajorId = this.selectedCampusMajorId;
      console.log(formData);
      this.userService.createStudent(formData).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: ({error}) => {
          console.log(error.message);
        }
      });
    }
  }
}
