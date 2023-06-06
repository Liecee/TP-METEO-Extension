import { IListener } from "./Ilistener";

export class AfficheurTexte implements IListener {
  constructor() {
    //
  }

  affiche(temperature: number, humidité: number): void {
    console.log(temperature + "°C\n" + humidité + "%");
  }

  miseAJour(temperature: number, humidité: number): void {
    this.affiche(temperature, humidité);
  }
}
