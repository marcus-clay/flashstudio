"use client"

import { Card } from "@/components/ui/card";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const dosAndDonts = {
  dos: [
    {
      title: "Regardez droit vers l'objectif",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Un regard direct inspire confiance et professionnalisme"
    },
    {
      title: "Éclairage naturel",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      description: "Privilégiez la lumière naturelle, face à une fenêtre"
    },
    {
      title: "Tenue professionnelle",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      description: "Portez une tenue professionnelle adaptée à votre secteur"
    }
  ],
  donts: [
    {
      title: "Évitez les selfies",
      image: "https://images.unsplash.com/photo-1528914137830-c85ee162f588?w=400&h=400&fit=crop",
      description: "Les selfies manquent de professionnalisme"
    },
    {
      title: "Pas de fond chargé",
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop",
      description: "Privilégiez un fond neutre et épuré"
    },
    {
      title: "Évitez les photos de groupe",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop",
      description: "Utilisez uniquement des photos individuelles"
    }
  ]
};

export function UploadTutorial() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="space-y-4">
      <Button
        variant="ghost"
        className="w-full flex justify-between items-center py-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-sm font-medium">Conseils pour des photos réussies</span>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </Button>

      {isExpanded && (
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <h3 className="text-sm font-medium flex items-center gap-2 mb-3">
              <Check className="h-4 w-4 text-green-500" />
              À faire
            </h3>
            <div className="space-y-3">
              {dosAndDonts.dos.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-xs mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="text-sm font-medium flex items-center gap-2 mb-3">
              <X className="h-4 w-4 text-red-500" />
              À éviter
            </h3>
            <div className="space-y-3">
              {dosAndDonts.donts.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-xs mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}