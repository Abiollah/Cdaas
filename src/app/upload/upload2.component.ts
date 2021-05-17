import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload2',
  templateUrl: './upload2.component.html',
  styleUrls: ['./upload2.component.scss']
})
export class Upload2Component implements OnInit {
  swithClientInfo: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  switchClientExtInfo(): boolean{
    return this.swithClientInfo ? this.swithClientInfo=false : this.swithClientInfo=true;
  }
}
