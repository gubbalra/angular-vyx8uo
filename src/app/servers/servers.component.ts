import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit { 

  serverName:String ='Test Server';
  serverStatus:String='';
  allowNewServer:Boolean=false;
  


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
  }

}