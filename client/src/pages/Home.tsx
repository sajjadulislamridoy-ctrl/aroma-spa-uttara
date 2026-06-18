import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone, MessageCircle, Mail, MapPin, Facebook, Send } from 'lucide-react';

// Service data organized by categories
const serviceCategories = {
  massage: {
    name: 'Massage Services',
    services: [
      {
        id: 1,
        name: 'Thai Massage',
        image: 'https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3500' },
          { duration: '90 Minutes', price: '৳5000' },
          { duration: '120 Minutes', price: '৳6500' }
        ]
      },
      {
        id: 2,
        name: 'Body Massage',
        image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3000' },
          { duration: '90 Minutes', price: '৳4500' },
          { duration: '120 Minutes', price: '৳6000' }
        ]
      },
      {
        id: 3,
        name: 'Hot Stone Massage',
        image: 'https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳4000' },
          { duration: '90 Minutes', price: '৳5500' },
          { duration: '120 Minutes', price: '৳7000' }
        ]
      },
      {
        id: 4,
        name: 'Deep Tissue Massage',
        image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3500' },
          { duration: '90 Minutes', price: '৳5000' },
          { duration: '120 Minutes', price: '৳6500' }
        ]
      },
      {
        id: 5,
        name: 'Dry Massage',
        image: 'https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳2500' },
          { duration: '90 Minutes', price: '৳3500' },
          { duration: '120 Minutes', price: '৳4500' }
        ]
      },
      {
        id: 6,
        name: 'Sensual Massage',
        image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3000' },
          { duration: '90 Minutes', price: '৳4500' },
          { duration: '120 Minutes', price: '৳6000' }
        ]
      },
      {
        id: 7,
        name: 'Back & Shoulder Massage',
        image: 'https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3000' },
          { duration: '90 Minutes', price: '৳4500' },
          { duration: '120 Minutes', price: '৳6000' }
        ]
      },
      {
        id: 8,
        name: 'Oil Massage',
        image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3000' },
          { duration: '90 Minutes', price: '৳4500' },
          { duration: '120 Minutes', price: '৳6000' }
        ]
      },
      {
        id: 9,
        name: 'Nuru Massage',
        image: 'https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳4000' },
          { duration: '90 Minutes', price: '৳5500' },
          { duration: '120 Minutes', price: '৳7000' }
        ]
      },
      {
        id: 10,
        name: 'Four Hand Massage',
        image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳5000' },
          { duration: '90 Minutes', price: '৳7000' },
          { duration: '120 Minutes', price: '৳9000' }
        ]
      },
      {
        id: 11,
        name: 'Foot Reflexology',
        image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳2500' },
          { duration: '90 Minutes', price: '৳3500' },
          { duration: '120 Minutes', price: '৳4500' }
        ]
      },
      {
        id: 12,
        name: 'Thai Traditional Massage',
        image: 'https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3500' },
          { duration: '90 Minutes', price: '৳5000' },
          { duration: '120 Minutes', price: '৳6500' }
        ]
      }
    ]
  },
  wellness: {
    name: 'Wellness & Therapy',
    services: [
      {
        id: 13,
        name: 'Aroma Therapy',
        image: 'https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3500' },
          { duration: '90 Minutes', price: '৳5000' },
          { duration: '120 Minutes', price: '৳6500' }
        ]
      },
      {
        id: 14,
        name: 'Facial Treatment',
        image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳4000' },
          { duration: '90 Minutes', price: '৳5500' },
          { duration: '120 Minutes', price: '৳7000' }
        ]
      },
      {
        id: 15,
        name: 'Aroma Oil Massage',
        image: 'https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3000' },
          { duration: '90 Minutes', price: '৳4500' },
          { duration: '120 Minutes', price: '৳6000' }
        ]
      },
      {
        id: 16,
        name: 'Herbal Treatment',
        image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3500' },
          { duration: '90 Minutes', price: '৳5000' },
          { duration: '120 Minutes', price: '৳6500' }
        ]
      },
      {
        id: 17,
        name: 'Elegant Special Massage',
        image: 'https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳4000' },
          { duration: '90 Minutes', price: '৳5500' },
          { duration: '120 Minutes', price: '৳7000' }
        ]
      },
      {
        id: 18,
        name: 'Relaxation Therapy',
        image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=400&h=300&fit=crop',
        pricing: [
          { duration: '60 Minutes', price: '৳3000' },
          { duration: '90 Minutes', price: '৳4500' },
          { duration: '120 Minutes', price: '৳6000' }
        ]
      }
    ]
  }
};

const testimonials = [
  {
    name: 'Sarah Ahmed',
    role: 'Business Professional',
    text: 'Aroma Spa Uttara has been my sanctuary for stress relief. The therapists are highly professional and the ambiance is incredibly relaxing.',
    rating: 5
  },
  {
    name: 'Fatima Khan',
    role: 'Homemaker',
    text: 'The best spa experience in Uttara! Clean, hygienic, and the services are excellent. Highly recommended for everyone.',
    rating: 5
  },
  {
    name: 'Rajesh Kumar',
    role: 'Software Engineer',
    text: 'Great quality massage services at affordable prices. The staff is courteous and the facilities are top-notch.',
    rating: 5
  }
];

const faqs = [
  {
    question: 'What are your working hours?',
    answer: 'We are open from 10:00 AM to 10:00 PM, seven days a week.'
  },
  {
    question: 'Do I need to book in advance?',
    answer: 'We recommend booking in advance, especially during weekends. However, walk-ins are welcome based on availability.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 24 hours before the appointment are free. Late cancellations may incur charges.'
  },
  {
    question: 'Are your therapists certified?',
    answer: 'Yes, all our therapists are professionally trained and certified with years of experience.'
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('massage');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const currentCategory = serviceCategories[selectedCategory as keyof typeof serviceCategories];

  const handleBooking = (serviceName: string) => {
    const message = `Hi! I would like to book an appointment for ${serviceName} at Aroma Spa Uttara.`;
    const whatsappUrl = `https://wa.me/8801780821112?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/manus-storage/058a29a0-6b5c-11f1-a3cc-fbd4bae1063e(2).png" alt="Aroma Spa Logo" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Aroma Spa</h1>
              <p className="text-xs text-gray-600">Uttara</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 font-medium">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium">Contact</a>
          </div>
          <a href="https://wa.me/8801780821112?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aroma%20Spa%20Uttara." target="_blank" rel="noopener noreferrer">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Book Now</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-96 md:h-screen bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=1200&h=800&fit=crop)',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Aroma Spa Uttara</h2>
          <p className="text-xl md:text-2xl mb-8">The Ultimate Massage and Wellness Experience</p>
          <p className="max-w-2xl text-lg mb-8">At Aroma Spa Uttara, we believe that wellness is not a luxury but a necessity. Experience professional, high-quality spa and massage services in a serene sanctuary designed for your relaxation and rejuvenation.</p>
          <a href="https://wa.me/8801780821112?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aroma%20Spa%20Uttara." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8">Book Your Appointment</Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Aroma Spa Uttara</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1599447488558-b3f3e4dc5615?w=500&h=400&fit=crop" alt="Spa Interior" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-gray-700 text-lg mb-6">At Aroma Spa Uttara, we believe that wellness is not a luxury but a necessity. Our mission is to provide professional, high-quality spa and massage services that are accessible to everyone. Located in the heart of Uttara, we have created a serene sanctuary where you can escape the stress of daily life and rejuvenate your body and mind.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-amber-600 text-2xl">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Professional Team</h3>
                    <p className="text-gray-600">Certified and experienced therapists</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-amber-600 text-2xl">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Premium Quality</h3>
                    <p className="text-gray-600">High-quality products and services</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-amber-600 text-2xl">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Affordable Pricing</h3>
                    <p className="text-gray-600">Quality services at reasonable prices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Like Shanti Spa */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-lg mb-2">OUR SERVICES</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Spa & Wellness Services</h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === key
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid - 2 Columns */}
          <div className="grid md:grid-cols-2 gap-8">
            {currentCategory.services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Service info */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                      <div className="space-y-2 mb-6">
                        {service.pricing.map((price, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700">
                            <span className="text-amber-600">✓</span>
                            <span>{price.duration} - {price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => handleBooking(service.name)}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full w-fit"
                    >
                      Book Now
                    </button>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden md:block w-1 bg-amber-600"></div>

                  {/* Right side - Image */}
                  <div className="w-full md:w-48 h-48">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-600 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown className={`text-amber-600 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:01780821112" className="text-gray-700 hover:text-amber-600">01780-821112</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <a href="https://wa.me/8801780821112" className="text-gray-700 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Chat with us</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:uttaraspa1230@gmail.com" className="text-gray-700 hover:text-amber-600">uttaraspa1230@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-700">House 29, Road 3/B, Sector 09, Uttara, Dhaka 1230</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Send className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telegram</h3>
                  <a href="https://t.me/01780821112" className="text-gray-700 hover:text-amber-600" target="_blank" rel="noopener noreferrer">Message us on Telegram</a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3456789!2d90.399245!3d23.8776263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e5e5e5e5e5%3A0x0!2sAroma%20Spa%20Uttara!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Aroma Spa Uttara</h3>
              <p className="text-gray-400">Your sanctuary for wellness and relaxation in the heart of Uttara.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-amber-600">Home</a></li>
                <li><a href="#about" className="hover:text-amber-600">About</a></li>
                <li><a href="#services" className="hover:text-amber-600">Services</a></li>
                <li><a href="#contact" className="hover:text-amber-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/1BPpzxc3Jc/" className="text-gray-400 hover:text-amber-600" target="_blank" rel="noopener noreferrer">
                  <Facebook size={24} />
                </a>
                <a href="https://wa.me/8801780821112" className="text-gray-400 hover:text-amber-600" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={24} />
                </a>
                <a href="https://t.me/01780821112" className="text-gray-400 hover:text-amber-600" target="_blank" rel="noopener noreferrer">
                  <Send size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Aroma Spa Uttara. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons - Mobile */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 md:hidden z-40">
        <a href="https://wa.me/8801780821112" className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={24} />
        </a>
        <a href="tel:01780821112" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg">
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}
