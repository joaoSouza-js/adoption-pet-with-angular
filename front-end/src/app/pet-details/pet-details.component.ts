import { Component, inject, signal } from '@angular/core';
import { DogsService } from '../dogs.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PetService } from '../service/pet.service';
import { AppError } from '../error/appError';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-pet-details',
  imports: [CommonModule],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.scss',
})
export class PetDetailsComponent {
  pet = signal<PET_DTO | null>(null);
  petService = inject(PetService)
  constructor(
    private route: ActivatedRoute,
    private toast: HotToastService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const petId = params['id']; // Reactive way to get the ID
      this.petService.getPetById(petId).subscribe({
        next: (response) => {
          this.pet.set(response);
        },
        error: (error) => {
          const isAppError = error instanceof AppError;
          const errorMessage = isAppError
            ? error.message
            : 'Error inesperado tenete novamente';
          this.toast.error(errorMessage);
        },
      });
    });
  }
}
