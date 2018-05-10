import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
export interface User { nombre: string; apellido: string; telefono: number; email: string; pass: string; perms: string[]}
export interface Module { nombre: string; childrens: any; }

@Component({
  selector: 'app-form-wizard-page',
  templateUrl: './form-wizard-page.component.html',
  styleUrls: ['./form-wizard-page.component.scss'],
  animations: [routerAnimation]
})
export class FormWizardPageComponent implements OnInit {

  private usersCollection: AngularFirestoreCollection<User>;
  private modulesCollection: AngularFirestoreCollection<Module>;
  moduleItems: Observable<Module[]>;
  checkedList: string[]=[];

  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  constructor(private router: Router, public  authService: AuthService,private readonly afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('usuarios');
    this.modulesCollection = afs.collection<Module>('modulos');
    this.moduleItems = this.modulesCollection.valueChanges();
  }

  addItem(nombre: string, apellido: string, telefono: number, email: string, pass: string, perms: string[]){
    //let list: string[] = this.checkedList;
    const newUser : User = {nombre, apellido, telefono, email, pass, perms};
    this.usersCollection.add(newUser);
  }

    onRegisterNewUser(form: NgForm): void {
      let name=form.form.value.nombre;
      let lastName=form.form.value.apellido;
      let phone=form.form.value.telefono;
      let email=form.form.value.email;
      let password=form.form.value.password;
      let perms: string[] = this.checkedList;
      this.addItem(name, lastName, phone, email, password, perms);
      this.authService.signUpWithEmail(email, password);
    }

    onCheckboxChange(option) {
        if (this.checkedList.indexOf(option.nombre)==-1) {
            this.checkedList.push(option.nombre);
        } else {
            this.checkedList.splice(this.checkedList.indexOf(option.nombre),1)
        }
        console.log(this.authService.currentUserEmail);
    }

  ngOnInit() {

  }
}
