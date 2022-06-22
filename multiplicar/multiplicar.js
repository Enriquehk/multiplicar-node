const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

      if (!Number(base)) {
          reject(`El valor introducido ${ base } no es un número`);
          return;
        }

      let data = "";
      
      for (let i = 0; i <= limite; i++) {
          data += `${base} * ${i} = ${base * i} \n`;
      }
      
      console.log(data);
};
  
let crearArchivo = ( base, limite ) => {

  return new Promise((resolve, reject) => {

      if (!Number(base)) {
          reject(`El valor introducido ${ base } no es un número`);
          return;
        }

      let data = "";
      
      for (let i = 1; i <= limite; i++) {
          data += `${base} * ${i} = ${base * i} \n`;
      }
      
      fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
      
        if (err) 
          reject( err );
        else 
          resolve( `tabla-${base}.txt`);
      
        console.log(`El archivo  ha sido creado`);
      });
  });
};

module.exports = {
  crearArchivo,
  listarTabla
}


