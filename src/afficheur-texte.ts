import { IListener } from "./Ilistener";

export class AfficheurTexte implements IListener {
  constructor() {
    //
  }
  // Afficher la journalisation sur la console sous la forme numéro entre crochet est le numéro de la mesure
  affiche(id: number, temperature: number, humidité: number): void {
    console.log(
      "[" + id + "] " + "Température : " + temperature + "°C " + "/ Humidité : " + humidité + "%"
    );
  }

  // Itération pour chaque valeur de la liste de id et afficher la journalisation

  miseAJour2(temperature: number, humidité: number): void {
    this.affiche(0, temperature, humidité);
  }
}
