import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardData, ElementData } from '../../models/card-data.model';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  elements: ElementData[] = [
    { element: 'Hidrógeno', symbol: 'H', oxidationNumber: '−1, 1' },
    { element: 'Litio', symbol: 'Li', oxidationNumber: '1' },
    { element: 'Sodio', symbol: 'Na', oxidationNumber: '1' },
    { element: 'Potasio', symbol: 'K', oxidationNumber: '1' },
    { element: 'Rubidio', symbol: 'Rb', oxidationNumber: '1' },
    { element: 'Cesio', symbol: 'Cs', oxidationNumber: '1' },
    { element: 'Francio', symbol: 'Fr', oxidationNumber: '1' },
    { element: 'Alcalinos Térreos', symbol: '', oxidationNumber: '' },
    { element: 'Berilio', symbol: 'Be', oxidationNumber: '2' },
    { element: 'Magnesio', symbol: 'Mg', oxidationNumber: '2' },
    { element: 'Calcio', symbol: 'Ca', oxidationNumber: '2' },
    { element: 'Estroncio', symbol: 'Sr', oxidationNumber: '2' },
    { element: 'Bario', symbol: 'Ba', oxidationNumber: '2' },
    { element: 'Radio', symbol: 'Ra', oxidationNumber: '2' },
    { element: 'Boroides', symbol: '', oxidationNumber: '' },
    { element: 'Boro', symbol: 'B', oxidationNumber: '-3, 3' },
    { element: 'Aluminio', symbol: 'Al', oxidationNumber: '3' },
    { element: 'Galio', symbol: 'Ga', oxidationNumber: '3' },
    { element: 'Indio', symbol: 'In', oxidationNumber: '3' },
    { element: 'Talio', symbol: 'Tl', oxidationNumber: '1, 3' },
    { element: 'Carbonoides', symbol: '', oxidationNumber: '' },
    { element: 'Carbono', symbol: 'C', oxidationNumber: '−4, 2, 4' },
    { element: 'Silicio', symbol: 'Si', oxidationNumber: '−4, 4' },
    { element: 'Germanio', symbol: 'Ge', oxidationNumber: '−4, 4' },
    { element: 'Estaño', symbol: 'Sn', oxidationNumber: '2,  4' },
    { element: 'Plomo', symbol: 'Pb', oxidationNumber: '2, 4' },
    { element: 'Nitrogenoides', symbol: '', oxidationNumber: '' },
    { element: 'Nitrógeno', symbol: 'N', oxidationNumber: '−3, 1, 2, 3, 4, 5' },
    { element: 'Fósforo', symbol: 'P', oxidationNumber: '−3, 1, 3, 5' },
    { element: 'Arsénico', symbol: 'As', oxidationNumber: '−3, 3, 5' },
    { element: 'Antimonio', symbol: 'Sb', oxidationNumber: ' −3,   3,  5' },
    { element: 'Bismuto', symbol: 'Bi', oxidationNumber: '3' },
    { element: 'Anfígenos', symbol: '', oxidationNumber: '' },
    { element: 'Oxígeno', symbol: 'O', oxidationNumber: '-2' },
    { element: 'Azufre', symbol: 'S', oxidationNumber: '−2, 2, 4, 6' },
    { element: 'Selenio', symbol: 'Se', oxidationNumber: '−2, 2, 4, 6' },
    { element: 'Teluro', symbol: 'Te', oxidationNumber: '−2, 2, 4, 6' },
    { element: 'Polonio', symbol: 'Po', oxidationNumber: '  −2, 2, 4' },
    { element: 'Halógenos', symbol: '', oxidationNumber: '' },
    { element: 'Fluor', symbol: 'F', oxidationNumber: '−1' },
    { element: 'Cloro', symbol: 'Cl', oxidationNumber: '−1, 1, 3, 5, 7' },
    { element: 'Bromo', symbol: 'Br', oxidationNumber: '−1, 1, 3, 5, 7' },
    { element: 'Iodo', symbol: 'I', oxidationNumber: '−1, 1,  3,  5,  7' },
    { element: 'Ástato', symbol: 'At', oxidationNumber: '−1, 1,  3,  5,  7' },
    { element: 'Gases Nobles', symbol: '', oxidationNumber: '' },
    { element: 'Helio', symbol: 'He', oxidationNumber: '' },
    { element: 'Neón', symbol: 'Ne', oxidationNumber: '' },
    { element: 'Argón', symbol: 'Ar', oxidationNumber: '' },
    { element: 'Kryptón', symbol: 'Kr', oxidationNumber: '' },
    { element: 'Xenón', symbol: 'Xe', oxidationNumber: '' },
    { element: 'Radón', symbol: 'Rn', oxidationNumber: '' },
    { element: 'Metales Pesados', symbol: '', oxidationNumber: '' },
    { element: 'Níquel', symbol: 'Ni', oxidationNumber: '2, 3' },
    { element: 'Cobre', symbol: 'Cu', oxidationNumber: '1, 2' },
    { element: 'Zinc', symbol: 'Zn', oxidationNumber: '2' },
    { element: 'Plata', symbol: 'Ag', oxidationNumber: '1' },
    { element: 'Cadmio', symbol: 'Cd', oxidationNumber: '2' },
    { element: 'Mercurio', symbol: 'Hg', oxidationNumber: '1, 2' },
    { element: 'Escandio', symbol: 'Sc', oxidationNumber: '3' },
    { element: 'Hierro', symbol: 'Fe', oxidationNumber: '2, 3' },
    { element: 'Itrio', symbol: 'Y', oxidationNumber: '3' },
    { element: 'Lantano', symbol: 'La', oxidationNumber: '3' },
    { element: 'Neodimio', symbol: 'Nd', oxidationNumber: '3' },
    { element: 'Promecio', symbol: 'Pm', oxidationNumber: '3' },
    { element: 'Samario', symbol: 'Sm', oxidationNumber: '3' },
    { element: 'Europio', symbol: 'Eu', oxidationNumber: '3' },
    { element: 'Gadolinio', symbol: 'Gd', oxidationNumber: '3' },
    { element: 'Terbio', symbol: 'Tb', oxidationNumber: '3' },
    { element: 'Disprosio', symbol: 'Dy', oxidationNumber: '3' },
    { element: 'Holmio', symbol: 'Ho', oxidationNumber: '3' },
    { element: 'Erbio', symbol: 'Er', oxidationNumber: '3' },
    { element: 'Tulio', symbol: 'Tm', oxidationNumber: '3' },
    { element: 'Iterbio', symbol: 'Yb', oxidationNumber: '3' },
    { element: 'Lutecio', symbol: 'Lu', oxidationNumber: '3' },
    { element: 'Actinio', symbol: 'Ac', oxidationNumber: '3' },
    { element: 'Fermio', symbol: 'Fm', oxidationNumber: '3' },
    { element: 'Mendelevio', symbol: 'Md', oxidationNumber: '3' },
    { element: 'Nobelio', symbol: 'No', oxidationNumber: '3' },
    { element: 'Lawrencio', symbol: 'Lr', oxidationNumber: '3' },
    { element: 'Titanio', symbol: 'Ti', oxidationNumber: '4' },
    { element: 'Manganeso', symbol: 'Mn', oxidationNumber: '2, 3' },
    { element: 'Cobalto', symbol: 'Co', oxidationNumber: '2, 3' },
    { element: 'Zirconio', symbol: 'Zr', oxidationNumber: '4' },
    { element: 'Paladio', symbol: 'Pd', oxidationNumber: '4' },
    { element: 'Cerio', symbol: 'Ce', oxidationNumber: '3, 4' },
    { element: 'Praseodimio', symbol: 'Pr', oxidationNumber: '3, 4' },
    { element: 'Hafnio', symbol: 'Hf', oxidationNumber: '4' },
    { element: 'Torio', symbol: 'Th', oxidationNumber: '4' },
    { element: 'Americio', symbol: 'Am', oxidationNumber: '3, 4, 5, 6' },
    { element: 'Curio', symbol: 'Cm', oxidationNumber: '3' },
    { element: 'Berkelio', symbol: 'Bk', oxidationNumber: '3, 4' },
    { element: 'Californio', symbol: 'Cf', oxidationNumber: '3' },
    { element: 'Einstenio', symbol: 'Es', oxidationNumber: '3' },
    { element: 'Rutherfordio', symbol: 'Rf', oxidationNumber: '4' },
    { element: 'Vanadio', symbol: 'V', oxidationNumber: '3, 5' },
    { element: 'Niobio', symbol: 'Nb', oxidationNumber: '3' },
    { element: 'Tantalio', symbol: 'Ta', oxidationNumber: '3, 5' },
    { element: 'Oro', symbol: 'Au', oxidationNumber: '1, 3' },
    { element: 'Protactinio', symbol: 'Pa', oxidationNumber: '4, 5' },
    { element: 'Dubnio', symbol: 'Db', oxidationNumber: '5' },
    { element: 'Cromo', symbol: 'Cr', oxidationNumber: '2, 3' },
    { element: 'Molibdeno', symbol: 'Mo', oxidationNumber: '6' },
    { element: 'Rutenio', symbol: 'Ru', oxidationNumber: '4' },
    { element: 'Rodio', symbol: 'Rh', oxidationNumber: '4' },
    { element: 'Wolframio', symbol: 'W', oxidationNumber: '6' },
    { element: 'Osmio', symbol: 'Os', oxidationNumber: '4' },
    { element: 'Iridio', symbol: 'Ir', oxidationNumber: '4' },
    { element: 'Platino', symbol: 'Pt', oxidationNumber: '4' },
    { element: 'Uranio', symbol: 'U', oxidationNumber: '6' },
    { element: 'Neptunio', symbol: 'Np', oxidationNumber: '3, 4, 5, 6' },
    { element: 'Plutonio', symbol: 'Pu', oxidationNumber: '3, 4, 5, 6' },
    { element: 'Seaborgio', symbol: 'Sg', oxidationNumber: '6' },
    { element: 'Tecnecio', symbol: 'Tc', oxidationNumber: '7' },
    { element: 'Renio', symbol: 'Re', oxidationNumber: '4' },
    { element: 'Bohrio', symbol: 'Bh', oxidationNumber: '7' },
    { element: 'Hassio', symbol: 'Hs', oxidationNumber: '8' },
  ]
  cardImages = [
    'Hidrogeno',
    'Oxigeno',
    'Helio',
    'Argón',
    'Kriptón',
    'Neón',
    'Xenón',
    'Radón',
    'Oganesón'
  ];

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.setupCards();
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        element: image,
        state: 'default'
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });

    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();

    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.element === cardTwo.element ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.cardImages.length) {
          const dialogRef = this.dialog.open(RestartDialogComponent, {
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }
}
