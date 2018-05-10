import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';
import {AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {DatePipe} from '@angular/common';

export class Message {
    constructor(public content: string, public sentBy: string) {}
}
export interface Conversation { fecha_interaccion: any; conversacion: any[]}

@Injectable()
export class ChatService {

    readonly token = environment.dialogflow.angularBot;
    readonly client = new ApiAiClient({ accessToken: this.token });
    conversation = new BehaviorSubject<Message[]>([]);
    private conversationCollection: AngularFirestoreCollection<Conversation>;

  constructor(private readonly afs: AngularFirestore) {
      this.conversationCollection = afs.collection<Conversation>('chatbot');
  }

    // Sends and receives messages via DialogFlow
    converse(msg: string) {
        const userMessage = new Message(msg, 'user');
        this.update(userMessage);
        return this.client.textRequest(msg)
            .then(res => {
                const speech = res.result.fulfillment.speech;
                const botMessage = new Message(speech, 'bot');
                this.update(botMessage);
                this.addOrUpdateItem(res.sessionId, this.conversation.observers[0].seed);
            });
    }

    // Adds message to source
    update(msg: Message) {
        this.conversation.next([msg]);
    }

    addOrUpdateItem( id_session: any, conversacion: any[]){
        var docRef = this.conversationCollection.doc(id_session).ref;
        this.afs.firestore.runTransaction(function (transaction) {
            return transaction.get(docRef).then(function (sfDoc) {
                throw sfDoc.exists
            });
        }).then(function (flag) {
            if(flag){
              docRef.set({conversacion: conversacion})
            } else {
                var datePipe = new DatePipe("en-ES");
                var date = datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm');
                docRef.set({conversacion: conversacion, fecha_interaccion: date})
            }
        }).catch(function (err) {
            const conver = conversacion.map((obj)=> {return Object.assign({}, obj)});
            if(err){
                docRef.update({conversacion: conver})
            } else {
                var datePipe = new DatePipe("en-ES");
                var date = datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm');
                docRef.set({conversacion: conver, fecha_interaccion: date})

            }
        })
    }
}
