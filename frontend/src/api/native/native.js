import { ipc, ipcCall, ipcInvoke, ipcSendSync } from "@/utils/ipcRenderer";

import ipcWindowsApiRoute from "./modules/windows";
import ipcDebugApiRoute from "./modules/debug";
import ipcUpdaterApiRoute from "./modules/updater";
import ipcDbApiRoute from "./modules/db";

const native = {
  closeApp: () => {
    return ipcInvoke(ipcWindowsApiRoute.closeApp);
  },
  getLastIsMaxWin: () => {
    return ipcSendSync(ipcWindowsApiRoute.getLastIsMaxWin);
  },
  minWin: () => {
    return ipcInvoke(ipcWindowsApiRoute.minWin);
  },
  toggleWin: () => {
    return ipcInvoke(ipcWindowsApiRoute.toggleWin);
  },
  maximize: () => {
    return ipcInvoke(ipcWindowsApiRoute.maximize);
  },
  unmaximize: () => {
    return ipcInvoke(ipcWindowsApiRoute.unmaximize);
  },

  getBookList: () => {
    return ipcInvoke(ipcDbApiRoute.getBookList);
  },
  addBook: (bookName) => {
    return ipcInvoke(ipcDbApiRoute.addBook, bookName);
  },
  delBook: () => {
    return ipcInvoke(ipcDbApiRoute.delBook);
  },


  openDevTool: () => {
    return ipcInvoke(ipcDebugApiRoute.openDevTool);
  },


  getVersion: () => {
    return ipcSendSync(ipcUpdaterApiRoute.getVersion);
  },
  checkUpdate: ({ version }) => {
    return ipcSendSync(ipcUpdaterApiRoute.checkUpdate, { version });
  },
  doUpdate: ({ downloadLink }) => {
    return ipcSendSync(ipcUpdaterApiRoute.doUpdate, { downloadLink });
  }
}

export { native };

export default {
  install(Vue) {
    Vue.prototype.$native = native;
  }
}