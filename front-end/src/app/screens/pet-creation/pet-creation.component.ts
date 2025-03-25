import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PetCreationForm } from './pet-creation.types';
import { PetService } from '../../service/pet.service';
import { HotToastService } from '@ngneat/hot-toast';
import { FileUploadComponent } from "../../components/file-upload/file-upload.component";
import { AppError } from '../../error/appError';
@Component({
  selector: 'app-pet-creation',
  imports: [ReactiveFormsModule, CommonModule, FileUploadComponent],
  templateUrl: './pet-creation.component.html',
  styleUrl: './pet-creation.component.scss',
})
export class PetCreationComponent {
  petCreationForm: PetCreationForm;
  petImage = signal<File | null>(null);

  constructor(
    formBuilder: FormBuilder,
    private petService: PetService,
    private toast: HotToastService
  ) {
    this.petCreationForm = formBuilder.nonNullable.group({
      name: formBuilder.control('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)],
      }),
      description: formBuilder.control('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(120),
        ],
      }),
      content: formBuilder.control('', {
        nonNullable: true,
        validators: [
          Validators.minLength(15),
          Validators.required,
          Validators.maxLength(400),
        ],
      }),
      petType: formBuilder.control('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      age: formBuilder.control(0, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(0.1)],
      }),
    });
  }

  onChangeImage(fileResponse: File | null) {
    this.petImage.set(fileResponse);
  }

  onSubmit() {
    if (!this.petCreationForm.valid) return;
    const formValues = this.petCreationForm.getRawValue();
    if (!this.petImage()) return;

    this.petService
      .createPet({
        ...formValues,
        petImage: this.petImage() as File,
      })
      .subscribe({
        next: (response )  =>{
          console.log('your response');
          this.toast.success("Pet created",)
        },
        error: (error) => {
          const isAppError = error instanceof AppError
          const errorMessage = isAppError ? error.message : "server error"
          this.toast.error(errorMessage)
        }

      });
  }
}
