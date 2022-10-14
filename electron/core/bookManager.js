const { app } = require("electron");
const { buildId } = require("../library/utils");
const os = require("os");
const fs = require("fs");

class BookManager {
  constructor() {
    this.dbFolderPath = os.homedir() + "\\AppData\\Roaming\\" + app.getName() + "\\dbFolder\\";
  }

  initFile(bookId) {
    let folderPath = this.dbFolderPath + "\\" + bookId + "\\";
    fs.mkdirSync(folderPath);

    let dbFileName = "db.json";
    let dbFilePath = folderPath + dbFileName;
    let initConfig = JSON.stringify({
      scroll: [
        {
          id: buildId(),
          scrollName: "默认卷"
        }
      ],
      sessionList: [],
      recycleBin: [] 
    });
    fs.writeFileSync(dbFilePath, initConfig);

    return true;
  }
}

module.exports = new BookManager();