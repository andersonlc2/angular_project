import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnInit {

  public titulo = "Alunos";
  public alunoSelecionado: string;

  public alunos =  [
    {id: 1, nome:'Marta', sobrenome: "Kent", telefone: 982554587},
    {id: 2, nome:'Paula', sobrenome: "Isabela", telefone: 988964587},
    {id: 3, nome:'Laura', sobrenome: "Antonia", telefone: 911664587},
    {id: 4, nome:'Luiza', sobrenome: "Maria", telefone: 986464587},
    {id: 5, nome:'Lucas', sobrenome: "Machado", telefone: 982004587},
    {id: 6, nome:'Pedro', sobrenome: "Alvares", telefone: 905664587},
    {id: 7, nome:'Paulo', sobrenome: "José", telefone: 980464587}
  ]
  
  alunoSelect(aluno: any) {
    this.alunoSelecionado = aluno.nome;
  }

  voltar() {
    this.alunoSelecionado = "";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
