import { EventManager } from "./EventManager";

export class StationMétéo {
  private _temperature: number;
  private _humidité: number;
  private _eventManager: EventManager;

  constructor(temperature = 0, humidité = 15) {
    this._temperature = temperature;
    this._humidité = humidité;
    this._eventManager = new EventManager();
  }

  public get temperature(): number {
    return this._temperature;
  }

  public set temperature(temperature: number) {
    this._temperature = temperature;
    this.toString();
  }

  public get eventManager(): EventManager {
    return this._eventManager;
  }

  public get humidité(): number {
    return this._humidité;
  }

  public set humidité(humidité: number) {
    if (humidité < 0 || humidité > 100) {
      throw new Error("L'humidité est exprimée en pourcentage !");
    }
    this._humidité = humidité;
    this.toString();
  }

  public toString(): void {
    this._eventManager.notifier(this._temperature, this._humidité);
  }
}
