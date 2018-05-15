import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerAnimation} from '../../utils/page.animation';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [routerAnimation]
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  loginFormErrors: any;

  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  constructor(private router: Router, public  authService: AuthService, private formBuilder: FormBuilder,) {
      this.loginFormErrors = {
          email   : {},
          password: {}
      };
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email   : ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });

      this.loginForm.valueChanges.subscribe(() => {
          this.onLoginFormValuesChanged();
      });
  }

    onLoginFormValuesChanged()
    {
        for ( const field in this.loginFormErrors )
        {
            if ( !this.loginFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {};

            // Get the control
            const control = this.loginForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.loginFormErrors[field] = control.errors;
                //console.log("error",this.loginFormErrors[field]);
            }
        }
    }

    onLoginEmail(): void {
        if (!this.loginForm.invalid) {
            let email=this.loginForm.get("email").value;
            let password=this.loginForm.get("password").value;
            this.authService.loginWithEmail(email, password)
                .then(() => this.router.navigateByUrl('/chatbot/gestion'))
                .catch(_error => {
                    console.log("error",_error);
                    // this.error = _error
                    // this.router.navigate(['/'])
                })
        }
    }

  /**
   * Login method
   * @param login
   * @param password
   */
  login (login, password) {

    this.router.navigateByUrl('/main');
  }
}
