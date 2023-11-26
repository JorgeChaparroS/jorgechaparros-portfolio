import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSelectorComponent } from './tech-selector.component';

describe('TechSelectorComponent', () => {
  let component: TechSelectorComponent;
  let fixture: ComponentFixture<TechSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
