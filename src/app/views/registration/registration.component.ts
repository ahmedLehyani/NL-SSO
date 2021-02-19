import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private sharedService: SharedService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute,
              private tokenStorage: TokenStorageService,
              private userService: UserService) {
    this.registrationForm = this.formBuilder.group({
      phone: [, Validators.required],
      first_name: [, Validators.required],
      last_name: [, Validators.required],
      publicName: [, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.registrationForm.value);

    this.userService.setUserInfo(
      {number: this.registrationForm.get('phone')?.value, lang: ''},
      {first_name: this.registrationForm.get('first_name')?.value},
      {number: this.registrationForm.get('last_name')?.value, public: this.registrationForm.get('publicName')?.value})
      .subscribe((data) => {
          if (data.status === 200) {
            this.router.navigateByUrl('/home');
          } else {
            this.sharedService.openSnackBar('Error', data.error);
          }
        }
      );
  }
}
