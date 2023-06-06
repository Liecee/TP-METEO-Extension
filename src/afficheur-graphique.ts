import * as asciichart from "asciichart";
import { IListener } from "./Ilistener";

export class AfficheurGraphique implements IListener {
  private tabTemperature: Array<number>;
  private tabHumidité: Array<number>;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidité = [];
  }

  miseAJour(temperature: number, humidité: number): void {
    this.tabTemperature.push(temperature);
    this.tabHumidité.push(humidité);
    this.affiche();
  }

  affiche(): void {
    console.log(asciichart.plot([this.tabTemperature, this.tabHumidité]));
  }
}
