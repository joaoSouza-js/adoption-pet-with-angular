import { Component, input } from '@angular/core';
import {UpperCasePipe} from "@angular/common"
@Component({
  selector: 'app-pet-card',
  imports: [UpperCasePipe],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss'
})
export class PetCardComponent {
  pet = input.required<PET_DTO>()

}
