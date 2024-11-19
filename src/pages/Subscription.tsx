import { useAuthStore } from '@/stores/useAuthStore';
import { PricingCard } from '@/components/subscription/PricingCard';

const PLANS = {
  free: {
    title: 'Free',
    price: 0,
    description: 'Perfect for trying out ViralPostAI',
    features: [
      '5 posts per month',
      'Basic platforms (Twitter, Facebook)',
      'Standard AI generation'
    ]
  },
  pro: {
    title: 'Professional',
    price: 29.99,
    description: 'For content creators and small businesses',
    features: [
      '100 posts per month',
      'All platforms',
      'Advanced AI generation',
      'Analytics dashboard'
    ]
  },
  business: {
    title: 'Business',
    price: 99.99,
    description: 'For agencies and large teams',
    features: [
      'Unlimited posts',
      'All platforms',
      'Priority AI generation',
      'Advanced analytics',
      'API access'
    ]
  }
};

export function Subscription() {
  const { user } = useAuthStore();

  const handleSubscribe = async (plan: string) => {
    // TODO: Implement Stripe checkout
    console.log('Subscribe to plan:', plan);
  };

  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-muted-foreground">
          Select the perfect plan for your social media needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {Object.entries(PLANS).map(([key, plan]) => (
          <PricingCard
            key={key}
            {...plan}
            onSubscribe={() => handleSubscribe(key)}
            isCurrentPlan={user?.subscription_tier === key}
          />
        ))}
      </div>
    </div>
  );
}