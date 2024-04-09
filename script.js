let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))


function calculos(){
  if(n1 && n2) {
    let sum = (n1 + n2)
    alert(`A soma dos dois números é ${sum}`)
    let sub = (n1 - n2)
    alert(`A subtração dos dois números é ${sub}`)
    let mul = (n1 * n2)
    alert(`A multiplicação dos dois números é ${mul}`)
    let div = (n1 / n2)
    alert(`A divisão dos dois números é ${div}`)
    let verify = ""
    if(sum % 2 == 0) {
      verify = "par"
    }else{
      verify = "impar"
    }
    alert(`A soma dos dois números é ${verify}`)
    
    let verifyEquals = ""
    if(n1 == n2){
      verifyEquals = "Iguais"
    }else {
      verifyEquals = "Diferentes"
    }
    alert(`Os números inseridos são ${verifyEquals}`)
  }
}

calculos()