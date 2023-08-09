import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TimeService } from 'src/app/time.service';

@Component({
  selector: 'app-torneio',
  templateUrl: './torneio.component.html',
  styleUrls: ['./torneio.component.scss']
})
export class TorneioComponent {
  times: any
  vencedor1: any
  vencedor2: any
  vencedorFinal: any
  torneioForm: FormGroup
  selectedTime1: Time | null = null;
  selectedTime2: Time | null = null;
  btnRodada1 = true
  btnRodada2 = true
  /* btnRodadaFinal = false */


  constructor(private _timesService: TimeService, private fb: FormBuilder){
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
    //debugger;
    const pontuacaoTime1 = this.torneioForm.get('pontuacaoTime1')?.value;
    const pontuacaoTime2 = this.torneioForm.get('pontuacaoTime2')?.value;
  
    if (pontuacaoTime1 !== null && pontuacaoTime2 !== null) {
      if (pontuacaoTime1 > pontuacaoTime2) {
        this.vencedor1 = this.torneioForm.get('selectedTime1')?.value;
        this.btnRodada1 = false
      } else if (pontuacaoTime2 > pontuacaoTime1) {
        this.vencedor1 = this.torneioForm.get('selectedTime2')?.value;
        this.btnRodada1 = false
      } else {
        this.vencedor1 = null; // Empate
        this.btnRodada1 = true
      }
    }
    
  }

  iniciarRodada2() {
    //debugger;
    const pontuacaoTime3 = this.torneioForm.get('pontuacaoTime3')?.value;
    const pontuacaoTime4 = this.torneioForm.get('pontuacaoTime4')?.value;
  
    if (pontuacaoTime3 !== null && pontuacaoTime4 !== null) {
      if (pontuacaoTime3 > pontuacaoTime4) {
        this.vencedor2 = this.torneioForm.get('selectedTime3')?.value;
        this.btnRodada2 = false
      } else if (pontuacaoTime4 > pontuacaoTime3) {
        this.vencedor2 = this.torneioForm.get('selectedTime4')?.value;
        this.btnRodada2 = false
      } else {
        this.vencedor2 = null; // Empate
        this.btnRodada2 = true
      }
    }
    
  }

  iniciarRodadaFinal() {
    const pontuacaoRodada1 = this.torneioForm.get('pontuacaoRodada1')?.value;
    const pontuacaoRodada2 = this.torneioForm.get('pontuacaoRodada2')?.value;
  
    if (pontuacaoRodada1 !== null && pontuacaoRodada2 !== null) {
      if (pontuacaoRodada1 > pontuacaoRodada2) {
        this.vencedorFinal = this.torneioForm.get('timeVencedor1')?.value;
        /* this.btnRodadaFinal = false */
      } else if (pontuacaoRodada2 > pontuacaoRodada1) {
        this.vencedorFinal = this.torneioForm.get('timeVencedor2')?.value;
        /* this.btnRodadaFinal = false */
      } else {
        this.vencedorFinal = null; // Empate
        /* this.btnRodadaFinal = true */
      }
    }
  }

}
