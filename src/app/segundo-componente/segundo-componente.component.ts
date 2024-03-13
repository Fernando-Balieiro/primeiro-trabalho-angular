import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'segundo-componente',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor() {
  }

  valorDigitado: string = ""

  changeOnType(): void {
    this.valorDigitado = (<HTMLInputElement>document.getElementById("valor")).value
  }
}
