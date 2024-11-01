import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsSummaryComponent } from './summary.component';

describe('RewardsSummaryComponent', () => {
  let component: RewardsSummaryComponent;
  let fixture: ComponentFixture<RewardsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RewardsSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
