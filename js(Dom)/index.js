function idade(){
    var x = document.frms1.age.value;
    if(x>=3 && x<=10){
        alert("Faixa etária: 3 a 10 anos")
    } else if(x>=11 && x<=25){
        alert("Faixa etária: 11 a 25 anos")
    }else if(x>=36 && x<=55){
        alert("Faixa etária: 36 a 55 anos")
    }else if(x>=56 && x<=100){
        alert("Faixa etária: 56 a 100 anos")
    }
}

function logar(){
    if(document.getElementById("user").value!="" && document.getElementById("password").value!=""){
        alert("Login Realizado!!")
    }else{
        alert("Campos Vazios!!!")
    }
}

function concatenacao(){
    let a = document.getElementById("nome").value;
    let b = document.getElementById("civil").value;
    let c = document.getElementById("idade").value;
    let d = "Nome:"+a+"// Estado Civil: "+b+"// Faixa etaria: "+c;
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    alert(d)
}