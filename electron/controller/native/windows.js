const Controller = require('ee-core').Controller;
const Storage = require('ee-core').Storage;

const { app } = require("electron");

class WindowsController extends Controller {
  constructor(ctx) {
    super(ctx);

    // this.configDB = Storage.JsonDB.connection('config');

    // if (typeof this.configDB.db.get("isMaxWin").value() != "number") {
    //   this.configDB.db.set("isMaxWin", 0).write();
    // }
  }

  // getLastIsMaxWin() {
  //   return this.configDB.db.get("isMaxWin").value();
  // }

  closeApp() {
    app.exit();
    return true;
  }

  minWin() {
    this.app.electron.mainWindow.minimize();
    return true;
  }

  maximize() {
    this.app.electron.mainWindow.maximize();
    return true;
  }

  unmaximize() {
    this.app.electron.mainWindow.unmaximize();
    return true;
  }
}


module.exports = WindowsController;