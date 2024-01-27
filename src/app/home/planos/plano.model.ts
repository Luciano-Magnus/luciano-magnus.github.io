import {PlanoEnum} from "./plano.enum";

export interface PlanoModel {
  title: string;
  value: number;
  valueSuffix: string;
  info: string;
  checkes: string[];
  buttonText: string;
  plano: PlanoEnum;
}
