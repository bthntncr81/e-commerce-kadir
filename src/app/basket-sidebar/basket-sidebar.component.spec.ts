import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketSidebarComponent } from './basket-sidebar.component';

describe('BasketSidebarComponent', () => {
  let component: BasketSidebarComponent;
  let fixture: ComponentFixture<BasketSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasketSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
