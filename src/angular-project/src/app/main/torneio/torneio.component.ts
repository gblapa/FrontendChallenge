import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TimeService } from 'src/app/time.service';
import { ModalVencedorFinalComponent } from '../modal-vencedor-final/modal-vencedor-final.component';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition  } from '@angular/material/snack-bar';

@Component({
  selector: 'app-torneio',
  templateUrl: './torneio.component.html',
  styleUrls: ['./torneio.component.scss']
})
export class TorneioComponent {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  times: any
  vencedor1: any
  vencedor2: any
  vencedorFinal: any
  torneioForm: FormGroup
  selectedTime1: Time | null = null;
  selectedTime2: Time | null = null;
  btnRodada1 = true
  btnRodada2 = true
  dialog: any
 

  constructor(private _timesService: TimeService, private fb: FormBuilder, private _matDialog: MatDialog, private _snackBar: MatSnackBar){

    this.torneioForm = this.fb.group({
      pontuacaoTime1:  0,
      pontuacaoTime2: 0,
      pontuacaoTime3:  0,
      pontuacaoTime4: 0,
      pontuacaoRodada1: 0,
      pontuacaoRodada2: 0,
      selectedTime1: null,
      selectedTime2: null,
      selectedTime3: null,
      selectedTime4: null,
      timeVencedor1 : null,
      timeVencedor2 : null,
    });
  }

  ngOnInit() {
    this.times = this._timesService.times
    console.log(this.times)
  }


  iniciarRodada1() {

    const pontuacaoTime1 = this.torneioForm.get('pontuacaoTime1')?.value;
    const pontuacaoTime2 = this.torneioForm.get('pontuacaoTime2')?.value;
  
    if (this.torneioForm.get('selectedTime1')?.value !== null && this.torneioForm.get('selectedTime2')?.value !== null) {
      if (pontuacaoTime1 > pontuacaoTime2) {
        this.vencedor1 = this.torneioForm.get('selectedTime1')?.value;
        this.btnRodada1 = false
      } else if (pontuacaoTime2 > pontuacaoTime1) {
        this.vencedor1 = this.torneioForm.get('selectedTime2')?.value;
        this.btnRodada1 = false
      } else {
        this.vencedor1 = null; 
        this.btnRodada1 = true
        this._snackBar.open('As pontuações não podem ser iguais', 'Fechar', {
          duration: 3000,
          panelClass: ['warning-snackbar'], 
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition, 
        });
      }
    }
    
  }

  iniciarRodada2() {
    //debugger;
    const pontuacaoTime3 = this.torneioForm.get('pontuacaoTime3')?.value;
    const pontuacaoTime4 = this.torneioForm.get('pontuacaoTime4')?.value;
  
    if (this.torneioForm.get('selectedTime3')?.value !== null && this.torneioForm.get('selectedTime4')?.value !== null) {
      if (pontuacaoTime3 > pontuacaoTime4) {
        this.vencedor2 = this.torneioForm.get('selectedTime3')?.value;
        this.btnRodada2 = false
      } else if (pontuacaoTime4 > pontuacaoTime3) {
        this.vencedor2 = this.torneioForm.get('selectedTime4')?.value;
        this.btnRodada2 = false
      } else {
        this.vencedor2 = null; 
        this.btnRodada2 = true
        this._snackBar.open('As pontuações não podem ser iguais', 'Fechar', {
          duration: 3000,
          panelClass: ['warning-snackbar'], 
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition, 
        });
      }
    }
    
  }

  iniciarRodadaFinal() {
    const pontuacaoRodada1 = this.torneioForm.get('pontuacaoRodada1')?.value;
    const pontuacaoRodada2 = this.torneioForm.get('pontuacaoRodada2')?.value;
  
    if (pontuacaoRodada1 !== null && pontuacaoRodada2 !== null) {
      if (pontuacaoRodada1 > pontuacaoRodada2) {
        this.vencedorFinal = this.torneioForm.get('timeVencedor1')?.value;
       
      } else if (pontuacaoRodada2 > pontuacaoRodada1) {
        this.vencedorFinal = this.torneioForm.get('timeVencedor2')?.value;
        
      } else {
        this.vencedorFinal = null; 
        this._snackBar.open('As pontuações não podem ser iguais', 'Fechar', {
          duration: 3000,
          panelClass: ['warning-snackbar'], 
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition, 
        });
       
      }
    }
    this.dialog = this._matDialog.open(ModalVencedorFinalComponent, {
      data: { vencedorFinal: this.vencedorFinal  },
    });
  }

}
