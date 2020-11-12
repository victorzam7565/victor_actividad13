const amigos =[]
while(true){          
     let nombre=prompt("Ingresa la contraseña de cajero")

     if (nombre !== "1234"){
          amigos.push(nombre)
     }else{
          break;
     }
}

console.table(amigos);