import {Component, OnInit} from '@angular/core';
import {PlanoModel} from "./plano.model";

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent {
  planos: PlanoModel[] = [
    {
      title: 'Treinamento Funcional',
      value: 100,
      valueSuffix: '/Mes',
      info: 'Treinamento funcional para ciranças',
      checkes: [
        'Duas aulas por semana',
        'Treinamento em grupo',
        'Equipamentos funcionais',
        'Fortalecimento muscular',
      ],
      buttonText: 'Escolher'
    },
    {
      title: 'Aulas',
      value: 150,
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
      value: 150,
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
      title: 'Competição + Aulas\n',
      value: 250,
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
  ]

  handleButtonClick() {
  }
}
