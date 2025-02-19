import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar'
import {Location} from '@angular/common'

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  Arkadias=["Markos Vasileiou", "Manolis Papakonstantinou", "Stelios Karakapzoudis", "Antonios Tzikos", "Vlasis Papavlasopoulos"]
  Artas=["Vasilis Gerontidis", "Nick Germanos", "Manos Mikroutsikos", "Konstantinos Refanos", "Stefanos Xios"]
  count=0
  truthy=[]
  selectedCounty:any

  constructor(private route:ActivatedRoute, private snackBar:MatSnackBar, private location:Location) {

  }

  log(event,i){
    if(event.checked==true){
      this.count++
      this.truthy[i]=true
    }
    else{
      this.count--
      this.truthy[i]=false
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{

      switch (params['county']) {
        case "Arkadias":
          this.selectedCounty=this.Arkadias

          break;
        case "Artas":
          this.selectedCounty=this.Artas
          break;

        default:
          break;
      }
      this.truthy.length=this.selectedCounty.length
    this.truthy.fill(false)
  })

  }
  vote(){
    this.snackBar.open("Voting Process Complete", "OK", {duration:2000})
  }
  back(){
    this.location.back()
  }
}
