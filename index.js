//Mensaje de consola de prueba
console.log("Madre mia");

//Importar browser window libreria para abri ventanas en el so
const { app , BrowserWindow } = require('electron');

//Inicializar la aplicacion
app.on('ready' , () => {
  //Crear una ventana y guardarla en una variable
  let mainWindow = new BrowserWindow();

  //Vamos a indicarle el archivo html que va a cargar
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

