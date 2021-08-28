import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) { }

  postMessage(message: Message): Observable<Message> {
    return this.http.post<Message>('http://localhost:8080/mensagens', message);
  }
}
