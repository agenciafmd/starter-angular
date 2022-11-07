import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoPath = 'assets/videos/';
  fileName!: string;

  @Input() posterName!: string;
  @Input() set insertFileName(name: string){

    if (!name){
      throw new Error("Mandatory to fill in the file name");
    }

    this.fileName = name;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
