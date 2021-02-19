import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  submit() {
    this.authService.register(
      this.loginForm.get('email')?.value,
      this.loginForm.get('pass1')?.value,
      this.loginForm.get('pass2')?.value
    ).subscribe(
      (data) => {
        if (data.status === 200) {
          this.tokenStorage.saveToken(data.data.usr_token);
        } else {
          this.sharedService.openSnackBar('Error', data.error);
        }
      }
    );
  }



}
