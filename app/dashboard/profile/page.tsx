"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';
import { Camera } from 'lucide-react';

export default function ProfilePage() {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Jean Dupont',
    email: 'jean.dupont@exemple.fr',
    title: 'Directeur Marketing',
    company: 'Tech Solutions',
    phone: '+33 6 12 34 56 78',
    location: 'Paris, France'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été enregistrées avec succès.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Mon Profil</h2>
        <p className="text-muted-foreground">
          Gérez vos informations personnelles et professionnelles
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle>Photo de profil</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="outline" className="gap-2">
              <Camera className="h-4 w-4" />
              Changer la photo
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Informations personnelles</CardTitle>
            <Button 
              variant="ghost" 
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Annuler' : 'Modifier'}
            </Button>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Titre professionnel</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localisation</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>
              {isEditing && (
                <Button type="submit" className="bg-[#0162C1] hover:bg-[#0152A1]">
                  Enregistrer les modifications
                </Button>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}