import {Component} from '@angular/core';
import {HorarioItemModel, HorarioModel} from "./horario.model";

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent {
  horarios: HorarioModel[] = [
    new HorarioModel('Segunda', [
        new HorarioItemModel('18:00', '19:00'),
        new HorarioItemModel('19:00', '20:00'),
        new HorarioItemModel('20:00', '21:00'),
      ],
      true),
    new HorarioModel('Terça', [
        new HorarioItemModel('18:00', '19:00'),
        new HorarioItemModel('19:00', '20:00'),
        new HorarioItemModel('20:00', '21:00'),
      ],
      false),
    new HorarioModel('Quarta', [
        new HorarioItemModel('18:00', '19:00'),
        new HorarioItemModel('19:00', '20:00'),
        new HorarioItemModel('20:00', '21:00'),
      ],
      true),
    new HorarioModel('Quinta', [
        new HorarioItemModel('18:00', '19:00'),
        new HorarioItemModel('19:00', '20:00'),
        new HorarioItemModel('20:00', '21:00'),
      ],
      false),
    new HorarioModel('Sexta', [
        new HorarioItemModel('19:00', '21:00'),
      ],
      true),
  ]
}
