import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Login:', { user: this.user, password: this.password });
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}