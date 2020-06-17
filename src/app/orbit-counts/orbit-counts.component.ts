import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  
  @Input() satellites: Satellite[];

  

  constructor() { }

  ngOnInit() {
  }

  satelliteTypes: string [] = ["Space Debris", "Communication", "Probe", "Positioning", "Space Station", "Telescope"];

  containsType(typeName: string): number {
    let emptyArray = [];
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === typeName.toLowerCase()) {
        emptyArray.push(this.satellites[i]);
      } 
    
    } return emptyArray.length;
        
  }  
    
  
   

}
