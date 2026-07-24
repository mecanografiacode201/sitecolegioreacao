import React from 'react';

// World Cup Brazil Color Palette
export const WORLDCUP_COLORS = [
  '#009B3A', // Brazil Green
  '#FFDF00', // Brazil Yellow
  '#002776', // Brazil Blue
  '#FFFFFF', // White
];

// Helper to keep old reference compatible
const FLAG_COLORS = WORLDCUP_COLORS;

// Custom Soccer Ball SVG
export const SoccerBallSvg: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg 
    viewBox="0 0 100 100" 
    width={size} 
    height={size} 
    className={`drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] ${className}`}
  >
    {/* Ball background */}
    <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#002776" strokeWidth="4.5" />
    
    {/* Pentagonal center */}
    <polygon points="50,34 63,44 58,59 42,59 37,44" fill="#002776" />
    
    {/* Radiating lines connecting pentagons */}
    <line x1="50" y1="34" x2="50" y2="10" stroke="#002776" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="63" y1="44" x2="85" y2="38" stroke="#002776" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="58" y1="59" x2="72" y2="79" stroke="#002776" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="42" y1="59" x2="28" y2="79" stroke="#002776" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="37" y1="44" x2="15" y2="38" stroke="#002776" strokeWidth="4.5" strokeLinecap="round" />
    
    {/* Outer boundary lines for panels */}
    <path d="M50,10 L28,17 L15,38 M50,10 L72,17 L85,38 M85,38 L87,60 L72,79 M72,79 L50,89 L28,79 M28,79 L13,60 L15,38" stroke="#002776" strokeWidth="4.5" fill="none" strokeLinecap="round" />
    
    {/* Decorative Green & Yellow panel fills to scream World Cup! */}
    <polygon points="50,10 28,17 37,44 50,34" fill="#009B3A" opacity="0.25" />
    <polygon points="50,10 72,17 63,44 50,34" fill="#FFDF00" opacity="0.25" />
    <polygon points="85,38 87,60 72,79 58,59 63,44" fill="#009B3A" opacity="0.25" />
    <polygon points="15,38 13,60 28,79 42,59 37,44" fill="#FFDF00" opacity="0.25" />
    <polygon points="72,79 50,89 28,79 42,59 58,59" fill="#002776" opacity="0.15" />
  </svg>
);

// Custom World Cup Trophy SVG
export const TrophySvg: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg 
    viewBox="0 0 100 100" 
    width={size} 
    height={size} 
    className={`drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] ${className}`}
  >
    {/* Base with Green & Yellow details */}
    <rect x="32" y="82" width="36" height="10" rx="3" fill="#002776" stroke="#009B3A" strokeWidth="1.5" />
    <rect x="26" y="90" width="48" height="6" rx="2" fill="#1e293b" />
    
    {/* Trophy Pillars representing hands holding the globe (FIFA style) */}
    <path d="M38,82 L42,60 L58,60 L62,82 Z" fill="#FFDF00" stroke="#ca8a04" strokeWidth="1.5" />
    
    {/* Elegant green band on the support */}
    <rect x="42" y="70" width="16" height="4" fill="#009B3A" />
    
    {/* Main Cup body & silhouette of stylized player figures holding up the globe */}
    <path d="M42,60 C36,46 34,36 42,22 C45,17 55,17 58,22 C66,36 64,46 58,60 Z" fill="#FFDF00" stroke="#ca8a04" strokeWidth="1.5" />
    
    {/* The golden globe at the top */}
    <circle cx="50" cy="18" r="14" fill="#FFDF00" stroke="#ca8a04" strokeWidth="2" />
    
    {/* Stylized detailing showing the geographical globe relief lines */}
    <path d="M42,12 C46,16 54,16 58,12" stroke="#ca8a04" strokeWidth="1.5" fill="none" />
    <path d="M38,18 C44,23 56,23 62,18" stroke="#ca8a04" strokeWidth="1.5" fill="none" />
    <path d="M42,24 C46,21 54,21 58,24" stroke="#ca8a04" strokeWidth="1.5" fill="none" />
    
    {/* Stylized figures curves in green/blue */}
    <path d="M37,34 C41,38 46,28 50,18" stroke="#009B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M63,34 C59,38 54,28 50,18" stroke="#009B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
    
    {/* Shining sparkles */}
    <path d="M22,15 L26,19 M26,15 L22,19" stroke="#FFDF00" strokeWidth="2" strokeLinecap="round" />
    <path d="M74,15 L78,19 M78,15 L74,19" stroke="#FFDF00" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Custom Gold Champion Star SVG
export const StarSvg: React.FC<{ size?: number; className?: string; color?: string }> = ({ size = 24, className = '', color = '#FFDF00' }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={`drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] ${className}`}
  >
    <polygon 
      points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" 
      fill={color} 
      stroke="#ca8a04" 
      strokeWidth="1.2" 
    />
  </svg>
);

// High fidelity hanging Brazil flag SVG
export const BrazilFlagSvg: React.FC<{ size?: number; type?: 'triangle' | 'swallowtail'; color?: string; className?: string }> = ({ 
  size = 36, 
  type = 'swallowtail', 
  color = '#009B3A', 
  className = '' 
}) => {
  const width = size;
  const height = Math.round(size * 1.3);

  // Determine diamond color (alternate to create awesome contrast)
  const diamondColor = color === '#009B3A' ? '#FFDF00' : '#009B3A';

  return (
    <div 
      className={`inline-block select-none ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg 
        viewBox="0 0 100 130" 
        width="100%" 
        height="100%" 
        className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] filter"
      >
        {type === 'triangle' ? (
          <polygon points="0,0 100,0 50,130" fill={color} />
        ) : (
          <polygon points="0,0 100,0 100,130 50,105 0,130" fill={color} />
        )}
        
        {/* Yellow/Green Diamond in the center */}
        {type === 'triangle' ? (
          <polygon points="50,18 80,45 50,72 20,45" fill={diamondColor} />
        ) : (
          <polygon points="50,18 82,50 50,82 18,50" fill={diamondColor} />
        )}

        {/* Blue Circle representing the globe of Brazil flag */}
        {type === 'triangle' ? (
          <circle cx="50" cy="45" r="16" fill="#002776" />
        ) : (
          <circle cx="50" cy="50" r="18" fill="#002776" />
        )}

        {/* Curved White Banner inside blue circle */}
        {type === 'triangle' ? (
          <path d="M37,48 Q50,40 63,48" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        ) : (
          <path d="M35,53 Q50,45 65,53" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        )}

        {/* Stars inside blue circle */}
        <circle cx="46" cy="51" r="1.2" fill="#FFFFFF" />
        <circle cx="54" cy="55" r="1.2" fill="#FFFFFF" />
        <circle cx="50" cy="46" r="1" fill="#FFFFFF" />
        <circle cx="44" cy="55" r="0.8" fill="#FFFFFF" />
        <circle cx="56" cy="49" r="0.8" fill="#FFFFFF" />

        {/* Realistic highlight fold showing light source */}
        <polygon points="0,0 15,0 7,130" fill="rgba(255, 255, 255, 0.15)" />
        {/* Top shadow fold */}
        <rect x="0" y="0" width="100" height="12" fill="rgba(0,0,0,0.1)" />
      </svg>
    </div>
  );
};

interface FlagProps {
  color: string;
  type: string;
  className?: string;
  delay?: string;
  size?: number;
  style?: React.CSSProperties;
}

// Maps Festa Junina flags directly to World Cup items
export const FestaJuninaFlag: React.FC<FlagProps> = ({ 
  color, 
  type, 
  className = '', 
  delay = '0s', 
  size = 40, 
  style = {} 
}) => {
  const width = size;
  const height = Math.round(size * 1.3);

  // Map different colors/modulos to specific World Cup assets
  if (color === '#002776') {
    // Blue mapped to Soccer Ball
    return (
      <div 
        className={`inline-block select-none origin-center transition-transform hover:scale-115 ${className}`}
        style={{ 
          animationName: 'worldcup-sway',
          animationDuration: '4s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
          animationDelay: delay,
          width: `${width}px`,
          height: `${width}px`,
          ...style
        }}
      >
        <SoccerBallSvg size={width} className="animate-pulse" />
      </div>
    );
  }

  if (color === '#FFFFFF') {
    // White mapped to Trophy
    return (
      <div 
        className={`inline-block select-none origin-center transition-transform hover:scale-115 ${className}`}
        style={{ 
          animationName: 'worldcup-bounce',
          animationDuration: '3.5s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
          animationDelay: delay,
          width: `${width}px`,
          height: `${height}px`,
          ...style
        }}
      >
        <TrophySvg size={width} />
      </div>
    );
  }

  // Green (#009B3A) & Yellow (#FFDF00) mapped to highly detailed Brazil flags!
  return (
    <div 
      className={`inline-block select-none origin-top transition-transform hover:scale-115 ${className}`}
      style={{ 
        animationName: 'worldcup-sway',
        animationDuration: '3s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        animationDelay: delay,
        width: `${width}px`,
        height: `${height}px`,
        ...style
      }}
    >
      <BrazilFlagSvg 
        size={width} 
        type={type === 'triangle' ? 'triangle' : 'swallowtail'} 
        color={color} 
      />
    </div>
  );
};

interface HangingGarlandProps {
  className?: string;
  flagCount?: number;
  flagSize?: number;
}

// Renders the horizontal hanging line of World Cup items
export const HangingGarland: React.FC<HangingGarlandProps> = ({ 
  className = '', 
  flagCount = 14, 
  flagSize = 36 
}) => {
  return (
    <div className={`hidden md:block relative w-full overflow-hidden pointer-events-none select-none z-30 ${className}`}>
      {/* Decorative hanging string */}
      <svg 
        className="absolute top-0 left-0 w-full h-16 text-yellow-500/20" 
        viewBox="0 0 1000 100" 
        preserveAspectRatio="none"
      >
        <path 
          d="M 0,0 Q 250,55 500,65 T 1000,0" 
          fill="transparent" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeDasharray="4,4"
        />
      </svg>

      {/* Flag line container */}
      <div className="flex justify-around items-start w-full px-4 pt-1 pb-10">
        {Array.from({ length: flagCount }).map((_, index) => {
          const color = FLAG_COLORS[index % FLAG_COLORS.length];
          const type = index % 2 === 0 ? 'triangle' : 'swallowtail';
          
          // Center sag curve formula
          const centerFactor = Math.abs(index - (flagCount - 1) / 2) / ((flagCount - 1) / 2);
          const sagOffset = Math.round((1 - centerFactor * centerFactor) * 20);
          const delay = `${(index * 0.23).toFixed(2)}s`;

          return (
            <FestaJuninaFlag
              key={index}
              color={color}
              type={type}
              size={flagSize}
              delay={delay}
              className="transform"
              style={{
                marginTop: `${sagOffset}px`
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes worldcup-sway {
          0% { transform: rotate(-8deg); }
          50% { transform: rotate(3deg) scaleY(0.98); }
          100% { transform: rotate(8deg); }
        }
        @keyframes worldcup-bounce {
          0% { transform: translateY(0px) rotate(-4deg); }
          100% { transform: translateY(-8px) rotate(4deg); }
        }
      `}</style>
    </div>
  );
};

// Renders corner-hanging sidewalk garlands for section borders
export const SidewalkGarland: React.FC<{ side: 'left' | 'right', className?: string }> = ({ side, className = '' }) => {
  const flags = [
    { color: FLAG_COLORS[0], type: 'triangle', size: 28 }, // Green Flag
    { color: FLAG_COLORS[1], type: 'swallowtail', size: 32 }, // Yellow Flag
    { color: FLAG_COLORS[2], type: 'triangle', size: 26 }, // Soccer Ball
    { color: FLAG_COLORS[3], type: 'swallowtail', size: 28 }, // Trophy
    { color: FLAG_COLORS[0], type: 'triangle', size: 24 }, // Green Flag
  ];

  return (
    <div 
      className={`absolute top-0 pointer-events-none select-none z-20 ${
        side === 'left' ? 'left-0 origin-top-left -ml-2' : 'right-0 origin-top-right -mr-2'
      } ${className}`}
    >
      <div className={`flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-0.5 pt-2`}>
        {flags.map((flag, idx) => {
          const sagValue = idx * 6;
          const delay = `${(idx * 0.3).toFixed(2)}s`;
          return (
            <div 
              key={idx} 
              style={{ transform: `translateY(${sagValue}px)` }}
              className="transition-transform duration-300"
            >
              <FestaJuninaFlag 
                color={flag.color} 
                type={flag.type} 
                size={flag.size} 
                delay={delay} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Floating background single World Cup item that drifts gracefully
export const DriftingBandeirinha: React.FC<{ top: string; left?: string; right?: string; delay?: number }> = ({
  top,
  left,
  right,
  delay = 0,
}) => {
  // Randomly pick a color/item
  const randomColor = FLAG_COLORS[Math.floor(Math.random() * FLAG_COLORS.length)];
  const randomType = Math.random() > 0.5 ? 'triangle' : 'swallowtail';
  
  // Random sizing
  const size = Math.floor(Math.random() * 8) + 24;

  return (
    <div
      className="absolute pointer-events-none select-none z-15 opacity-80 md:opacity-100 scale-75 md:scale-100"
      style={{
        top,
        left: left ? left : undefined,
        right: right ? right : undefined,
        animationName: 'worldcup-drift',
        animationDuration: '9s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        animationDelay: `${delay}s`,
      }}
    >
      <FestaJuninaFlag 
        color={randomColor} 
        type={randomType} 
        size={size} 
        delay={`${delay}s`} 
      />
    </div>
  );
};

// Global background decoration overlay featuring scattered soccer balls, trophies, and flags
export const FestaJuninaGlobalDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <style>{`
        @keyframes worldcup-drift {
          0% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(10deg) translateX(10px); }
          100% { transform: translateY(-30px) rotate(-10deg) translateX(-10px); }
        }
      `}</style>
      
      {/* Dynamic drifting elements distributed all the way down the page */}
      <DriftingBandeirinha top="2%" left="1rem" delay={0.5} />
      <DriftingBandeirinha top="5%" right="1.5rem" delay={2.1} />
      <DriftingBandeirinha top="8%" left="1.2rem" delay={1.2} />
      <DriftingBandeirinha top="12%" right="2rem" delay={3.4} />
      <DriftingBandeirinha top="16%" left="0.8rem" delay={0.8} />
      <DriftingBandeirinha top="20%" right="1.5rem" delay={4.0} />

      <DriftingBandeirinha top="25%" left="2rem" delay={1.5} />
      <DriftingBandeirinha top="30%" right="1rem" delay={2.7} />
      <DriftingBandeirinha top="35%" left="1.5rem" delay={0.3} />
      <DriftingBandeirinha top="39%" right="2.5rem" delay={3.9} />

      <DriftingBandeirinha top="45%" left="1.2rem" delay={1.9} />
      <DriftingBandeirinha top="50%" right="1.8rem" delay={2.4} />
      <DriftingBandeirinha top="55%" left="2rem" delay={0.9} />
      <DriftingBandeirinha top="60%" right="1.3rem" delay={4.2} />

      <DriftingBandeirinha top="65%" left="1.5rem" delay={1.7} />
      <DriftingBandeirinha top="70%" right="2rem" delay={3.1} />
      <DriftingBandeirinha top="75%" left="2.2rem" delay={0.6} />
      <DriftingBandeirinha top="80%" right="1.1rem" delay={2.3} />

      <DriftingBandeirinha top="84%" left="1rem" delay={1.1} />
      <DriftingBandeirinha top="88%" right="1.6rem" delay={3.7} />
      <DriftingBandeirinha top="92%" left="2rem" delay={0.4} />
      <DriftingBandeirinha top="96%" right="1.2rem" delay={2.8} />
      <DriftingBandeirinha top="98%" left="1.8rem" delay={1.5} />
    </div>
  );
};
