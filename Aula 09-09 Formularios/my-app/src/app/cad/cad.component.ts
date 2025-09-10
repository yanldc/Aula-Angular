import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cad.component.html',
  styleUrl: './cad.component.css'
})
export class CadComponent {
  nome: string = '';
  dataNascimento: string = '';
  telefone: string = '';
  endereco: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Cadastro:', {
      nome: this.nome,
      dataNascimento: this.dataNascimento,
      telefone: this.telefone,
      endereco: this.endereco
    });
  }

  voltarLogin() {
    this.router.navigate(['/login']);
  }
}