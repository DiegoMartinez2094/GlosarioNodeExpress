/** QUÉ ES NODEJS? 
 * 
 *  Es un compilador de codigo para JavaScript que utiliza el motor v8 de Google Chrome
 * este compilador tiene la ventaja de poder ejecutar codigo Js de lado del servidor lo que 
 * nos permite realizar aplicaciones de servidor y realizar tareas del lado del servidor como 
 * manipular archivos y bases de datos.
*/

/**
 * Utiliza modelo E/S sin bloqueo 
 * Basado en eventos
 * maneja muchas solicitudes simultaneamente
 * ideal para aplicaciones de alto rendimiento
 * Administrador de paquete Npm (node package manager)
 */

/**PROCESO DE FUNCIONALIDAD NODE.JS 
 * 
 * INICIACION:Cuando se inicia la ejecucion se cargan modulos necesarios
 * se cargan las variables de entorno 
 * y los parametros de ejecucion.
 * 
 * EVENT LOOP MANEJO DE EVENTOS: El bucle de eventos es el responsable de recibir y distribuir
 * eventos en el programa  Node.js espera eventos y ejecuta devoluviones 
 * 
 * GESTION DE SOLICITUDES:Cuando llega una solictud se desencadena un evento
 * 
 * OPERACIONES E/S NO BLOQUEANTES: lo que significa que puede iniciar una operacion como leer o
 * escribir en una archivo, hacer una solicitud a una base de datos o envar una solicitud HTTP y continuar
 * con otras tareas  si esperar que se completen las anteriores
 * 
 * DEVOLUCIONES DE LLAMADA(CALLBACK): son funciones que se registran para ejecutarse después de que se compete 
 * una operacion asincronica, esto permite que node maneje multiples solicitudes de operaciones eficientemente.
 * 
 * MODULOS Y NPM:Utiliza un sistema de modulos basado en commonJs, lo que permite lamodularidad y la reutilizaciónde codigo
 * NPM: es un administrador depaquetes que facilita la instalacion, actualizacion y administracion de bibliotecas y modulos de terceros
*/

/**
 * QUE ES NVM? (NODE VERSION MANAGER)
 * permite administrar varias versiones de node(instalar, actualizar, etc.)
 * 
 * Comandos basicos de nvm: 
 * nvm check: verifica el proceso de nvm4w en buscade problemas
 * nvm current: muestra la verion activa
 * nvm install(versio..): instala la version de node que quiere
 * nvm list available: lista de las versiones de node que tiene instaladas
 * nvm on: habilita node
 * nvm of: deshabilita el node
 * nvm uninstall(versio): desinatala la version que quieras
 * nvm use (version): utiliza la version de node que quieras
 * nvm version: muestra la version de node que se está usando
 */

/** THUNDER CLIENT:
 * 
 * Es una herramienta  extension de visual que te permite realizar solicitudes HTTP y probar servicios web 
 * dirtectamente desde el editor de codigo  
 */


/** EJECUTAR  UN ARCHIVO EN NODE.JS
 * 
 * Para ejecutar un archivo solo basta con abrir la terminal y escribir el comando node (nombre del archivo que vas a correr)
 * importante(debe ser un archivo tipo .js)
 */

/**Diferencias de Apis Globales JavaScript en Node
 * 
 * En JavaScript, la palabra clave "window" se utiliza en el entorno de un navegador 
 * web para hacer referencia al objeto global que representa la ventana del navegador 
 * en Node.js, no existe un objeto "window". En su lugar, Node.js utiliza el objeto "global" como su objeto global proporcionando
 *  un ámbito global para variables, funciones y objetos en una aplicación de Node.js. A
 */

/**PROCESS
 * En Node.js, el objeto process es un objeto global que proporciona información y control sobre el proceso actual en ejecución. Es una instancia de la clase  
 * EventEmitter, lo que significa que puede emitir y escuchar eventos.
 */

/**SISTEMA DE MODULOS
 * 
 * El sistema de módulos de Node.js se basa en el concepto de módulos, que son unidades de código independientes que encapsulan funcionalidades específicas. 
 * Cada módulo tiene su propio ámbito y puede exportar funciones, objetos o variables para ser utilizados por otros módulos
 * 
 */

/**COMMON JS 
 * 
 * Define un formato estandar para la organización y carga de modulos en entornos de ejecucion
 * caracteristicas principales:
 * -Sincrono
 * -Carga bajo demanda
 * -Exportacion o importacion de modulos
 * -Resolucion de rutas
 * -Ambito propio
 * -modulos incorporados
 * 
*/


/**QUÉ ES NPM? (node package manager)
 * 
 * Es un administrador de paquetes para node.js, permite compartir y reutilizar facilmente el codigo javascript
 * asi como gestionar las dependencias dee su proyecto, se instala junto con node automaticamente
 * 
 * NPM ES PARA:
 * 
 * -instalar paquetes(librerias, frameworks)
 * -gestionar dependencias (con package.json)
 * -actualizar paquetes
 * publicar tus propios paquetes
 * 
 */

/**EJEMOPLO DE PACKAGE.JSON
 * 
 * con el comando en la termina npm init -y
 * nosgenera el archivo package.json el cual contiene:
 * {
  "name": "glosarionodejs",
  "version": "1.0.0",
  "description": "",
  "main": "glosarioNode.js",
   "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
 */

/**ES MODULES
 * 
 * Es una forma estandar de compartir y organizart codigo javascript
 * estan diseñados para funcionar tanto en navegadores web como en entornos de servidor
 * 
 * caracteristicas:
 * -Asincronos y basados en promesas
 * -sintaxis impor/export
 * 
 */