"prepublishOnly": "npm run-script build",
"start": "node dist/index.js", 
----------------------------------------
-- OK
----------------------------------------
instalar visual code y plug ins de typescript
instalar node js
instalar oracle, base y cliente

hacer el parser del objeto json
hacer el get al servidor
aplicar el token deseguridad
filtrar por la cotizacion del ultimo dia

ahora obtiene la cotizacion oficial del dia anterior al actual con su fecha
----------------------------------------
-- pendiente
----------------------------------------
poner el archivo con el token afuera, para su actializacion anual
Hacer un time out de dos o tres veces al dia.
hacer un servicio que chequee o levante al del dolar, si este esta caido

hacer la insercion en oracle desde el node js



----------------------------------------
-- comandos de ejecución
---------------------------------------
npm run-script launch
tsc index.ts -w
tsc *.ts -w    //para que se ejecute en modo observador. compila los cambios automaticamente
----------------------------
