

# 🐾 Pet Adoption — Plataforma Angular de Adoção de Pets

https://github.com/user-attachments/assets/11b2c91c-b205-437a-94fa-9368f1c1fe52

Este projeto é uma aplicação web desenvolvida com **Angular 19** usando a abordagem de **Standalone Components**, com o objetivo de conectar pessoas interessadas em adotar animais a pets disponíveis. A plataforma é responsiva, moderna e integra uma **API RESTful** para persistência de dados.

---

## 🚀 Tecnologias Utilizadas

### Front-end (Angular)

* **Angular 19** — com suporte a *standalone components* e roteamento dinâmico.
* **RxJS** — controle reativo de fluxos assíncronos.
* **Reactive Forms** — formulários tipados e validados.
* **HttpClient** — integração com API.
* **Signals** — reatividade simples e declarativa.
* **@ngneat/hot-toast** — feedback visual com notificações.
* **Arquitetura Modular** — organizada por pastas: `screens`, `service`, `components` etc.

### Backend (Fastify + Prisma)

* **Fastify** — framework leve, performático e com tipagem.
* **Prisma ORM** — acesso tipado ao banco de dados.
* **@fastify/multipart** — suporte a upload de imagens (com limite de 40MB).
* **Arquitetura em camadas** — pastas como `functions/`, `service/`, `types/`, `errors/`.
* **Validação e tratamento global de erros** com `setErrorHandler()`.

---

## 🧱 Estrutura de Pastas

### Front-end (`src/app/`)

```
├── @types/              # Tipagens reutilizáveis
├── components/          # Componentes genéricos (ex: FileUpload)
├── dog-list/            # Listagem de pets
├── pet-card/            # Cartão individual de pet
├── pet-details/         # Tela de detalhes
├── screens/pet-creation # Tela de criação de pet
├── service/             # Serviços HTTP e orquestradores
├── error/               # Classe AppError
```

### Backend (`/src`)

```
├── http/routes/         # Rotas e controllers Fastify
├── functions/           # Regras de negócio puras
├── service/             # Acesso a banco e arquivos
├── uploads/             # Imagens de pets
```

---

## 🌐 Rotas (Angular)

```ts
export const routes: Routes = [
  { path: '', component: GreetingComponent },
  { path: 'list', loadComponent: () => import('./dog-list/dog-list.component').then(m => m.DogListComponent) },
  { path: 'pet-details/:id', loadComponent: () => import('./pet-details/pet-details.component').then(m => m.PetDetailsComponent) },
  { path: 'pet-creation', loadComponent: () => import('./screens/pet-creation/pet-creation.component').then(m => m.PetCreationComponent) },
];
```

**Por que Standalone Components?**

* Reduz complexidade de módulos.
* Facilita lazy loading.
* Melhora organização para grandes apps.

---

## 📡 Integração com API

O `ApiService` centraliza chamadas HTTP com tratamento de erros usando `HttpErrorResponse` + `AppError`.

```ts
@Injectable({ providedIn: "root" })
export class ApiService {
  get<T>(path:string):Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${path}`).pipe(
      catchError(this.handleError)
    );
  }
}
```

Serviços como `PetApiService` consomem `ApiService`, respeitando a separação de responsabilidades.

---

## 🐕 Cadastro de Pet

A tela de criação usa `Reactive Forms`, `signal<File>`, validações customizadas e `HotToastService`.

### Fluxo:

1. Usuário preenche o formulário e escolhe a imagem.
2. `PetService.createPet()` envia os dados.
3. Toast de sucesso ou erro é exibido.
4. Formulário é resetado após sucesso.

---

## 🧪 Testes

Testes unitários para os serviços:

* `api.service.spec.ts`
* `pet-api.service.spec.ts`
* `pet.service.spec.ts`

---

## 🔧 Como Rodar o Projeto

### Backend

```bash
cd backend
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

### Frontend

```bash
cd frontend
npm install
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

---

## 🌐 Rotas da API

| Método | Rota              | Descrição                     |
| ------ | ----------------- | ----------------------------- |
| GET    | `/api/v1/pets`    | Lista todos os pets           |
| GET    | `/api/v1/pet/:id` | Detalha um pet específico     |
| POST   | `/api/v1/pet`     | Cria um novo pet (com imagem) |

---

## ✅ Funcionalidades Atuais

| Funcionalidade                        | Status |
| ------------------------------------- | ------ |
| Listar pets disponíveis               | ✅      |
| Ver detalhes de um pet                | ✅      |
| Criar novo pet (com upload de imagem) | ✅      |
| Feedback visual com toast             | ✅      |

---

## 🔮 Próximas Features

* Filtro e busca por espécie, idade e localização.
* Autenticação e controle de acesso para admins.
* Upload com pré-visualização da imagem.
* Paginação na listagem.

---

## 👨‍💻 Autor

Projeto criado por **\[Seu Nome]** como estudo prático com foco em:

* Escalabilidade com Angular 19 + Standalone Components.
* Arquitetura limpa e reativa.
* Back-end moderno com Fastify + Prisma.
* Experiência de usuário com notificações e upload.

---

Se quiser, posso gerar o arquivo `README.md` já formatado para você colar no seu repositório. Deseja isso?
