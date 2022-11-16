import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  components = {
    image: {
      id: 'image',
      title: 'Image',
      description: '<img> tag with loading lazy and .img-fluid by default.',
      inputProperties: [
        {
          name: 'name',
          type: 'string'
        },
        {
          name: 'alt',
          type: 'string'
        },
        {
          name: 'title',
          type: 'string'
        },
        {
          name: 'type',
          type: '\'svg\' | \'png\' | \'jpg\''
        },
        {
          name: 'width',
          type: 'string'
        },
        {
          name: 'height',
          type: 'string'
        },
        {
          name: 'classes',
          type: 'string'
        },
      ]
    },
    picture: {
      id: 'picture',
      title: 'Picture',
      description: '<picture> tag with sources, loading lazy and .img-fluid by default.',
      inputProperties: [
        {
          name: 'name',
          type: 'string'
        },
        {
          name: 'alt',
          type: 'string'
        },
        {
          name: 'title',
          type: 'string'
        },
        {
          name: 'type',
          type: '\'svg\' | \'png\' | \'jpg\''
        },
        {
          name: 'width',
          type: 'string'
        },
        {
          name: 'height',
          type: 'string'
        },
        {
          name: 'classes',
          type: 'string'
        },
      ]
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
