import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class MenuComponent {
  nome: string = '';
  placeholderText: string = 'Seu nome aqui';

  getMensagem(): string {
    return this.nome ? `Bem-vindo, ${this.nome}!` : 'Digite seu nome acima.';
  }

  alterarPlaceholder() {
    this.placeholderText = 'Digite algo novo!';
  }

  onInput() {
    // Exemplo de evento: pode adicionar lógica aqui
    console.log('Nome digitado:', this.nome);
  }
}