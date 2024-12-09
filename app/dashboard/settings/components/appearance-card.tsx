"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Palette } from 'lucide-react';

interface AppearanceSettingsProps {
  onSettingsChange: (settings: AppearanceSettings) => void;
}

export interface AppearanceSettings {
  theme: string;
}

export function AppearanceCard({ onSettingsChange }: AppearanceSettingsProps) {
  const [settings, setSettings] = useState<AppearanceSettings>({
    theme: 'light',
  });

  const handleChange = (value: string) => {
    const newSettings = {
      ...settings,
      theme: value,
    };
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Palette className="w-8 h-8 text-[#0162C1]" />
        <div>
          <CardTitle>Apparence</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label>Thème</Label>
          <Select value={settings.theme} onValueChange={handleChange}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez un thème" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Clair</SelectItem>
              <SelectItem value="dark">Sombre</SelectItem>
              <SelectItem value="system">Système</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}