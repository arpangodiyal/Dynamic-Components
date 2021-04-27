import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit{

  serverName: string;

  serverStatus: String = 'Offline';
  componentRef: any;

  ngOnInit(){
  }

  getServerStatus(){
    return this.serverStatus;
  }

  changeServerStatus(){
    if(this.serverStatus == 'Online'){
      this.serverStatus = 'Offline'
    }
    else{
      this.serverStatus = 'Online'
    }
  }

  removeServer(){
    this.componentRef.destroy();
  }
}