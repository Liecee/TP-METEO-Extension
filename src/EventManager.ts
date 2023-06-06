import { IListener } from "./Ilistener";
export class EventManager {
  // Type d'événement -> liste des listeners qui écoutent cet événement
  private _listeners: Array<IListener>;
  constructor() {
    this._listeners = new Array<IListener>();
  }
  souscrire(listener: IListener): void {
    this._listeners.push(listener);
  }

  desinscrire(listener: IListener): void {
    for (let i = 0; i < this._listeners.length; i++) {
      if (this._listeners[i] === listener) {
        this._listeners.splice(i, 1);
      }
    }
  }
  notifier(temperature: number, humidite: number): void {
    this._listeners.forEach((afficheur) => afficheur.miseAJour2(temperature, humidite));
  }
}
