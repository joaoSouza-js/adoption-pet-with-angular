import { Injectable } from '@angular/core';


const dogsList: PET_DTO[] = [
  {
    id: "1",
    name: "Bella",
    description: "A friendly and affectionate Golden Retriever who loves outdoor adventures and playing fetch.",
    content: "Bella is a playful and energetic Golden Retriever who enjoys spending time outdoors. She thrives on long walks in the park, loves playing fetch, and is always eager to meet new people. Her gentle temperament makes her a fantastic companion for families with children. Bella is highly intelligent and responds well to training, making her an easy-to-handle and obedient pet.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "2",
    name: "Max",
    description: "A brave and protective German Shepherd, known for his intelligence and strong loyalty to his family.",
    content: "Max is a highly intelligent and courageous German Shepherd who is deeply devoted to his owners. He has a strong protective instinct, making him an excellent watchdog while still being affectionate with his family. Max enjoys activities that engage both his mind and body, such as agility training, obedience drills, and long outdoor runs. He thrives in an active home where he can get plenty of exercise and mental stimulation.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "3",
    name: "Lucy",
    description: "A gentle and affectionate Labrador Retriever who loves swimming, playing, and making new friends.",
    content: "Lucy is a lovable Labrador Retriever with a heart full of affection. She adores human company and enjoys swimming, making her the perfect companion for outdoor adventures near lakes or beaches. Lucy has a friendly personality and gets along well with children and other pets. She is always eager to please, making her easy to train and a joy to have in any household.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "4",
    name: "Charlie",
    description: "A playful and energetic Beagle with a strong sense of curiosity and a love for exploring new scents.",
    content: "Charlie is a fun-loving and adventurous Beagle who is always on the move. He has an excellent sense of smell and loves tracking scents during walks. His curious nature keeps him entertained as he sniffs out new discoveries. Charlie is a social and friendly dog who enjoys spending time with his family and playing with other pets. Regular exercise and mental stimulation keep him happy and healthy.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "5",
    name: "Molly",
    description: "A gentle and affectionate Shih Tzu who enjoys cozy naps and being pampered.",
    content: "Molly is a sweet and laid-back Shih Tzu with a loving personality. She enjoys spending her time relaxing at home, making her a great companion for apartment living. Molly forms a deep bond with her family and enjoys being pampered with gentle grooming and cuddles. While she doesn't require intense exercise, she still enjoys short walks and playtime to stay happy and healthy.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "6",
    name: "Rocky",
    description: "An energetic and playful Boxer who loves attention, running, and interactive play.",
    content: "Rocky is a lively Boxer with boundless energy and a love for play. He enjoys running, jumping, and playing with toys, making him a perfect fit for an active family. Despite his high energy, Rocky is also incredibly affectionate and enjoys spending quality time with his owners. His social personality makes him a great family pet, and he thrives in an environment where he gets plenty of exercise and attention.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "7",
    name: "Daisy",
    description: "A cheerful and loving Bichon Frise with a fluffy coat and a friendly personality.",
    content: "Daisy is a charming Bichon Frise who loves being around people. With her fluffy white coat and bright personality, she brings joy to everyone she meets. Daisy enjoys playing indoors, making her an excellent pet for apartment dwellers. She thrives on companionship and loves being the center of attention. Regular grooming keeps her looking her best, and she’s always ready for cuddles and playtime.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "8",
    name: "Cooper",
    description: "A highly intelligent and hardworking Border Collie who excels in training and outdoor activities.",
    content: "Cooper is a brilliant and energetic Border Collie with a strong work ethic. He enjoys activities that challenge his intelligence, such as herding, agility training, and learning new tricks. Cooper is an excellent companion for owners who lead an active lifestyle, as he requires plenty of physical and mental stimulation. His loyalty and eagerness to please make him an exceptional pet.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "9",
    name: "Sophie",
    description: "A tiny and affectionate Pomeranian with a fluffy coat and a big personality.",
    content: "Sophie may be small, but she has a lively and confident personality. She loves being pampered and enjoys cuddling with her owners. Her fluffy coat gives her a teddy bear-like appearance, and she loves showing off her playful side. Sophie enjoys short walks and playtime indoors, making her a great companion for those looking for a small yet spirited pet.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "10",
    name: "Buddy",
    description: "A smart and active Australian Shepherd who thrives on exercise and mental challenges.",
    content: "Buddy is an intelligent and energetic Australian Shepherd who enjoys being active. He excels in tasks that require problem-solving, such as herding, agility, and obedience training. Buddy forms a strong bond with his owners and enjoys spending time outdoors, whether it's hiking, running, or playing frisbee. He needs regular exercise and mental stimulation to stay happy and well-balanced.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "11",
    name: "Lola",
    description: "A relaxed and affectionate French Bulldog who enjoys cuddles and short play sessions.",
    content: "Lola is a lovable French Bulldog with a relaxed and easy-going personality. She enjoys lounging at home and being pampered by her owners. Though she has a playful side, she doesn’t require intense exercise, making her an ideal pet for apartment living. Lola thrives on affection and enjoys being close to her family, often seeking cuddles and attention throughout the day.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  },
  {
    id: "12",
    name: "Rex",
    description: "A strong and loyal Rottweiler with a protective nature and a deep love for his family.",
    content: "Rex is a confident and protective Rottweiler who is deeply devoted to his family. His strong guarding instincts make him an excellent watchdog, but he is also affectionate with those he loves. With proper training and socialization, Rex is a well-mannered and obedient companion. Despite his tough exterior, he enjoys bonding with his family and thrives in a home where he feels secure and loved.",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783"
  }
];



@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs: PET_DTO[] = dogsList
  constructor() { }
}
