import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit { 

  serverName:string ='Test Server';
  serverStatus:string='';
  allowNewServer:boolean=false;
  servers=['Test Server1', 'Test Server2'];


  constructor() {

    setTimeout(()=>{this.allowNewServer = true;
                   },2000);
   }

  ngOnInit() {
  }

  onServerNameUpdate(event:Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;

  }

  onServerCreation(){
    this.serverStatus='Server created !! Name:'+this.serverName;
    this.servers.push(this.serverName);
  }

}