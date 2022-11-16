import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-information',
  templateUrl: './component-information.component.html',
  styleUrls: ['./component-information.component.scss']
})
export class ComponentInformationComponent implements OnInit {

  @Input() inputProperties = [
    {
      name: 'name',
      type: 'type'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
