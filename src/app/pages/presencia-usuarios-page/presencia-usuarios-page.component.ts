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
export interface User { nombre: string; apellido: string; telefono: number; email: string; pass: string; perms: string[]}

const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'app-presencia-usuarios-page',
  templateUrl: './presencia-usuarios-page.component.html',
  styleUrls: ['./presencia-usuarios-page.component.scss']
})
export class PresenciaUsuariosPageComponent implements OnInit {
    private usersCollection: AngularFirestoreCollection<User>;
    itemsUsers: Observable<User[]>;
    // Add router animation
    @HostBinding('@routerAnimation') routerAnimation = true;
    // Table columns model
    columns: ITdDataTableColumn[] = [
        {name: 'nombre', label: 'Nombre', sortable: true},
        {name: 'apellido', label: 'Apellido'},
        {name: 'email', label: 'Email', sortable: true},
        {name: 'ultima_conexion', label: 'Ultima conexion'},
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
    sortBy = 'nombre';
    sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

    constructor(private _dataTableService: TdDataTableService, private router: Router, public  authService: AuthService,private readonly afs: AngularFirestore) {
        this.usersCollection = afs.collection('usuarios');
        this.itemsUsers = this.usersCollection.valueChanges();
        this.itemsUsers.subscribe((users) => {
            this.filteredData=users;
            this.data=users;
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
