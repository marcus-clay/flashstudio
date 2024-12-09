"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Camera, Users, Shield } from 'lucide-react';

export default function GuidePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Guide et conseils</h2>
        <p className="text-muted-foreground">
          Découvrez nos conseils pour réussir vos portraits professionnels
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Camera className="w-8 h-8 text-[#0162C1] mb-2" />
            <CardTitle>La photo parfaite</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Choisissez un fond neutre et uni</li>
              <li>• Portez une tenue professionnelle</li>
              <li>• Assurez un bon éclairage naturel</li>
              <li>• Adoptez une posture droite et assurée</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="w-8 h-8 text-[#0162C1] mb-2" />
            <CardTitle>Impact professionnel</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Augmentez votre visibilité sur LinkedIn</li>
              <li>• Renforcez votre crédibilité</li>
              <li>• Démarquez-vous des autres candidats</li>
              <li>• Créez une première impression positive</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BookOpen className="w-8 h-8 text-[#0162C1] mb-2" />
            <CardTitle>Conseils d'experts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Adaptez votre photo à votre secteur</li>
              <li>• Optimisez pour chaque plateforme</li>
              <li>• Suivez les tendances actuelles</li>
              <li>• Mettez à jour régulièrement</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="w-8 h-8 text-[#0162C1] mb-2" />
            <CardTitle>Bonnes pratiques</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Évitez les selfies</li>
              <li>• Pas de photos de groupe</li>
              <li>• Restez authentique</li>
              <li>• Gardez un style cohérent</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}