import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTeamComponent } from '../edit-team/edit-team.component';
import { Time } from 'src/app/models/time.model';
import { TimeService } from 'src/app/time.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent {
  times: Time[] = []
  timeForm: FormGroup;
  dialog: any

  constructor(private fb: FormBuilder, private _matDialog: MatDialog, private _timesService: TimeService){
    this.timeForm = this.fb.group({
      id:  0,
      nome: '',
      classificacao: '',
    });
  }

  ngOnInit() {
    this.loadTimes();
    console.log(this.times);
  }

  loadTimes() {
    this.times = this._timesService.getTimes();
  }

  limparAlista() {
    this._timesService.clearTimes();
    localStorage.removeItem('times');
    this.loadTimes();
  }

  addTime() {
    const newTime: Time = {
      id: this.times.length > 0 ? this.times[this.times.length - 1].id + 1 : 1,
      nome: this.timeForm.get('nome')?.value,
      classificacao: this.timeForm.get('classificacao')?.value,
    };

    this._timesService.addTime(newTime);
    localStorage.setItem('times', JSON.stringify(this.times));
    this.loadTimes();
    this.timeForm.reset();
  }

  openModal(time: Time) {
    this.dialog = this._matDialog.open(EditTeamComponent, {
      data: { time: time },
    });

    this.dialog.afterClosed().subscribe((updatedTime: Time) => {
      if (updatedTime) {
        this._timesService.updateTimes(updatedTime);
        localStorage.setItem('times', JSON.stringify(this.times));
        this.loadTimes();
      }
    });
  }
}
/* 
  ngOnInit() {
    this.loadTimes() 
    console.log(this.times)

  }

  loadTimes() {
    const storedTimes = localStorage.getItem('times');
    if (storedTimes) {
      this.times = JSON.parse(storedTimes);
    }
  }

  limparAlista() {
    this.times = []
    localStorage.removeItem('times'); 
  }

  addTime() {
    //debugger
    let maxId
    if(this.times.length > 0) {
       maxId = this.times[this.times.length - 1].id
    }
    else{
      maxId = 0
    }
    const newTime = {
      id: maxId + 1,
      nome: this.timeForm.get('nome')?.value,
      classificacao: this.timeForm.get('classificacao')?.value
    };

    this.times.push(newTime);

    this.timeForm.reset();

    localStorage.setItem('times', JSON.stringify(this.times));
    console.log(this.times)
  }

  openModal(time: any){
    console.log(time)
    this.dialog = this._matDialog.open(EditTeamComponent, {
      data: { time: time } // Passa o objeto time para o modal
    });

    this.dialog.afterClosed().subscribe((updatedTime: any) => {
      if (updatedTime) {
        const index = this.times.findIndex(t => t.id === updatedTime.id);
        if (index !== -1) {
          this.times[index] = updatedTime;
          localStorage.setItem('times', JSON.stringify(this.times)); // Atualiza os dados no LocalStorage
        }
      }
    });
    
  } */


