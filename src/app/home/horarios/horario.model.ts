export class HorarioItemModel {
  constructor(public inicio: string, public fim: string) {}

  get noite(): boolean {
    const horaInicio = parseInt(this.inicio.split(':')[0]);
    return horaInicio >= 18;
  }

  get dia(): boolean {
    return !this.noite;
  }
}

export  class HorarioModel{
  constructor(public dia: string, public horarios: HorarioItemModel[], public primary: boolean) {}
}
