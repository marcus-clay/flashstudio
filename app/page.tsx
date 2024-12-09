import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, TrendingUp, CheckCircle, Bolt } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Testimonials } from '@/components/testimonials';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-black mb-6 max-w-4xl mx-auto leading-tight">
              Des portraits professionnels d'exception en 5 minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Démarquez-vous sur LinkedIn et attirez l'attention des recruteurs avec un portrait qui fait la différence.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link href="/auth/login">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Créez votre portrait professionnel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-gray-600">4.9/5 basé sur plus de 50 000 avis</span>
              </div>
              <span className="text-sm text-[#0A66C2] animate-pulse font-medium">
                🔥 Offre limitée : Les 100 premiers portraits gratuits
              </span>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 basé sur plus de 50 000 avis</span>
            </div>
            <h2 className="text-3xl font-medium mb-8">8 452 825 portraits professionnels créés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
              <div className="h-8">Tesla</div>
              <div className="h-8">Amazon</div>
              <div className="h-8">Goldman Sachs</div>
              <div className="h-8">Harvard</div>
              <div className="h-8">Booking</div>
              <div className="h-8">Texas University</div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-[#0A66C2]" />
                </div>
                <h3 className="text-xl font-medium mb-4">30% de chances en plus</h3>
                <p className="text-gray-600">
                  De décrocher un poste mieux rémunéré avec un portrait professionnel qui inspire confiance
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-[#0A66C2]" />
                </div>
                <h3 className="text-xl font-medium mb-4">Impact LinkedIn x3</h3>
                <p className="text-gray-600">
                  Triplez votre visibilité et vos opportunités professionnelles sur LinkedIn
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-[#0A66C2]" />
                </div>
                <h3 className="text-xl font-medium mb-4">Satisfaction garantie</h3>
                <p className="text-gray-600">
                  Garantie satisfait ou remboursé à 100% sous 30 jours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium mb-4">10 fois mieux, 1/10 du prix</h2>
              <p className="text-xl text-gray-600">Des portraits professionnels, sans les coûts du studio</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-medium mb-2">Découverte</h3>
                <div className="text-3xl font-bold mb-6">Gratuit</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>2 portraits gratuits</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>Qualité standard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>Avec filigrane</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>Prêt en 5 minutes</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full">Commencer</Button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#0A66C2] transform scale-105">
                <h3 className="text-xl font-medium mb-2">Premium</h3>
                <div className="text-3xl font-bold mb-6">29€</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>1 portrait premium</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>3 styles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>Sans filigrane</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>Prêt en 3 minutes</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-gradient-to-r from-[#0A66C2] to-[#0077B5] hover:from-[#004182] hover:to-[#005885] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
                  Choisir Premium
                </Button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-medium mb-2">Business</h3>
                <div className="text-3xl font-bold mb-6">49€</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>3 portraits premium</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>3 styles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>Sans filigrane</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A66C2] mr-2" />
                    <span>Prêt en 10 minutes</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full">Choisir Business</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-40">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#0052CC]" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8 [text-wrap:balance]">
              Prêt à booster votre carrière ?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Rejoignez plus de 50 000 professionnels qui ont déjà transformé leur image et multiplié leurs opportunités
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link href="/auth/login">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="rounded-full px-8 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/20 text-white hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  Créez votre portrait professionnel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <span className="text-white/80 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                Plus de 8 millions de portraits générés
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}