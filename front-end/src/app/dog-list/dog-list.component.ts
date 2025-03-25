import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ToastrService } from 'ngx-toastr';
import { PetCardComponent } from "../pet-card/pet-card.component";
import { PetService } from '../service/pet.service';
import { HotToastService } from '@ngneat/hot-toast';
import { AppError } from '../error/appError';

@Component({
  selector: 'app-dog-list',
  imports: [CommonModule, PetCardComponent],
  standalone: true,
  templateUrl: './dog-list.component.html',
  styleUrl: './dog-list.component.scss'
})
export class DogListComponent {
    pets = signal<PET_DTO[]>([])
    constructor(private petService: PetService,private toast : HotToastService){ }

    ngOnInit() {
      this.getPets()
    }
    
    getPets(){
      this.petService.getAllPets().subscribe( {
        next: (response) => {
           this.pets.set(response)
        },
        error: (error) => {
          const isAppError = error instanceof AppError
          const errorMessage = isAppError ? error.message :"Error inesperado tenete novamente"
          this.toast.error(errorMessage)
        }
      })
    }
}
