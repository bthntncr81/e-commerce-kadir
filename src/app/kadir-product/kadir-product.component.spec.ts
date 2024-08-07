import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KadirProductComponent } from './kadir-product.component';

describe('KadirProductComponent', () => {
  let component: KadirProductComponent;
  let fixture: ComponentFixture<KadirProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KadirProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KadirProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
