import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {

  letters: string[]; 
  element: string;
  elements: string[] = ['Hidrógeno',
    'Litio',
    'Sodio',
    'Potasio',
    'Rubidio',
    'Cesio',
    'Francio',
    'Berilio',
    'Magnesio',
    'Calcio',
    'Estroncio',
    'Bario',
    'Radio',
    'Boro',
    'Aluminio',
    'Galio',
    'Indio',
    'Talio',
    'Carbono',
    'Silicio',
    'Germanio',
    'Estaño',
    'Plomo',
    'Nitrógeno',
    'Fósforo',
    'Arsénico',
    'Antimonio',
    'Bismuto',
    'Oxígeno',
    'Azufre',
    'Selenio',
    'Teluro',
    'Polonio',
    'Fluor',
    'Cloro',
    'Bromo',
    'Iodo',
    'Ástato',
    'Helio',
    'Neón',
    'Argón',
    'Kryptón',
    'Xenón',
    'Radón',
    'Níquel',
    'Cobre',
    'Zinc',
    'Plata',
    'Cadmio',
    'Mercurio',
    'Escandio',
    'Hierro',
    'Itrio',
    'Lantano',
    'Neodimio',
    'Promecio',
    'Samario',
    'Europio',
    'Gadolinio',
    'Terbio',
    'Disprosio',
    'Holmio',
    'Erbio',
    'Tulio',
    'Iterbio',
    'Lutecio',
    'Actinio',
    'Fermio',
    'Mendelevio',
    'Nobelio',
    'Lawrencio',
    'Titanio',
    'Manganeso',
    'Cobalto',
    'Zirconio',
    'Paladio',
    'Cerio',
    'Praseodimio',
    'Hafnio',
    'Torio',
    'Americio',
    'Curio',
    'Berkelio',
    'Californio',
    'Einstenio',
    'Rutherfordio',
    'Vanadio',
    'Niobio',
    'Tantalio',
    'Oro',
    'Protactinio',
    'Dubnio',
    'Cromo',
    'Molibdeno',
    'Rutenio',
    'Rodio',
    'Wolframio',
    'Osmio',
    'Iridio',
    'Platino',
    'Uranio',
    'Neptunio',
    'Plutonio',
    'Seaborgio',
    'Tecnecio',
    'Renio',
    'Bohrio',
    'Hassio'
  ]
  // elementInput = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.randomElement();
  }
  validate() {
    // console.log(this.elementInput);
  }
  randomElement() {
    this.element = this.elements[Math.floor(Math.random()*this.elements.length)].toUpperCase( );
    this.letters = this.shuffle(this.element.split(''));
  }
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
