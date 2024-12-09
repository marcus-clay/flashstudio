"use client"

import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Button } from '@/components/ui/button';
import { Building2, Users, Zap, Shield, BarChart, Clock } from 'lucide-react';

export default function EntreprisesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* ... main content remains the same ... */}
      </main>

      <Footer />
    </div>
  );
}