import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectionDialogComponent } from './selection-dialog/selection-dialog.component';

@Component({
  selector: 'app-riddles',
  templateUrl: './riddles.component.html',
  styleUrls: ['./riddles.component.scss']
})
export class RiddlesComponent implements OnInit {

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
  constructor(private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef) {

  }
  ngOnInit(): void {
  }
  selectElement() {
    this.element = this.elements[Math.floor(Math.random()*this.elements.length)];
    console.log(this.element);
    const dialogRef = this.dialog.open(SelectionDialogComponent, {
      height: '180px',
      width: '250px',
      data: {
        element: this.element
      },
      viewContainerRef: this.viewContainerRef,
      disableClose: true
    });
  }
}
