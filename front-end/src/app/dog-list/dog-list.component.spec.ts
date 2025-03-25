import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { DogListComponent } from './dog-list.component';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogListComponent,HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
