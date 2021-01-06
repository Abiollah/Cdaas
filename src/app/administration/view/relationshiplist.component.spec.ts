import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshiplistComponent } from './relationshiplist.component';

describe('RelationshiplistComponent', () => {
  let component: RelationshiplistComponent;
  let fixture: ComponentFixture<RelationshiplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationshiplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
