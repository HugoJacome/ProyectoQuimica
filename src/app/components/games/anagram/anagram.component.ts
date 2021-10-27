import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {
  @ViewChild("element") elementField: ElementRef;
  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef) {

  }
  letters: string[];
  element: string;
  message: string;
  sended: boolean = false;
  result: string;
  level: number = 1;
  words: number = 1;
  elementsFiltered: string[];
  success: boolean = false;
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
  myForm: FormGroup;
  ngOnInit(): void {
    this.randomElement();
    this.myForm = this.fb.group({
      element: ['', Validators.required],
    });
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Element', form.value.element);
    console.log(this.element);
    let element = form.value.element
    element = element.toUpperCase();
    if (element === this.element) {
      this.result = 'CORRECTO NIVEL ' + this.level + ' PALABRA ' + this.words;
      this.success = true;
      this.message = 'Validar';
      this.sended = true;
      this.words += 1;
      if (this.words === 6) {
        const dialogRef = this.dialog.open(DialogResultComponent, {
          data: {
            level: this.level,
          },
          viewContainerRef: this.viewContainerRef,
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(() => {
          this.level += 1;
          this.randomElement();
          this.sended = false;
          this.words = 1;
          this.myForm.controls['element'].setValue('');
          this.elementField.nativeElement.focus();
        });
      } else {
        this.randomElement();
        this.myForm.controls['element'].setValue('');
        this.elementField.nativeElement.focus();
      }

    } else {
      this.result = 'INCORRECTO';
      this.success = false;
      this.message = 'Validar';
      this.sended = true;
      this.myForm.controls['element'].setValue('');
    }
  }
  randomElement() {
    if (this.level == 4) {
      this.level = 1;
    }
    if (this.level == 1) {
      this.elementsFiltered = this.elements.filter(x => x.length <= 5);
      console.log(this.elementsFiltered);
    }
    if (this.level == 2) {
      this.elementsFiltered = this.elements.filter(x => x.length > 5 && x.length <= 7);
      console.log(this.elementsFiltered);
    }
    if (this.level == 3) {
      this.elementsFiltered = this.elements.filter(x => x.length > 7);
      console.log(this.elementsFiltered);
    }

    this.element = this.elementsFiltered[Math.floor(Math.random() * this.elementsFiltered.length)].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
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
  ngAfterViewInit() {
    this.elementField.nativeElement.focus();
  }
}
