import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTeamComponent } from '../edit-team/edit-team.component';
import { Time } from 'src/app/models/time.model';
import { TimeService } from 'src/app/time.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  times: Time[] = []
  timeForm: FormGroup;
  dialog: any

  constructor(private fb: FormBuilder, private _matDialog: MatDialog, private _timesService: TimeService, private _snackBar: MatSnackBar){
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
    this._snackBar.open('Time Adicionado com sucesso', 'Fechar', {
      duration: 3000,
      panelClass: ['sucess-snackbar'], 
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition, 
    });
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



