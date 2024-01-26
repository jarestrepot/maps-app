import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagIconComponent } from './tag-icon.component';

describe('TagIconComponent', () => {
  let component: TagIconComponent;
  let fixture: ComponentFixture<TagIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagIconComponent]
    });
    fixture = TestBed.createComponent(TagIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
