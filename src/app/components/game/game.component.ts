import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardData, ElementData } from '../../models/card-data.model';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  familySelected: string;
  selected: boolean = false;
  level: number = 1;
  families: string[] = ['Alcalinos', 'Alcalinos Térreos', 'Boroides', 'Carbonoides', 'Nitrogenoides', 'Anfígenos', 'Halógenos', 'Gases Nobles', 'Metales Pesados'];
  elementsTotal: ElementData[] = [
    { element: 'Hidrógeno', symbol: 'H', oxidationNumber: '−1, 1', family: 'Alcalinos' },
    { element: 'Litio', symbol: 'Li', oxidationNumber: '1', family: 'Alcalinos' },
    { element: 'Sodio', symbol: 'Na', oxidationNumber: '1', family: 'Alcalinos' },
    { element: 'Potasio', symbol: 'K', oxidationNumber: '1', family: 'Alcalinos' },
    { element: 'Rubidio', symbol: 'Rb', oxidationNumber: '1', family: 'Alcalinos' },
    { element: 'Cesio', symbol: 'Cs', oxidationNumber: '1', family: 'Alcalinos' },
    { element: 'Francio', symbol: 'Fr', oxidationNumber: '1', family: 'Alcalinos' },
    { element: 'Berilio', symbol: 'Be', oxidationNumber: '2', family: 'Alcalinos Térreos' },
    { element: 'Magnesio', symbol: 'Mg', oxidationNumber: '2', family: 'Alcalinos Térreos' },
    { element: 'Calcio', symbol: 'Ca', oxidationNumber: '2', family: 'Alcalinos Térreos' },
    { element: 'Estroncio', symbol: 'Sr', oxidationNumber: '2', family: 'Alcalinos Térreos' },
    { element: 'Bario', symbol: 'Ba', oxidationNumber: '2', family: 'Alcalinos Térreos' },
    { element: 'Radio', symbol: 'Ra', oxidationNumber: '2', family: 'Alcalinos Térreos' },
    { element: 'Boro', symbol: 'B', oxidationNumber: '-3, 3', family: 'Boroides' },
    { element: 'Aluminio', symbol: 'Al', oxidationNumber: '3', family: 'Boroides' },
    { element: 'Galio', symbol: 'Ga', oxidationNumber: '3', family: 'Boroides' },
    { element: 'Indio', symbol: 'In', oxidationNumber: '3', family: 'Boroides' },
    { element: 'Talio', symbol: 'Tl', oxidationNumber: '1, 3', family: 'Boroides' },
    { element: 'Carbono', symbol: 'C', oxidationNumber: '−4, 2, 4', family: 'Carbonoides' },
    { element: 'Silicio', symbol: 'Si', oxidationNumber: '−4, 4', family: 'Carbonoides' },
    { element: 'Germanio', symbol: 'Ge', oxidationNumber: '−4, 4', family: 'Carbonoides' },
    { element: 'Estaño', symbol: 'Sn', oxidationNumber: '2,  4', family: 'Carbonoides' },
    { element: 'Plomo', symbol: 'Pb', oxidationNumber: '2, 4', family: 'Carbonoides' },
    { element: 'Nitrógeno', symbol: 'N', oxidationNumber: '−3, 1, 2, 3, 4, 5', family: 'Nitrogenoides' },
    { element: 'Fósforo', symbol: 'P', oxidationNumber: '−3, 1, 3, 5', family: 'Nitrogenoides' },
    { element: 'Arsénico', symbol: 'As', oxidationNumber: '−3, 3, 5', family: 'Nitrogenoides' },
    { element: 'Antimonio', symbol: 'Sb', oxidationNumber: ' −3,   3,  5', family: 'Nitrogenoides' },
    { element: 'Bismuto', symbol: 'Bi', oxidationNumber: '3', family: 'Nitrogenoides' },
    { element: 'Oxígeno', symbol: 'O', oxidationNumber: '-2', family: 'Anfígenos' },
    { element: 'Azufre', symbol: 'S', oxidationNumber: '−2, 2, 4, 6', family: 'Anfígenos' },
    { element: 'Selenio', symbol: 'Se', oxidationNumber: '−2, 2, 4, 6', family: 'Anfígenos' },
    { element: 'Teluro', symbol: 'Te', oxidationNumber: '−2, 2, 4, 6', family: 'Anfígenos' },
    { element: 'Polonio', symbol: 'Po', oxidationNumber: '  −2, 2, 4', family: 'Anfígenos' },
    { element: 'Fluor', symbol: 'F', oxidationNumber: '−1', family: 'Halógenos' },
    { element: 'Cloro', symbol: 'Cl', oxidationNumber: '−1, 1, 3, 5, 7', family: 'Halógenos' },
    { element: 'Bromo', symbol: 'Br', oxidationNumber: '−1, 1, 3, 5, 7', family: 'Halógenos' },
    { element: 'Iodo', symbol: 'I', oxidationNumber: '−1, 1,  3,  5,  7', family: 'Halógenos' },
    { element: 'Ástato', symbol: 'At', oxidationNumber: '−1, 1,  3,  5,  7', family: 'Halógenos' },
    { element: 'Helio', symbol: 'He', oxidationNumber: '', family: 'Gases Nobles' },
    { element: 'Neón', symbol: 'Ne', oxidationNumber: '', family: 'Gases Nobles' },
    { element: 'Argón', symbol: 'Ar', oxidationNumber: '', family: 'Gases Nobles' },
    { element: 'Kryptón', symbol: 'Kr', oxidationNumber: '', family: 'Gases Nobles' },
    { element: 'Xenón', symbol: 'Xe', oxidationNumber: '', family: 'Gases Nobles' },
    { element: 'Radón', symbol: 'Rn', oxidationNumber: '', family: 'Gases Nobles' },
    { element: 'Níquel', symbol: 'Ni', oxidationNumber: '2, 3', family: 'Metales Pesados' },
    { element: 'Cobre', symbol: 'Cu', oxidationNumber: '1, 2', family: 'Metales Pesados' },
    { element: 'Zinc', symbol: 'Zn', oxidationNumber: '2', family: 'Metales Pesados' },
    { element: 'Plata', symbol: 'Ag', oxidationNumber: '1', family: 'Metales Pesados' },
    { element: 'Cadmio', symbol: 'Cd', oxidationNumber: '2', family: 'Metales Pesados' },
    { element: 'Mercurio', symbol: 'Hg', oxidationNumber: '1, 2', family: 'Metales Pesados' },
    { element: 'Escandio', symbol: 'Sc', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Hierro', symbol: 'Fe', oxidationNumber: '2, 3', family: 'Metales Pesados' },
    { element: 'Itrio', symbol: 'Y', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Lantano', symbol: 'La', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Neodimio', symbol: 'Nd', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Promecio', symbol: 'Pm', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Samario', symbol: 'Sm', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Europio', symbol: 'Eu', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Gadolinio', symbol: 'Gd', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Terbio', symbol: 'Tb', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Disprosio', symbol: 'Dy', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Holmio', symbol: 'Ho', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Erbio', symbol: 'Er', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Tulio', symbol: 'Tm', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Iterbio', symbol: 'Yb', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Lutecio', symbol: 'Lu', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Actinio', symbol: 'Ac', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Fermio', symbol: 'Fm', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Mendelevio', symbol: 'Md', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Nobelio', symbol: 'No', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Lawrencio', symbol: 'Lr', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Titanio', symbol: 'Ti', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Manganeso', symbol: 'Mn', oxidationNumber: '2, 3', family: 'Metales Pesados' },
    { element: 'Cobalto', symbol: 'Co', oxidationNumber: '2, 3', family: 'Metales Pesados' },
    { element: 'Zirconio', symbol: 'Zr', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Paladio', symbol: 'Pd', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Cerio', symbol: 'Ce', oxidationNumber: '3, 4', family: 'Metales Pesados' },
    { element: 'Praseodimio', symbol: 'Pr', oxidationNumber: '3, 4', family: 'Metales Pesados' },
    { element: 'Hafnio', symbol: 'Hf', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Torio', symbol: 'Th', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Americio', symbol: 'Am', oxidationNumber: '3, 4, 5, 6', family: 'Metales Pesados' },
    { element: 'Curio', symbol: 'Cm', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Berkelio', symbol: 'Bk', oxidationNumber: '3, 4', family: 'Metales Pesados' },
    { element: 'Californio', symbol: 'Cf', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Einstenio', symbol: 'Es', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Rutherfordio', symbol: 'Rf', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Vanadio', symbol: 'V', oxidationNumber: '3, 5', family: 'Metales Pesados' },
    { element: 'Niobio', symbol: 'Nb', oxidationNumber: '3', family: 'Metales Pesados' },
    { element: 'Tantalio', symbol: 'Ta', oxidationNumber: '3, 5', family: 'Metales Pesados' },
    { element: 'Oro', symbol: 'Au', oxidationNumber: '1, 3', family: 'Metales Pesados' },
    { element: 'Protactinio', symbol: 'Pa', oxidationNumber: '4, 5', family: 'Metales Pesados' },
    { element: 'Dubnio', symbol: 'Db', oxidationNumber: '5', family: 'Metales Pesados' },
    { element: 'Cromo', symbol: 'Cr', oxidationNumber: '2, 3', family: 'Metales Pesados' },
    { element: 'Molibdeno', symbol: 'Mo', oxidationNumber: '6', family: 'Metales Pesados' },
    { element: 'Rutenio', symbol: 'Ru', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Rodio', symbol: 'Rh', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Wolframio', symbol: 'W', oxidationNumber: '6', family: 'Metales Pesados' },
    { element: 'Osmio', symbol: 'Os', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Iridio', symbol: 'Ir', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Platino', symbol: 'Pt', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Uranio', symbol: 'U', oxidationNumber: '6', family: 'Metales Pesados' },
    { element: 'Neptunio', symbol: 'Np', oxidationNumber: '3, 4, 5, 6', family: 'Metales Pesados' },
    { element: 'Plutonio', symbol: 'Pu', oxidationNumber: '3, 4, 5, 6', family: 'Metales Pesados' },
    { element: 'Seaborgio', symbol: 'Sg', oxidationNumber: '6', family: 'Metales Pesados' },
    { element: 'Tecnecio', symbol: 'Tc', oxidationNumber: '7', family: 'Metales Pesados' },
    { element: 'Renio', symbol: 'Re', oxidationNumber: '4', family: 'Metales Pesados' },
    { element: 'Bohrio', symbol: 'Bh', oxidationNumber: '7', family: 'Metales Pesados' },
    { element: 'Hassio', symbol: 'Hs', oxidationNumber: '8', family: 'Metales Pesados' }
  ]
  elements: ElementData[] = []
  selectedElements: ElementData[];

  cards: ElementData[] = [];

  flippedCards: ElementData[] = [];

  matchedCount = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef) {

  }

  ngOnInit(): void {

  }

  unselect(){
    this.selected = false;
  }
  setupCards(): void {
    this.cards = [];
    if (this.elements.length > 14) {
      this.selectedElements = this.elements.sort(() => Math.random() - Math.random()).slice(0, 14)
    } else {
      this.selectedElements = this.elements;
    }
    this.selectedElements = this.selectedElements.slice(0, 3);
    this.selectedElements.forEach((item) => {
      let cardData: ElementData = {
        element: item.element,
        symbol: item.symbol,
        oxidationNumber: item.oxidationNumber,
        state: 'default'
      };
      if (this.level == 1) {
        cardData.info = item.element;
        this.cards.push({ ...cardData });
        cardData.info = item.symbol;
        this.cards.push({ ...cardData });
      }
      if (this.level == 2) {
        cardData.type = "element";
        cardData.info = item.element;
        this.cards.push({ ...cardData });
        cardData.type = "number";
        cardData.info = item.oxidationNumber;
        this.cards.push({ ...cardData });
      }
      if (this.level == 3) {
        cardData.type = "symbol";
        cardData.info = item.symbol;
        this.cards.push({ ...cardData });
        cardData.type = "number";
        cardData.info = item.oxidationNumber;
        this.cards.push({ ...cardData });
      }
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
      let matched;
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      if (this.level == 1) {
        const nextState = cardOne.element === cardTwo.element ? 'matched' : 'default';
        cardOne.state = cardTwo.state = nextState;
        matched = nextState;
      } else {

        const nextState = (cardOne.oxidationNumber === cardTwo.oxidationNumber) && (cardOne.type !== cardTwo.type) ? 'matched' : 'default';
        cardOne.state = cardTwo.state = nextState;
        matched = nextState;
      }
      this.flippedCards = [];

      if (matched === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.selectedElements.length) {
          const dialogRef = this.dialog.open(RestartDialogComponent, {
            data: {
              level: this.level,
              familySelected: this.familySelected
            },
            viewContainerRef: this.viewContainerRef,
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(() => {
            this.level += 1;
            this.restart();
          });
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    if (this.level == 4) {
      this.level = 1;
      this.selected = false;
    }
    this.setupCards();
  }
  selectFamily(family: string) {
    if (family !== 'Aleatorios') {
      this.elements = this.elementsTotal.filter(element => element.family == family);
    } else {
      this.elements = this.elementsTotal;
    }
    this.familySelected = family;
    this.selected = true;
    this.setupCards();
  }
}
