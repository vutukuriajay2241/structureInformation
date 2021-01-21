import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-data-dialog',
  templateUrl: './dialog-data-dialog.component.html',
  styleUrls: ['./dialog-data-dialog.component.css']
})
export class DialogDataDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data:any) { 
      console.log(data)
  }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
}
