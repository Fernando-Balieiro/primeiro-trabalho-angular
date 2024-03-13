import {Component, model, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'primeiro-componente',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent implements OnInit{
  ngOnInit(): void {
  }

  valorDigitado: string = ""
  mostrarValor: boolean = false
  btnIsVermelho: boolean = false

  atualizarParagrafo(): void {
    this.valorDigitado = (<HTMLInputElement>document.getElementById("valor")).value;
    this.mostrarValor = true;
  }

  mudarCorBtn(): void {
    this.btnIsVermelho = true;
  }
}
