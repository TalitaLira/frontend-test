import { LogicService } from '../services/logic.service';
import { People } from '../interfaces/people';
import { PeopleService } from '../services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'people-list',
  templateUrl: "./people-list.component.html",
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: People[] = [];

  constructor(private peopleService: PeopleService,
              private logicService: LogicService) { }

  ngOnInit() {
    this.peopleService.getAll()
    .map(people => {
      return people.map(person =>{
        // Mapeando objetos e adicionando os valores das porcentagens novos atributos, likes e dislikes
        // A outra opção seria modificar os já existentes (negative e positive), mas escolhi dessa forma
        // pois futuramente o negative e positive poderiam ser utilizados para alguma outra funcionalidade
        person.likes = this.logicService.percentage(person.positive, person.negative)
        person.dislikes = this.logicService.percentage(person.negative, person.positive)
        
        return person;
      })
    })   
    .map(people =>{
      //mapeando os objetos novamente (já com os likes e dislikes) para retorná-los já na ordem correta 
      //para serem renderizados pela view. 
      let ordered = this.logicService.orderByLikes(people)
      return ordered
    })
    .subscribe(response => {
      this.people = response;
    });
  }

  

}
