"use client"

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import { Button } from './ui/button';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Marie Laurent",
    role: "Directrice Marketing",
    company: "Tech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Grâce à FlashStudio, j'ai multiplié par 3 mes opportunités sur LinkedIn. Mon nouveau portrait professionnel a vraiment fait la différence dans ma recherche d'emploi.",
    rating: 5
  },
  {
    name: "Thomas Dubois",
    role: "Consultant Senior",
    company: "Deloitte",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Investir dans un portrait professionnel avec FlashStudio a été l'un des meilleurs choix pour ma carrière. J'ai décroché un poste avec +30% de salaire !",
    rating: 5
  },
  {
    name: "Sophie Martin",
    role: "Product Manager",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    content: "La qualité des portraits est impressionnante. Mes collègues m'ont tous demandé où j'avais fait faire mes photos. Le ROI est indéniable.",
    rating: 5
  },
  {
    name: "Pierre Moreau",
    role: "Développeur Senior",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Le processus est simple et rapide. Les résultats sont au-delà de mes attentes. Un vrai plus pour mon personal branding.",
    rating: 5
  },
  {
    name: "Claire Dubois",
    role: "Architecte",
    company: "Foster + Partners",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
    content: "La qualité studio sans le studio ! Les portraits sont d'une qualité exceptionnelle et le service est impeccable.",
    rating: 5
  },
  {
    name: "Marc Leroy",
    role: "Avocat",
    company: "Cabinet Leroy",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Un service qui comprend parfaitement les besoins des professionnels. Résultat impeccable du premier coup.",
    rating: 5
  },
  {
    name: "Julie Chen",
    role: "UX Designer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Interface intuitive et résultats professionnels. Exactement ce dont j'avais besoin pour mon portfolio.",
    rating: 5
  },
  {
    name: "Alexandre Martin",
    role: "CEO",
    company: "StartupFlow",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Un gain de temps considérable pour toute l'équipe. La qualité est constante et professionnelle.",
    rating: 5
  },
  {
    name: "Sarah Cohen",
    role: "DRH",
    company: "BNP Paribas",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Nous utilisons FlashStudio pour tous nos collaborateurs. Le résultat est toujours à la hauteur.",
    rating: 5
  },
  {
    name: "Paul Durand",
    role: "Directeur Commercial",
    company: "Orange",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
    content: "Service client exceptionnel et portraits de grande qualité. Je recommande vivement.",
    rating: 5
  },
  {
    name: "Emma Bernard",
    role: "Architecte d'intérieur",
    company: "Studio Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    content: "La solution parfaite pour les créatifs qui veulent une image professionnelle sans compromis.",
    rating: 5
  },
  {
    name: "Lucas Petit",
    role: "Entrepreneur",
    company: "TechStart",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop",
    content: "FlashStudio a transformé mon image professionnelle. Un investissement qui en vaut vraiment la peine.",
    rating: 5
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (isAnimating) return;

    setIsAnimating(true);
    const totalTestimonials = testimonials.length;
    
    setCurrentIndex(prevIndex => {
      let newIndex;
      if (direction === 'left') {
        newIndex = prevIndex === 0 ? totalTestimonials - 4 : prevIndex - 1;
      } else {
        newIndex = prevIndex === totalTestimonials - 4 ? 0 : prevIndex + 1;
      }
      return newIndex;
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isAnimating]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-4">
            Rejoignez plus de 50 000 professionnels satisfaits
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-600">4.9/5 basé sur plus de 50 000 avis</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-800 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-1/4 flex-shrink-0 px-3"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <div className="flex mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <p className="text-sm mb-4 line-clamp-3">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-300">
                            {testimonial.role} • {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() => scroll('left')}
            disabled={isAnimating}
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center"
            onClick={() => scroll('right')}
            disabled={isAnimating}
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}