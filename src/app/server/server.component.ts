import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  status='';
  constructor() { }

  ngOnInit() {
  }

  getStatus(){

    this.status=Math.random()>0.5?'online':'offline';
    return this.status;
  }

  getBGColor(){
    return this.status=='offline'?'red':'green';

  }

}