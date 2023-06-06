import * as asciichart from "asciichart";
import { IListener } from "./Ilistener";

export class AfficheurGraphique implements IListener {
  private tabTemperature: Array<number>;
  private tabHumidité: Array<number>;
  private id: number;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidité = [];
    this.id = 0;
  }

  miseAJour2(temperature: number, humidité: number): void {
    this.tabTemperature.push(temperature);
    this.tabHumidité.push(humidité);
    this.id++;
  }

  affiche2(): void {
    console.log(
      "[" +
        this.id +
        "] " +
        "Température : " +
        this.tabTemperature[this.id] +
        "°C " +
        "/ Humidité : " +
        this.tabHumidité[this.id] +
        "%"
    );
    console.log(asciichart.plot([this.tabTemperature]));
    console.log(asciichart.plot([this.tabHumidité]));
    console.log("\n");
  }
}
