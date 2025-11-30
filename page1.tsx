'use client';
import { useState } from 'react';
import EventCard from '@/components/event-card';
import { events } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const categories = ['All', 'Music', 'Sports', 'Arts', 'Tech', 'Food'];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = events.filter(event => {
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center text-white">
        <img
          src="/fondo_1_1.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 p-4 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">
            Descubre Tu Próxima Experiencia
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Desde conciertos hasta conferencias, encuentra y compra entradas para los mejores eventos de la ciudad.
          </p>
          <div className="flex max-w-lg mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar eventos por nombre, ubicación..."
                className="w-full pl-10 pr-4 py-2 h-12 text-base text-foreground"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-12">
        <section className="space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold font-headline text-center">
              Próximos Eventos
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
             <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No se encontraron eventos. Intenta con otra búsqueda o filtro.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
