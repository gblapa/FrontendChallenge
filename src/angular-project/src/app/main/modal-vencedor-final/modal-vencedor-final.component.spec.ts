import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVencedorFinalComponent } from './modal-vencedor-final.component';

describe('ModalVencedorFinalComponent', () => {
  let component: ModalVencedorFinalComponent;
  let fixture: ComponentFixture<ModalVencedorFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalVencedorFinalComponent]
    });
    fixture = TestBed.createComponent(ModalVencedorFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
