import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit {

  formDev:FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formDev=formBuilder.group({
      id:[0],
      user_id:[,Validators.required],
      book_id:[,Validators.required],
      date_out:['',Validators.required],
      date_return:['',Validators.required],
    });

  }

  

  ngOnInit(): void {
  }

}
