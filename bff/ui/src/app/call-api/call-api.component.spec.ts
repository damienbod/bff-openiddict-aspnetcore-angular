import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallApiComponent } from './call-api.component';

describe('CallApiComponent', () => {
  let component: CallApiComponent;
  let fixture: ComponentFixture<CallApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CallApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
