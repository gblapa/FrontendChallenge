import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Inject} from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent {
  team: any;
  timeEditForm: FormGroup;
  aux: any[] = []

  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  private fb: FormBuilder,private dialog: MatDialogRef<EditTeamComponent>){
    this.timeEditForm = this.fb.group({
      id:  0,
      nome: '',
      classificacao: '',
    });

    this.team = data.time

    console.log(this.team)
  }

  ngOnInit(){
    console.log(this.team);
  }

  update() {
    const timeEditado = {
        id: this.data.time.id,
        nome: this.timeEditForm.get('nome')?.value,
        classificacao: this.timeEditForm.get('classificacao')?.value
    }

    //this.team.push(timeEditado);

    this.dialog.close(timeEditado);
  }

}
