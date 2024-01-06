import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{

  constructor(private router:Router){

  }

  ngOnInit(): void {

  }


  navigateFun(url:string){
    this.router.navigateByUrl(url)
    this.onActivate()
  }

  onActivate() {

    window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
     });
 }

}
