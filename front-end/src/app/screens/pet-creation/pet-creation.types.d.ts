import { FormControl, FormGroup } from "@angular/forms";

interface PetCreationForm extends FormGroup<{
  name: FormControl<string>;
  description: FormControl<string>;
  content: FormControl<string>;
  petType: FormControl<string>;
  age: FormControl<number>;
}>{}