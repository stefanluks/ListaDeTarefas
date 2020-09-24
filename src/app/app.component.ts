import { Component } from '@angular/core';
import { Tarefa } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tarefas';
  descricao=null;
  editando=null;
  tarefas=[new Tarefa('fazer bolo')];
  executadas=[new Tarefa('fazer cuscuz')];

  salvar(){
    if(this.editando){
      this.editando.descricao=this.descricao;
    }else{
      let a = new Tarefa(this.descricao);
      this.tarefas.push(a);
    }
    this.descricao=null;
    this.editando=null;
  }
  executar(tarefa){
    let indice = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(indice,1);
    this.executadas.push(tarefa);
  }
  excluirExec(tarefa){
    if(confirm('TEM CERTEZA QUE DESEJA EXCLUIR A TAREFA?')){
      let i = this.executadas.indexOf(tarefa);
      this.executadas.splice(i,1);
    }
  }
  excluir(tarefa){
    if(this.editando == tarefa){
      alert('não é possivél excluir durante a edição!');
    }else{
      if(confirm('TEM CERTEZA QUE DESEJA EXCLUIR A TAREFA?')){
        let i = this.tarefas.indexOf(tarefa);
        this.tarefas.splice(i,1);
      }
    }
  }
  editar(tarefa){
    this.editando=tarefa;
    this.descricao=tarefa.descricao;
  }
  cancelar(){
    this.descricao=null;
    this.editando=null;
  }
}
