import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSessionComponent } from './component-session.component';

describe('ComponentSessionComponent', () => {
  let component: ComponentSessionComponent;
  let fixture: ComponentFixture<ComponentSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
