import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "adson", cpf: "111", email: "apsr2@cin.ufpe.br", github: "https://github.com/AdsonRamos"};
}

export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  github: string
}
