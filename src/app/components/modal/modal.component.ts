import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalIdentifier!: string;
  @Input() showModalTitle = true;
  @Input() modalTitle = 'Modal Title';
  @Input() modalBodyClass = '';

  constructor() { }

  ngOnInit(): void {
  }

}
