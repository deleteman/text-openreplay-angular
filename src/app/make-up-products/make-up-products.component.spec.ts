import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeUpProductsComponent } from './make-up-products.component';

describe('MakeUpProductsComponent', () => {
  let component: MakeUpProductsComponent;
  let fixture: ComponentFixture<MakeUpProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeUpProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeUpProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
