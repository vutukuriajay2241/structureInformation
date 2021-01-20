import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNames, decrement, reset } from '../struc.actions';
import { StrucService} from './struc.service'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogDataDialogComponent} from '../dialog-data-dialog/dialog-data-dialog.component'
@Component({
  selector: 'app-struc',
  templateUrl: './struc.component.html',
  styleUrls: ['./struc.component.css']
})
export class StrucComponent implements OnInit {
  anatomical_structures:any= [];
  hasStructure:Boolean =false
  details:any;
  constructor(public dialog: MatDialog,private store: Store<{ count: number }>, private strucService:StrucService) { 
    // this.store.dispatch(getNames());
    this.strucService.getData().subscribe((data:any)=>{
    console.log(data.data)
    data.data.map((item)=>{
      item.anatomical_structures.map((eachStructure:any)=>{
        eachStructure.id =eachStructure.id.replace(':','_')
        this.hasStructure=this.anatomical_structures.some((eachName)=>{
          if (eachStructure.name == eachName.name){
            return true
          }
          else{
            return false
          }
          
        })
        if (!this.hasStructure )
          this.anatomical_structures.push(eachStructure)

      })
      console.log(this.anatomical_structures)
    })
    // this.anatomical_structures = data.data[0].anatomical_structures;

    })
  }

  ngOnInit(): void {
  }
 increment() {
    
  }
  getDetails(id){
    if (id.has('_')){
    this.strucService.getDetails(id).subscribe((data:any)=>{
      this.details.iri =data._embedded.terms[0].iri;
      this.details.Name= data._embedded.terms[0].label;
      this.details.description= data._embedded.terms[0].description;
      this.details.obo_id = data._embedded.terms[0].obo_id;

    })
    }
    this.dialog.open(DialogDataDialogComponent, {
      data: this.details
    });

  }
}
