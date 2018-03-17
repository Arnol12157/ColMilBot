import {AngularFireAuth} from 'angularfire2/auth';
import {Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private auth: AuthService, private router: Router, public afAuth: AngularFireAuth) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.afAuth.authState.map((auth) =>  {
            if(auth == null) {
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        });
    }
}