import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShoppingCartComponent } from './show-shopping-cart.component';

describe('ShowShoppingCartComponent', () => {
  let component: ShowShoppingCartComponent;
  let fixture: ComponentFixture<ShowShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShoppingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
