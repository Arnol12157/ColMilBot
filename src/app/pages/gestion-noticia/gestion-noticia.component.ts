
import {Component, HostBinding, OnInit} from '@angular/core';
import {
    IPageChangeEvent,
    ITdDataTableColumn,
    ITdDataTableSortChangeEvent,
    TdDataTableService,
    TdDataTableSortingOrder
} from '@covalent/core';
import {routerAnimation} from '../../utils/page.animation';
import { AuthService } from '../../auth/auth.service';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
export interface noticias { titulo: string; descripcion: string; imagen: string; id_usuario: string}

const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'app-gestion-noticia',
  templateUrl: './gestion-noticia.component.html',
  styleUrls: ['./gestion-noticia.component.scss']
})
export class GestionNoticiaComponent implements OnInit {


    private noticiasCollection: AngularFirestoreCollection<noticias>;
    itemsNoticias: Observable<noticias[]>;
    // Add router animation
    @HostBinding('@routerAnimation') routerAnimation = true;
    // Table columns model
    columns: ITdDataTableColumn[] = [
        {name: 'titulo', label: 'titulo', sortable: true},
        {name: 'descripcion', label: 'descripcion'},
        {name: 'imagen', label: 'imagen', sortable: true},
        {name: 'id_usuario', label: 'id_usuario', sortable: true},

    ];
    // Table data
    data: any[] = [];
    // Table parameters
    filteredData: any[] = this.data;
    filteredTotal: number = this.data.length;
    searchTerm = '';
    fromRow = 1;
    currentPage = 1;
    pageSize = 5;
    sortBy = 'titulo';
    sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
     //sirve para la parte de noticia con farebase
    constructor(private _dataTableService: TdDataTableService, private router: Router, public  authService: AuthService,private readonly afs: AngularFirestore) {
        this.noticiasCollection = afs.collection('noticias');
        this.itemsNoticias = this.noticiasCollection.valueChanges();
        this.itemsNoticias.subscribe((noticias) => {
            this.filteredData=noticias;
            this.data=noticias;
        });
    }

    ngOnInit(): void {
        this.filter();
    }

    sort(sortEvent: ITdDataTableSortChangeEvent): void {
        this.sortBy = sortEvent.name;
        this.sortOrder = sortEvent.order;
        this.filter();
    }

    search(searchTerm: string): void {
        this.searchTerm = searchTerm;
        this.fromRow = 1;
        this.currentPage = 1;
        this.filter();
    }

    page(pagingEvent: IPageChangeEvent): void {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.filter();
    }

    filter(): void {
        let newData: any[] = this.data;
        newData = this._dataTableService.filterData(newData, this.searchTerm, true);
        this.filteredTotal = newData.length;
        newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
        newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
        this.filteredData = newData;
    }
}