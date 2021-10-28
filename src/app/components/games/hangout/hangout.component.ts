import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';

@Component({
  selector: 'app-hangout',
  templateUrl: './hangout.component.html',
  styleUrls: ['./hangout.component.scss']
})
export class HangoutComponent implements OnInit {
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.pressed = true;
    this.validateLetter(event.key);
  }
  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef) {

  }
  key: string;
  letters: string[] = [];
  lettersG: string[] = [];
  lettersW: string[] = [];
  lettersC: string[] = [];
  lettersA: string[] = [];
  element: string;
  message: string;
  pressed: boolean = false;
  result: string;
  level: number = 1;
  words: number = 1;
  elementsFiltered: string[];
  success: boolean = false;
  count = 0;
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
  ngOnInit(): void {
    this.randomElement();
  }
  onSubmit(form: FormGroup) {
    let element = form.value.element
    element = element.toUpperCase();
    // if (element === this.element) {
    //   this.result = 'CORRECTO NIVEL ' + this.level + ' PALABRA ' + this.words;
    //   this.success = true;
    //   this.message = 'Validar';
    //   this.sended = true;
    //   this.words += 1;
    //   if (this.words === 6) {
        
    //   } else {
    //     this.randomElement();
    //     this.myForm.controls['element'].setValue('');
    //     this.letterField.nativeElement.focus();
    //   }

    // } else {
    //   this.result = 'INCORRECTO';
    //   this.success = false;
    //   this.message = 'Validar';
    //   this.sended = true;
    //   this.myForm.controls['element'].setValue('');
    // }
  }
  randomElement() {
    if (this.level == 6) {
      this.level = 1;
    }
    if (this.level == 1) {
      this.elementsFiltered = this.elements.filter(x => x.length <= 5);
    }
    if (this.level == 2 || this.level == 3) {
      this.elementsFiltered = this.elements.filter(x => x.length > 5 && x.length <= 7);
    }
    if (this.level == 4 || this.level == 5) {
      this.elementsFiltered = this.elements.filter(x => x.length > 7);
    }

    this.element = this.elementsFiltered[Math.floor(Math.random() * this.elementsFiltered.length)].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    this.lettersC = this.element.toLowerCase().split('');
    this.letters = this.element.split('');
    this.letters = this.letters.fill('#');
  }
  validateLetter(letter: string) {
    let newWord = false;
    if ((this.lettersA.indexOf(letter.toLocaleUpperCase()) == -1)) {
      newWord = true;
    }
    if (newWord) {
      var indexes = this.getAllIndexes(this.lettersC, letter);
      if (indexes.length > 0) {
        this.success = true;
        indexes.forEach(index => this.letters[index] = letter.toLocaleUpperCase());
        this.result = 'CORRECTO';
        this.lettersG.push(letter.toLocaleUpperCase());
        this.lettersA.push(letter.toLocaleUpperCase());

        console.log(this.lettersC.toString);
        console.log(this.letters);
        console.log(this.element);
        let solved = this.letters.join('');
        console.log(solved);
        if (this.element === solved) {
          console.log('nivel completo');
          const dialogRef = this.dialog.open(DialogResultComponent, {
            data: {
              level: this.level,
              game: 2
            },
            viewContainerRef: this.viewContainerRef,
            disableClose: true
          });
  
          dialogRef.afterClosed().subscribe(() => {
            this.level += 1;
            this.count = 0;
            this.lettersG = [];
            this.lettersW = [];
            this.lettersA = [];
            this.pressed = false;
            this.randomElement();
          });
        }
      } else {
        this.success = false;
        this.count += 1;
        this.result = 'Error numero ' + this.count;
        this.lettersW.push(letter.toLocaleUpperCase());
        this.lettersA.push(letter.toLocaleUpperCase());
        if (this.count === 7) {
          this.level = 1;
          this.count = 0;
          this.lettersG = [];
          this.lettersW = [];
          this.lettersA = [];
          this.pressed = false;
          this.randomElement();
        }
      }
    }
  }
  getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  }
}
