const Controller = require('ee-core').Controller;

class DebugController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  openDevTool() {
    this.app.electron.mainWindow.webContents.openDevTools();
    return true;
  }
}


module.exports = DebugController;