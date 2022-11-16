import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  @Input() name: string = 'img-default';
  @Input() alt: string = 'F&MD';
  @Input() title: string = 'F&MD';
  @Input() type: 'svg' | 'png' | 'jpg' = 'jpg';
  @Input() width: string = '600';
  @Input() height: string = '600';
  @Input() classes: string | undefined;

  pathBasedOnType = 'jpg';

  constructor() { }

  ngOnInit(): void {
    this.pathBasedOnType = (this.type == 'png' || this.type == 'jpg') ? 'images' : 'svg';
  }

}
