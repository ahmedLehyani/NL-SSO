import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
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
        console.log(data);
      }
    );
  }

}
