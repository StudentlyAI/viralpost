import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  onSubscribe: () => void;
  isCurrentPlan?: boolean;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  onSubscribe,
  isCurrentPlan,
}: PricingCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 flex-1">
        <div className="text-3xl font-bold">
          £{price}
          <span className="text-sm font-normal text-muted-foreground">/month</span>
        </div>
        <ul className="space-y-2 text-sm">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={isCurrentPlan ? "secondary" : "default"}
          onClick={onSubscribe}
          disabled={isCurrentPlan}
        >
          {isCurrentPlan ? 'Current Plan' : 'Subscribe'}
        </Button>
      </CardFooter>
    </Card>
  );
}