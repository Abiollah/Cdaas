import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add.RelationshipComponent } from './add.relationship.component';

describe('Add.RelationshipComponent', () => {
  let component: Add.RelationshipComponent;
  let fixture: ComponentFixture<Add.RelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Add.RelationshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Add.RelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
