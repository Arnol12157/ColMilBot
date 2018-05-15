import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnimation} from '../../utils/page.animation';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import {DatePipe} from '@angular/common';
export interface Notice { titulo: string; descripcion: string; email_usuario: string; fecha_created: string}
export interface Module { titulo: string; childrens: any; }

@Component({
    selector: 'app-registro-noticia',
    templateUrl: './registro-noticia.component.html',
    styleUrls: ['./registro-noticia.component.scss'],
    animations: [routerAnimation]
})
export class RegistroNoticiaComponent implements OnInit {

    private noticiasCollection: AngularFirestoreCollection<Notice>;
    private modulesCollection: AngularFirestoreCollection<Module>;
    moduleItems: Observable<Module[]>;
    checkedList: string[] = [];

    // Add router animation
    @HostBinding('@routerAnimation') routerAnimation = true;
    constructor(private router: Router, public  authService: AuthService, private readonly afs: AngularFirestore) {
        this.noticiasCollection = afs.collection<Notice>('noticias');
        this.modulesCollection = afs.collection<Module>('modulos');
        this.moduleItems = this.modulesCollection.valueChanges();
    }

    addItem( titulo: string, descripcion: string, email_usuario: string){
    //let list: string[] = this.checkedList;
        var datePipe = new DatePipe("en-ES");
        var fecha_created = datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm');
    const newNoticias : Notice = { titulo, descripcion, email_usuario, fecha_created };
    this.noticiasCollection.add(newNoticias);
    }

    onRegisterNewNoticias(form: NgForm): void {
        let titulo = form.form.value.titulo;
        let descripcion = form.form.value.descripcion;
        let email_usuario=this.authService.currentUserEmail;

        this.addItem(titulo, descripcion, email_usuario);

        this.router.navigate(['/noticias/gestion'])
    }

    onCheckboxChange(option) {
        if (this.checkedList.indexOf(option.titulo) == -1) {
            this.checkedList.push(option.titulo);
        } else {
            this.checkedList.splice(this.checkedList.indexOf(option.titulo), 1)
        }
    }

    ngOnInit() {

    }
}