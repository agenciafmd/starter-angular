import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-session',
  templateUrl: './component-session.component.html',
  styleUrls: ['./component-session.component.scss']
})
export class ComponentSessionComponent implements OnInit {

  @Input() id: string = 'default';
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';

  constructor() { }

  ngOnInit(): void {
  }

}
