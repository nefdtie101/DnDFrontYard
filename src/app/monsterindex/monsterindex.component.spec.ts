import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterindexComponent } from './monsterindex.component';

describe('MonsterindexComponent', () => {
  let component: MonsterindexComponent;
  let fixture: ComponentFixture<MonsterindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
