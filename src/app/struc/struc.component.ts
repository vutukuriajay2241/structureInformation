import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNames, decrement, reset } from '../struc.actions';
import { StrucService} from './struc.service'
@Component({
  selector: 'app-struc',
  templateUrl: './struc.component.html',
  styleUrls: ['./struc.component.css']
})
export class StrucComponent implements OnInit {
  anatomical_structures:any= [];
  hasStructure:Boolean =false

  constructor(private store: Store<{ count: number }>, private strucService:StrucService) { 
    // this.store.dispatch(getNames());
    this.strucService.getData().subscribe((data:any)=>{
    console.log(data.data)
    data.data.map((item)=>{
      item.anatomical_structures.map((eachStructure:any)=>{
        eachStructure.id =eachStructure.id.replace(':','_')
        this.hasStructure=this.anatomical_structures.some((q)=>{
          if (eachStructure.name == q.name){
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
}
