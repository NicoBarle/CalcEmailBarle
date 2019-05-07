import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myForm: FormGroup;
  risultato: Number;
  num_vett: number[];

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'n1': ['1', Validators.required], 'n2': ['2', Validators.required]
    });
  }

  somma(): boolean {
   this.risultato = Number(this.myForm.controls['n1'].value) + Number(this.myForm.controls['n2'].value);
   this.fillVect(Number(this.myForm.controls['n1'].value), Number(this.myForm.controls['n2'].value));
   return false;
  }

  sottr(): boolean {
   this.risultato = Number(this.myForm.controls['n1'].value) - Number(this.myForm.controls['n2'].value);
   this.fillVect(Number(this.myForm.controls['n1'].value), Number(this.myForm.controls['n2'].value));
   return false;
  }

  molt(): boolean {
   this.risultato = Number(this.myForm.controls['n1'].value) * Number(this.myForm.controls['n2'].value);
   this.fillVect(Number(this.myForm.controls['n1'].value), Number(this.myForm.controls['n2'].value));
   return false;
  }
  
  div(): boolean {
   this.risultato = Number(this.myForm.controls['n1'].value) / Number(this.myForm.controls['n2'].value);
   this.fillVect(Number(this.myForm.controls['n1'].value), Number(this.myForm.controls['n2'].value));
   return false;
  }
    
    fillVect(n1: number, n2:number)
    {
        //Se n2< n1 li scambio
        if (Number(this.myForm.controls['n1'].value) < Number(this.myForm.controls['n2'].value)) {
            let a = Number(this.myForm.controls['n2'].value);
            n2 = n1;
            n2= a;
        }
        this.num_vett = new Array<number>();
        for(let i = n1; i <=n2; i++)
        {
            console.log(i);
            this.num_vett.push(i);
        }
    }

}