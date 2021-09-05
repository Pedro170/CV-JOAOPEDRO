import { Component, OnInit } from '@angular/core';
import { Message } from '../model/Message';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-menu-pagina',
  templateUrl: './menu-pagina.component.html',
  styleUrls: ['./menu-pagina.component.css']
})
export class MenuPaginaComponent implements OnInit {

  constructor(
    private messageService: MessageService,
  ) { }

  message: Message = new Message();

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  hamburger(): any {
    const menu = document.querySelector('.sidebar');
    const corpo = document.querySelector('.home_content');
    menu?.classList.toggle('active');
    corpo?.classList.toggle('active');
  }

  enviar(): any {
    this.messageService.postMessage(this.message).subscribe((resp: Message) => {
      this.message = resp;
      alert('Menssagem enviada com sucesso!!');
      this.message = new Message();
    }, erro => {
      if (erro.status === 500) {
        alert('[ERRO] complete os campos corretamente!');
      }
    });
  }
}
