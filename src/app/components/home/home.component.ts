import { Component, OnInit } from '@angular/core';
import { dialog } from 'electron'
import { ElectronService } from '../../providers/electron.service';
import { autoUpdater } from "electron-updater";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }

  open() {
    // this.electronService.remote.dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] });
    const noti = new this.electronService.remote.Notification({title: 'Hi', body: 'Hello OS'});
    noti.show();
  }

  update() {
    autoUpdater.checkForUpdatesAndNotify();
  }

}
