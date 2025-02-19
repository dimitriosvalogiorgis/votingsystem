import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-polpar',
  templateUrl: './polpar.component.html',
  styleUrls: ['./polpar.component.scss']
})
export class PolparComponent implements OnInit {
  user:any
  county:any
  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>
  {
    var res1:any=res
    this.user=res1.params.user
    this.county=res1.params.county
  })

  }

}
