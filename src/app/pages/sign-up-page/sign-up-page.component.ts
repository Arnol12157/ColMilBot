import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerAnimation} from '../../utils/page.animation';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
  animations: [routerAnimation]
})
export class SignUpPageComponent implements OnInit {

  // COMPONENTE PARA EL REGISTRO DE USUARIOS

    signUpForm: FormGroup;
    signUpFormErrors: any;

    // Add router animation
    @HostBinding('@routerAnimation') routerAnimation = true;
    constructor(private router: Router, public  authService: AuthService, private formBuilder: FormBuilder,) {
        this.signUpFormErrors = {
            email   : {},
            password: {},
            confirmPassword: {}
        };
    }

    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });

        this.signUpForm.valueChanges.subscribe(() => {
            this.onSignUpFormValuesChanged();
        });
    }

    onSignUpFormValuesChanged()
    {
        for ( const field in this.signUpFormErrors )
        {
            if ( !this.signUpFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.signUpFormErrors[field] = {};

            // Get the control
            const control = this.signUpForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.signUpFormErrors[field] = control.errors;
                //console.log("error",this.loginFormErrors[field]);
            }
        }
    }

    onSignUp(): void {
        if (!this.signUpForm.invalid) {
            let email=this.signUpForm.get("email").value;
            let password=this.signUpForm.get("password").value;
            this.authService.signUpWithEmail(email, password)
                .then(() => this.router.navigateByUrl('/main/dashboard'))
                .catch(_error => {
                    console.log("error",_error);
                    // this.error = _error
                    // this.router.navigate(['/'])
                })
        }
    }

  /**
   * Sign up method
   * @param login
   * @param password
   */
  signUn(login, password) {
    this.router.navigateByUrl('/');
  }

}
