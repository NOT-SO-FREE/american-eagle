import { Heart, Gift, Gem, Droplets, Flower2 } from 'lucide-react';

const steps = [
  {
    icon: Heart,
    text: 'Click the "Start Review" button',
  },
  {
    icon: Gift,
    text: 'Enter your email and basic details',
  },
  {
    icon: Gem,
    text: 'Answer the required questions',
  },
  {
    icon: Droplets,
    text: 'Complete 4–5 partner offers',
  },
  {
    icon: Flower2,
    text: 'Unlock Aerie Rewards',
  },
];

const StepsCard = () => {
  return (
    <div className="relative rounded-lg mb-2 border border-primary/40 bg-white/90 shadow-[0_18px_60px_rgba(19,44,76,0.08)] overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/aerie-background.jpeg')",
          opacity: 0.1,
        }}
      />

      <ol className="relative z-10 text-left space-y-1 text-foreground p-2.5 !text-base !rounded-none">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li
              key={index}
              className="flex items-start gap-1.5 text-[13px] md:text-sm"
            >
              <span
                className="flex-shrink-0 w-4 h-4 text-white rounded-full flex items-center justify-center font-bold text-[9px] mt-0.5"
                style={{ backgroundColor: '#132c4c' }}
              >
                {index + 1}
              </span>
              <div className="flex items-center gap-1 flex-1">
                <span className="flex-shrink-0 text-primary">
                  <Icon className="w-2.5 h-2.5" />
                </span>
                <span className="text-[#1b2f4a] font-medium">{step.text}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default StepsCard;
