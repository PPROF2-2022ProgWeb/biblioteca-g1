import { Component, OnInit } from '@angular/core';
import { LendingModel } from 'src/app/models/lending.model';
import { LendingService } from 'src/app/services/lending.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  prestamos:LendingModel[];

  constructor(private servicioL:LendingService) { }

  ngOnInit(): void {
    //this.obtenerReporte();
  }

  obtenerReporte(){
    this.servicioL.obtenerReporte().subscribe((dato)=>{
      this.prestamos=dato;
    }
      )
  }


}
