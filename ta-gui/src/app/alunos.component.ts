import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../common/aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  cpfduplicado: boolean = false;
  githubDuplicado: boolean = false;

  constructor(private alunoService: AlunoService) { }

  criarAluno(a: Aluno): void {
    this.alunoService.criar(a)
      .subscribe(
        ar => {
          if (ar.nome) {
            this.alunos.push(ar);
            this.aluno = new Aluno();
          } else {
            if(JSON.stringify(ar) == JSON.stringify("cpf")) {
              this.cpfduplicado = true;
            } else if(JSON.stringify(ar) == JSON.stringify("github")){
              this.githubDuplicado = true
            }
          }
        },
        msg => { alert(msg.message); }
      );
    alert("Já executei o criar e o subscribe!")
  }

  deletarAluno(a: Aluno): void {
    this.alunoService.deletar(a).subscribe(
      ar => {
        if(ar.success){
          alert("Aluno deletado com sucesso")
          this.alunos = this.alunos.filter((element) => {
            return element.cpf != a.cpf
          })
        }
      }
    )
  }

  onMove(): void {
    this.cpfduplicado = false;
    this.githubDuplicado = false
  }

  ngOnInit(): void {
    this.alunoService.getAlunos()
      .subscribe(
        as => { this.alunos = as; },
        msg => { alert(msg.message); }
      );
  }

}