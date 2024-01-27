import {Component} from '@angular/core';
import {PlanoModel} from "./plano.model";

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent {
  planos: PlanoModel[] = [
    {
      title: 'Aulas',
      value: 180,
      valueSuffix: '/Mes',
      info: 'Treinamento funcional para ciranças',
      checkes: [
        'Duas aulas por semana',
        'Treinamento em grupo',
        'Equipamentos funcionais',
        'Fortalecimento muscular',
      ],
      buttonText: 'Escolher',
    },
    {
      title: 'Competição',
      value: 180,
      valueSuffix: '/Mes',
      info: 'Treinamento funcional para ciranças',
      checkes: [
        'Duas aulas por semana',
        'Treinamento em grupo',
        'Equipamentos funcionais',
        'Fortalecimento muscular',
      ],
      buttonText: 'Escolher',
    },
    {
      title: 'Competição + Aulas',
      value: 350,
      valueSuffix: '/Mes',
      info: 'Treinamento funcional para ciranças',
      checkes: [
        'Duas aulas por semana',
        'Treinamento em grupo',
        'Equipamentos funcionais',
        'Fortalecimento muscular',
      ],
      buttonText: 'Escolher',
    }
  ];

  isSwitch1On: boolean = false;


  handleButtonClick() {
  }
}
