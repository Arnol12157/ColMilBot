import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DatePipe} from '@angular/common';
export interface User { nombre: string; apellido: string; telefono: number; email: string; pass: string; perms: string[]; id: string; status: string}

@Injectable()
export class AuthService {

    authState: any = null;
    private usersCollection: AngularFirestoreCollection<User>;
    users: Observable<User[]>;
    user: User;

    constructor(private afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {
        this.afAuth.authState.subscribe((auth) => {
            this.authState = auth
        });
    }

    get isUserAnonymousLoggedIn(): boolean {
        return (this.authState !== null) ? this.authState.isAnonymous : false
    }

    get currentUserId(): string {
        return (this.authState !== null) ? this.authState.uid : ''
    }

    get currentUserObservable(): any {
        return this.afAuth.auth;
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get currentUserEmail(): string {
        return (this.authState['email'] !== null) ? this.authState['email'] : ''
    }

    get currentUser(): any {
        return (this.authState !== null) ? this.authState : null;
    }

    get isUserEmailLoggedIn(): boolean {
        if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
            return true
        } else {
            return false
        }
    }

    signUpWithEmail(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.router.navigate(['/usuarios/gestion'])
                //this.authState = user
            })
            .catch(error => {
                console.log(error)
                throw error
            });
    }

    loginWithEmail(email: string, password: string) {
        var datePipe = new DatePipe("en-ES");
        var date = datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm');
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user;
                this.updateFields({status: "ACTIVO", ultima_conexion: date});
            })
            .catch(error => {
                console.log(error);
                throw error
            });
    }

    signOut(): void {
        this.updateFields({status: "INACTIVO"});
        this.afAuth.auth.signOut();
        this.router.navigate(['/login'])
    }

    private updateFields(_data: any) {
        this.users = this.afs.collection<User>('usuarios', ref => ref.where('email', '==', this.currentUserEmail)).snapshotChanges().map(
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
            console.log(this.user["id"]);
            this.usersCollection = this.afs.collection('usuarios');
            this.usersCollection.doc(""+this.user["id"]).update(_data);
        })
    }

    getPermissions(): any{
        this.users = this.afs.collection<User>('usuarios', ref => ref.where('email', '==', this.currentUserEmail)).snapshotChanges().map(
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
            console.log(this.user.perms);
        })
    }
}