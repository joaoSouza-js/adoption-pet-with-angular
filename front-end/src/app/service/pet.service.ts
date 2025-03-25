import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, switchMap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(private apiService : ApiService) { }
  getAllPets():Observable<PET_DTO[]> {
    const petsObservable = this.apiService.get<PET_DTO[]>("/pets");
    return petsObservable;
  }

  getPetById(id: string):Observable<PET_DTO> {
    const petObservable = this.apiService.get<PET_DTO>(`/pets/${id}`)
    return petObservable;
  }
  deletePet(id:string):Observable<null>{
    return this.apiService.delete("/pets")
  }
  createPet(formData: PET_CREATION_DTO):Observable<PET_DTO>{
    const  {petImage}  = formData
    const  formImageData = new FormData()
    
    formImageData.append("file", petImage, petImage.name)

    const createPetObservable =  this.apiService.post<{
      imageUrl:string
    }>('/image',formImageData).pipe(
      switchMap(imageResponse => {
        return this.apiService.post<PET_DTO>("/pets",{
          name:  formData.name,
          description: formData.description,
          age: formData.age,
          content: formData.content,
          type: formData.petType,
          imageUrl: imageResponse.imageUrl
        })
      })
    )

    return createPetObservable
  }

}
