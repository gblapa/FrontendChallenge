import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneioComponent } from './torneio.component';

describe('TorneioComponent', () => {
  let component: TorneioComponent;
  let fixture: ComponentFixture<TorneioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TorneioComponent]
    });
    fixture = TestBed.createComponent(TorneioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
