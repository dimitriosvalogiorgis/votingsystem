import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { matSnackBarAnimations } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar'
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   users:any
    username:any
    password:any
  constructor(private router:Router, private snackBar:MatSnackBar) {

    this.users = [
      {username: 'Vasilis', password:'Georgopoulos', county:'Arkadias'},
      {username: 'Xaralampos', password:'Makris', county:'Artas'}
    ];

  }

  login(){
    var exists=this.users.filter(e=> e.username ==this.username && e.password==this.password)
      console.log(exists)

    //console.log(userobj)
    if(exists.length != 0){
      this.router.navigate(["/political-party", {user:exists[0].username,county:exists[0].county}])
    } else{
      this.snackBar.open("Invalid Username or Password", "Ok", {duration:2000})
    }
  }


  ngOnInit(): void {
  }



}
