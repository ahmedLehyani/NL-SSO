import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {finalize, take} from 'rxjs/operators';
import {TokenStorageService} from '../../services/token-storage.service';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService
  ) {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  submit(): void {
    this.authService.login(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value)
      .pipe(take(1), finalize(() => {
      }))
      .subscribe(
        (data) => {
          if (data.status === 200) {
            this.tokenStorage.saveToken(data.data.usr_token);
          } else {
            this.sharedService.openSnackBar('Error', data.error);
          }
        }, (error) => {
        },
        () => {
        }
      );
  }

}
