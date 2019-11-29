function dane1(){
    let a = document.getElementById('liczba1').value;
    let b = document.getElementById('liczba2').value;
    let x = document.getElementById('znak').value;
    

    if (x=="+"){
      document.getElementById('wynik').innerHTML=parseInt(a)+parseInt(b);
    }
    else if (x=="-"){
      document.getElementById('wynik').innerHTML=parseInt(a)-parseInt(b);
    }
    else if (x=="*"){
      document.getElementById('wynik').innerHTML=parseInt(a)*parseInt(b);
    }
    else if (x=="/"){
      document.getElementById('wynik').innerHTML=parseInt(a)/parseInt(b);
    }
  }


  //fun note - następnego dnia i po kawie, rozwiązałem dwa problemy(wynik wyświetlany tylko przez 1 sek i sumowanie w string a nie number) z pomocą satackoverflow w 6 min. Wcześniej nie mogłem tego ogarnąć przez 2h :v


  
 

