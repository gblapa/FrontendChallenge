import { Component } from '@angular/core';
import {Inject} from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-vencedor-final',
  templateUrl: './modal-vencedor-final.component.html',
  styleUrls: ['./modal-vencedor-final.component.scss']
})
export class ModalVencedorFinalComponent {


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,){

  }
}
