import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AnimalCardProps {
  name: string;
  emoji: string;
  image: string;
   foods: string[];
  description: string;
  onClick: () => void;

}

const AnimalCard = ({ name, emoji, image, description, foods, onClick }: AnimalCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-warm hover:-translate-y-1 bg-gradient-subtle border-0 shadow-card">
      <CardContent className="p-6">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={`Feed ${name}`}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 text-3xl animate-bounce-gentle">
            {emoji}
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-nature-earth mb-2">{name}</h3>
            
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-nature-earth">Available Foods:</p>
            <div className="flex flex-wrap gap-2">
              {foods.slice(0, 3).map((food, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium"
                >
                  {food}
                </span>
              ))}
              {foods.length > 3 && (
                <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                  +{foods.length - 3} more
                </span>
              )}
            </div>
          </div>
          
          <Button 
            onClick={onClick}
            variant="nature"
           className="w-full flex items-center justify-center gap-2"
          >
             Feed {name} {emoji}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;