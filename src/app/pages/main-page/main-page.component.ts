import {AfterViewInit, Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {ResizeService} from '../../resize/resize.service';
import {routerAnimation} from '../../utils/page.animation';
import { AuthService } from '../../auth/auth.service';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
export interface User { nombre: string; apellido: string; telefono: number; email: string; pass: string; perms: string[]; id: string; status: string}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [routerAnimation]
})
export class MainPageComponent implements OnInit, AfterViewInit {

    users: Observable<User[]>;
    user: User;
    bUsuarios: boolean;
    bNoticias: boolean;
    bInteraccion: boolean;
    bChatbot: boolean;
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Applying theme class
  @HostBinding('class.dark-theme') darkTheme = false;
  _sidenavMode = 'side';
  _boxedLayout = false;
  sideNavOpened = false;
  // Data for messages at popup
  messages = [
    {
      subject: 'Monthly report',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'assets/avatars/4040.png',
      time: '18:05'
    },
    {
      subject: 'Holiday party',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'assets/avatars/4040.png',
      time: '3 hrs ago'
    },
    {
      subject: 'Salary bonus',
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'assets/avatars/4040.png',
      time: '2 days ago'
    }
  ];


  constructor(private router: Router, public  authService: AuthService,public resizeService: ResizeService, private afs: AngularFirestore) {
    this.onResize();

      this.users = this.afs.collection<User>('usuarios', ref => ref.where('email', '==', this.authService.currentUserEmail)).snapshotChanges().map(
          changes => {
              return changes.map(
                  a => {
                      const data = a.payload.doc.data() as User;
                      data.id = a.payload.doc.id;
                      return data;
                  });
          });
      this.users.subscribe((userData) => {
          this.user = userData[0];
          if(this.user.perms.indexOf("Usuarios") > -1){
            this.bUsuarios=true;
          }
          if(this.user.perms.indexOf("Noticias") > -1){
            this.bNoticias=true;
          }
          if(this.user.perms.indexOf("Interaccion") > -1){
            this.bInteraccion=true;
          }
          if(this.user.perms.indexOf("Chatbot") > -1){
            this.bChatbot=true;
          }
      })
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // Resize after sidenav open on startup to draw charts correctly
    setTimeout(() => this.resizeService.resizeInformer$.next(), 500);
    setTimeout(() => this.sideNavOpened = true, 0);
  }

  set sidenavMode(val) {
    this._sidenavMode = val;
    setTimeout(() => this.resizeService.resizeInformer$.next(), 500);
  }

  get sidenavMode() {
    return this._sidenavMode;
  }

  set boxedLayout(val) {
    this._boxedLayout = val;
    setTimeout(() => this.resizeService.resizeInformer$.next(), 500);
  }

  get boxedLayout() {
    return this._boxedLayout;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 800) {
      this.sideNavOpened = false;
      this._sidenavMode = 'over';
    }
  }

  signOut() {
    this.authService.signOut();
  }

}
