import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeFeedComponent } from './meme-feed.component';

describe('MemeFeedComponent', () => {
  let component: MemeFeedComponent;
  let fixture: ComponentFixture<MemeFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
