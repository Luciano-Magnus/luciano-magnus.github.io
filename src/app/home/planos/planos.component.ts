import {Component} from '@angular/core';
import {PlanoModel} from "./plano.model";
import {PlanoEnum} from "./plano.enum";

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
      info: 'Plano ideal para quem quer aprender técnicas de taekwondo.',
      checkes: [
        'Duas aulas por semana',
        'Treinamento em grupo',
        'Equipamentos funcionais',
        'Fortalecimento muscular',
        'Foco em técnicas de taekwondo',
        'Poomsae',
      ],
      buttonText: 'Escolher',
      plano: PlanoEnum.AULAS,
    },
    {
      title: 'Competição',
      value: 180,
      valueSuffix: '/Mes',
      info: 'Plano ideal para quem quer participar de competições.',
      checkes: [
        'Duas aulas por semana',
        'Treinamento em grupo',
        'Equipamentos funcionais',
        'Fortalecimento muscular',
        'Foco em técnicas para competição',
        'Agilidade e velocidade',
      ],
      buttonText: 'Escolher',
      plano: PlanoEnum.COMPETICAO,
    },
    {
      title: 'Competição + Aulas',
      value: 350,
      valueSuffix: '/Mes',
      info: 'Plano ideal para quem quer competir e aprender ténicas de taekwondo.',
      checkes: [
        'Três aulas por semana',
        'Treinamento em grupo',
        'Equipamentos funcionais',
        'Fortalecimento muscular',
        'Foco em técnicas e competição',
        'Agilidade e velocidade',
      ],
      buttonText: 'Escolher',
      plano: PlanoEnum.COMPETICAO_MAIS_AULAS,
    }
  ];

  isSwitch1On: boolean = false;


  public escolherPlano(plano: PlanoModel) {
    //Switch para escolher o plano
    switch (plano.plano) {
      case PlanoEnum.AULAS:
        window.open('https://api.whatsapp.com/send?phone=555182360551&text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20plano%20de%20aulas%20de%20taekwondo.', '_blank');
        break;
      case PlanoEnum.COMPETICAO:
        window.open('https://api.whatsapp.com/send?phone=555182360551&text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20plano%20de%20competição%20de%20taekwondo.', '_blank');
        break;
      case PlanoEnum.COMPETICAO_MAIS_AULAS:
        window.open('https://api.whatsapp.com/send?phone=555182360551&text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20plano%20de%20aulas e competição%20de%20taekwondo.', '_blank');
    }
  }
}
