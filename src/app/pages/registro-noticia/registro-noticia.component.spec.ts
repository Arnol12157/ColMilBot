import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
export interface noticias { titulo: string; descripcion: string; imagen: string; id_usuario: string}
export interface Module { titulo: string; childrens: any; }

@Component({
    selector: 'app-form-wizard-page',
    templateUrl: './form-wizard-page.component.html',
    styleUrls: ['./form-wizard-page.component.scss'],
    animations: [routerAnimation]
})
export class RegistroNoticiaComponent implements OnInit {

    private noticiasCollection: AngularFirestoreCollection<User>;
    private modulesCollection: AngularFirestoreCollection<Module>;
    moduleItems: Observable<Module[]>;
    checkedList: string[]=[];

    // Add router animation
    @HostBinding('@routerAnimation') routerAnimation = true;
    constructor(private router: Router, public  authService: AuthService,private readonly afs: AngularFirestore) {
        this.noticiasCollection = afs.collection<noticias>('nticias');
        this.modulesCollection = afs.collection<Module>('modulos');
        this.moduleItems = this.modulesCollection.valueChanges();
    }

    addItem{ titulo: string; descripcion: string; imagen: string; id_usuario: string}{
        //let list: string[] = this.checkedList;
        const newNoticias : noticias = { titulo,descripcion,imagen,id_usuario};
        this.noticiasCollection.add(newNoticias);
    }

    onRegisterNewNoticias(form: NgForm): void {
        let titulo=form.form.value.titulo;
        let descripcion=form.form.value.descripion;
        let imagen=form.form.value.imagen;
        let id_usuario=form.form.value.id_usuario;

        this.addItem(titulo, descripcion, imagen, id_usuario);

    }

    onCheckboxChange(option) {
        if (this.checkedList.indexOf(option.titulo)==-1) {
            this.checkedList.push(option.titulo);
        } else {
            this.checkedList.splice(this.checkedList.indexOf(option.titulo),1)
        }
    }

    ngOnInit() {

    }
}
