import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwg';
  
  password = '';

  length = 0;

  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;

  passGen(){
  
    const letterChar ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChar ='0123456789';
    const symbolChar ='!@#$%^&*()_+';  
    
    let validChar = '';

    if(this.useLetters){
      console.log(this.useLetters);
      validChar += letterChar;
    }

    if(this.useNumbers){
      validChar += numberChar;
    }

    if(this.useSymbols){
      validChar += symbolChar;
    }

    let generatePassword = '';
    for(var s = 0 ; s < this.length; s++){

      //console.log(validChar.charAt(Math.round(Math.random()*validChar.length)));
      generatePassword += validChar.charAt(Math.round(Math.random()*validChar.length));

    }
    this.password = generatePassword;
    

  }

  onChangeUseLetters(){
    this.useLetters = !this.useLetters;
  }
  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
  readLength(length : any){
    // console.log(length.target.value);
    this.length = length.target.value;
  }

  toogleBool1 = true;
  toogleBool2 = true;
  toogleBool3 = true;
  changeLetter(event : any){
    if(event.target.checked){
      this.toogleBool1 = false;
    }else {
      this.toogleBool1 = true;
    }

  }
  
  changeNumber(event : any){
    if(event.target.checked){
      this.toogleBool2 = false;
    }else{
      this.toogleBool2 = true;
    }
  }

  changeSymbol(event : any){
    if(event.target.checked){
      this.toogleBool3 = false;
    }else{
      this.toogleBool3 = true;
    }
  }

}
 