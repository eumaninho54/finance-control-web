const { app, BrowserWindow } =  require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1100,
    height: 920
  });

  win.loadURL("http://localhost:5173")
};

app.whenReady().then(() => {
  createWindow()
})