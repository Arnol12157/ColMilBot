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
export interface Intent { intent_name: string; preguntas: string[]}

@Injectable()
export class ChatService {

    readonly token = environment.dialogflow.angularBot;
    readonly client = new ApiAiClient({ accessToken: this.token });
    conversation = new BehaviorSubject<Message[]>([]);
    private conversationCollection: AngularFirestoreCollection<Conversation>;
    private intentCollection: AngularFirestoreCollection<Intent>;

  constructor(private readonly afs: AngularFirestore) {
      this.conversationCollection = afs.collection<Conversation>('chatbot');
      this.intentCollection = afs.collection<Intent>('intents');
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
                this.addOrUpdateItem((res as any).sessionId, (this.conversation.observers[0] as any).seed);
                this.addOrUpdateIntent((res.result as any).metadata.intentId, (res.result as any).metadata.intentName, (res.result as any).resolvedQuery);
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
                docRef.set({conversacion: conversacion, fecha_interaccion: date});
            }
        }).catch(function (err) {
            const conver = conversacion.map((obj)=> {return Object.assign({}, obj)});
            if(err){
                docRef.update({conversacion: conver})
            } else {
                var datePipe = new DatePipe("en-ES");
                var date = datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm');
                docRef.set({conversacion: conver, fecha_interaccion: date});
            }
        })
    }

    addOrUpdateIntent( id_intent: any, intent_name: string, pregunta: string){
        var docRef = this.intentCollection.doc(id_intent).ref;
        this.afs.firestore.runTransaction(function (transaction) {
            return transaction.get(docRef).then(function (sfDoc) {
                throw sfDoc.exists
            });
        }).then(function (flag) {
            if(flag){
                var data;
                docRef.get().then(function(doc) {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        data = doc.data();
                        data.preguntas.push(pregunta)
                        docRef.update({numero_peticiones: data.numero_peticiones+1, preguntas: data.preguntas})
                    } else {
                        console.log("No such document!");
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
            } else {
                docRef.set({intent_name: intent_name, preguntas: [pregunta], numero_peticiones: 1});
            }
        }).catch(function (err) {
            // const conver = conversacion.map((obj)=> {return Object.assign({}, obj)});
            if(err){
                var data;
                docRef.get().then(function(doc) {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());
                        data = doc.data();
                        data.preguntas.push(pregunta)
                        docRef.update({numero_peticiones: data.numero_peticiones+1, preguntas: data.preguntas})
                    } else {
                        console.log("No such document!");
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
            } else {
                docRef.set({intent_name: intent_name, preguntas: [pregunta], numero_peticiones: 1});
            }
        })
    }
}
