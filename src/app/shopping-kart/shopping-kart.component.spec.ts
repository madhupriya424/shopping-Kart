import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingKartComponent } from './shopping-kart.component';

describe('ShoppingKartComponent', () => {
  let component: ShoppingKartComponent;
  let fixture: ComponentFixture<ShoppingKartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingKartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
