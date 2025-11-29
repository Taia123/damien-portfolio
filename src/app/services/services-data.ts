export interface ServicePlan {
  title: string;
  price: string;
  buttonText: string;
  features: string[];
}

export interface ServiceSection {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkText: string;
  linkUrl: string;
  plans: ServicePlan[];
}

export const SERVICES_SECTIONS: ServiceSection[] = [
  {
    title: 'PORTRAIT PHOTOGRAPHY',
    description:
      'Our portrait photography services are all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self.',
    image: '/blonde.png',
    imageAlt: 'Portrait example',
    linkText: 'VIEW PROJECTS',
    linkUrl: '/portfolio',
    plans: [
      {
        title: 'Individual Session',
        price: '$250',
        buttonText: 'BOOK A CALL',
        features: [
          'Ideal for capturing your unique personality and style.',
          'Includes a 2-hour photoshoot and 20 professionally edited images.',
          'Additional images can be purchased at $10 each.',
        ],
      },
      {
        title: 'Family Session',
        price: '$400',
        buttonText: 'BOOK A CALL',
        features: [
          'Perfect for creating lasting memories with your loved ones.',
          'Includes a 3-hour photoshoot and 30 professionally edited images.',
          'Additional images can be purchased at $10 each.',
        ],
      },
      {
        title: 'Couple Session',
        price: '$300',
        buttonText: 'BOOK A CALL',
        features: [
          'Celebrate your love story with an intimate photoshoot.',
          'Includes a 2.5-hour photoshoot and 25 professionally edited images.',
          'Additional images can be purchased at $10 each.',
        ],
      },
    ],
  },
  {
    title: 'EVENTS PHOTOGRAPHY',
    description:
      'Our event photography services are dedicated to capturing the magic of your special occasions. Whether it’s a wedding, corporate event, or milestone celebration, we’re there to document every heartfelt moment.',
    image: '/church.png',
    imageAlt: 'Event example',
    linkText: 'VIEW PROJECTS',
    linkUrl: '/portfolio',
    plans: [
      {
        title: 'Wedding Photography',
        price: '$1,500',
        buttonText: 'BOOK A CALL',
        features: [
          'Capture the magic of your special day.',
          'Includes full-day coverage, a second photographer, and 300+ professionally edited images.',
          'Customizable packages are available to suit your specific wedding needs.',
        ],
      },
      {
        title: 'Party Coverage',
        price: '$800',
        buttonText: 'BOOK A CALL',
        features: [
          'Preserve the fun and excitement of your event.',
          'Includes up to 4 hours of coverage and 150+ professionally edited images.',
          'Additional hours can be added at $150 per hour.',
        ],
      },
      {
        title: 'Corporate Events',
        price: 'Custom Pricing',
        buttonText: 'BOOK A CALL',
        features: [
          'Tailored solutions for corporate gatherings, conferences, and seminars.',
          'Contact us for a personalized quote based on your event’s requirements.',
        ],
      },
    ],
  },
  {
    title: 'COMMERCIAL PHOTOGRAPHY',
    description:
      'We offer commercial photography that captures the essence of a product or service. From product launches to marketing shoots, our goal is to present your brand in the most compelling light.',
    image: '/parfume.png',
    imageAlt: 'Commercial example',
    linkText: 'VIEW PROJECTS',
    linkUrl: '/portfolio',
    plans: [
      {
        title: 'Product Photography',
        price: '$500',
        buttonText: 'BOOK A CALL',
        features: [
          'Showcase your products in the best light.',
          'Includes a half-day photoshoot, 20 professionally edited product images, and high-resolution files.',
          'Additional images can be purchased at $20 each.',
        ],
      },
      {
        title: 'Real Estate Photography',
        price: '$700',
        buttonText: 'BOOK A CALL',
        features: [
          'Highlight the beauty of your properties.',
          'Includes interior and exterior shots, a 2-hour photoshoot, and 25 professionally edited images.',
          'Additional images can be purchased at $20 each.',
        ],
      },
      {
        title: 'Brand Photography',
        price: 'Custom Pricing',
        buttonText: 'BOOK A CALL',
        features: [
          'Craft a visual narrative that aligns with your brand identity.',
          'Contact us to discuss your brand photography needs and receive a personalized quote.',
        ],
      },
    ],
  }
];
