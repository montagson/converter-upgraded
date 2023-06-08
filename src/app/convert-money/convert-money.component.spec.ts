import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertMoneyComponent } from './convert-money.component';

describe('ConvertMoneyComponent', () => {
  let component: ConvertMoneyComponent;
  let fixture: ComponentFixture<ConvertMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertMoneyComponent]
    });
    fixture = TestBed.createComponent(ConvertMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
