import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaejemplaresComponent } from './listaejemplares.component';

describe('ListaejemplaresComponent', () => {
  let component: ListaejemplaresComponent;
  let fixture: ComponentFixture<ListaejemplaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaejemplaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaejemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
