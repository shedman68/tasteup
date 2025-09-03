import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'LUNCH-CHECK +',
      logo: 'LUNCH-CHECK +',
      description: 'Corporate Benefits'
    },
    {
      name: 'STARTUP ACADEMY SCHWEIZ',
      logo: 'STARTUP ACADEMY SCHWEIZ',
      description: 'Startup Support'
    },
    {
      name: 'KAFKA',
      logo: 'KAFKA',
      description: 'Event Venue'
    },
    {
      name: 'Basel Eats',
      logo: 'Basel Eats',
      description: 'Food Community'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f1e9de]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#28184a]">
          Unsere Partner
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-[#28184a]">
                    {partner.logo}
                  </div>
                </div>
                <p className="text-sm text-[#28184a]/70 font-medium">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
