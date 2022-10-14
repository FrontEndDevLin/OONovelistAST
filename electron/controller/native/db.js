const Controller = require('ee-core').Controller;
const Storage = require('ee-core').Storage;

const { app } = require("electron");
const { buildId } = require("../../library/utils");

const fs = require("fs");
const os = require("os");
const bookManager = require("../../core/bookManager");

class DbController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.configDB = Storage.JsonDB.connection('db_global');

    if (!this.configDB.db.get("booklist").value()) {
      this.configDB.db.set("booklist", JSON.stringify([])).write();
    }

    this.cacheDB = JSON.parse(this.configDB.db.get("booklist").value());

    this.dbFolderPath = os.homedir() + "\\AppData\\Roaming\\" + app.getName() + "\\dbFolder\\";
    if (!fs.existsSync(this.dbFolderPath)) {
      fs.mkdirSync(this.dbFolderPath);
    }
  }

  getBookList() {
    return this.cacheDB;
  }

  addBook(bookName) {
    let bookId = buildId();
    this.cacheDB.push({
      id: bookId,
      bookName
    });

    this.configDB.db.set("booklist", JSON.stringify(this.cacheDB)).write();

    bookManager.initFile(bookId);

    return true;
  }

  delBook(id) {
    let targetIdx = null;
    for (let i = 0; i < this.cacheDB.length; i++) {
      let item = this.cacheDB[i];
      if (item.id == id) {
        targetIdx = i;
        break;
      }
    }

    if (typeof targetIdx == "number") {
      this.cacheDB.split(targetIdx, 1);
      this.configDB.db.set("booklist", JSON.stringify(this.cacheDB)).write();

      // TODO: 删除文件夹
    }

    return true;
  }
}


module.exports = DbController;