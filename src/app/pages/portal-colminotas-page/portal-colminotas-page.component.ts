import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
export interface Notice { titulo: string; descripcion: string; id_usuario: string}

@Component({
  selector: 'app-portal-colminotas-page',
  templateUrl: './portal-colminotas-page.component.html',
  styleUrls: ['./portal-colminotas-page.component.scss']
})
export class PortalColminotasPageComponent implements OnInit {
  private noticiasCollection: AngularFirestoreCollection<Notice>;
  itemsNoticias: Observable<Notice[]>;
  data: any[] = [];

  constructor(public authService: AuthService, private readonly afs: AngularFirestore) {
      this.noticiasCollection = afs.collection('noticias', ref => ref.orderBy("fecha_created", "desc").limit(5));
      this.itemsNoticias = this.noticiasCollection.valueChanges();
      this.itemsNoticias.subscribe((noticias) => {
          this.data=noticias;
          console.log(this.data);
      });
  }

  ngOnInit() {
  }

}
