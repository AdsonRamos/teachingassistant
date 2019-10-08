import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
  alunos: Aluno[] = [];

  cadastrar(aluno: Aluno): Aluno {
    var result = null;
    if (this.cpfNaoCadastrado(aluno.cpf) && this.githubNaoCadastrado(aluno.loginGithub)) {
      result = new Aluno();
      result.copyFrom(aluno);
      this.alunos.push(result);
    }
    return result;
  }

  remover(cpf: string): boolean {
    const sizeAlunos = this.alunos.length
    this.alunos = this.alunos.filter((element) => {
      return element.cpf != cpf
    })
    return sizeAlunos != this.alunos.length
  }

  cpfNaoCadastrado(cpf: string): boolean {
    return !this.alunos.find(a => a.cpf == cpf);
  }

  githubNaoCadastrado(loginGithub: string): boolean {
    return !this.alunos.find(a => a.loginGithub == loginGithub)
  }

  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.copyFrom(aluno);
    return result;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }
}