import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenedoraDetailsComponent } from './mantenedora-details.component';

describe('MantenedoraDetailsComponent', () => {
  let component: MantenedoraDetailsComponent;
  let fixture: ComponentFixture<MantenedoraDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenedoraDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenedoraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
