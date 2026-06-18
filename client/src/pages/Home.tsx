import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Mail, MessageCircle, Send, Star, ChevronDown, ChevronUp, Facebook } from "lucide-react";

const LOGO_IMAGE = "/manus-storage/058a29a0-6b5c-11f1-a3cc-fbd4bae1063e(2)_42afc896.png";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/hero-banner-5pmpKe6W4qykgycDebMVoH.webp";

const SERVICES = [
  {
    id: 1,
    name: "Thai Massage",
    description: "Traditional Thai massage therapy for deep relaxation and muscle tension relief",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/thai-massage-Xdvy6EKxXRVL3ParxpYx5x.webp",
    pricing: [
      { duration: "60 Minutes", price: "৳2,500" },
      { duration: "90 Minutes", price: "৳3,500" },
      { duration: "120 Minutes", price: "৳4,500" }
    ]
  },
  {
    id: 2,
    name: "Aroma Therapy",
    description: "Therapeutic aromatherapy with essential oils for stress relief and wellness",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/aroma-therapy-SgJeeuzoR7nQxeSMfAYW4b.webp",
    pricing: [
      { duration: "60 Minutes", price: "৳2,000" },
      { duration: "90 Minutes", price: "৳3,000" },
      { duration: "120 Minutes", price: "৳4,000" }
    ]
  },
  {
    id: 3,
    name: "Hot Stone Massage",
    description: "Relaxing massage with heated therapeutic stones for deep muscle relaxation",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/hot-stone-massage-TokuRRdRwDUZRoVmAVTL6i.webp",
    pricing: [
      { duration: "60 Minutes", price: "৳2,800" },
      { duration: "90 Minutes", price: "৳4,000" },
      { duration: "120 Minutes", price: "৳5,200" }
    ]
  },
  {
    id: 4,
    name: "Foot Reflexology",
    description: "Therapeutic foot massage and reflexology treatment for overall wellness",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/foot-reflexology-JPCrix97G77deipqZ3g7Rs.webp",
    pricing: [
      { duration: "60 Minutes", price: "৳1,800" },
      { duration: "90 Minutes", price: "৳2,500" },
      { duration: "120 Minutes", price: "৳3,200" }
    ]
  },
  {
    id: 5,
    name: "Facial Treatment",
    description: "Professional facial care and skincare treatment for rejuvenation",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/facial-treatment-iRXbTiJ9U3Lf5fD5G4x6S8.webp",
    pricing: [
      { duration: "60 Minutes", price: "৳2,200" },
      { duration: "90 Minutes", price: "৳3,200" },
      { duration: "120 Minutes", price: "৳4,200" }
    ]
  },
  {
    id: 6,
    name: "Body Massage",
    description: "Full body relaxation and therapeutic massage for complete wellness",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663774431221/LT5ZWTzwr2FoeyCjZuGkmK/body-massage-TbmaaxPgY75GqngiZcpVtC.webp",
    pricing: [
      { duration: "60 Minutes", price: "৳2,500" },
      { duration: "90 Minutes", price: "৳3,500" },
      { duration: "120 Minutes", price: "৳4,500" }
    ]
  }
];

const TESTIMONIALS = [
  {
    name: "Fatima Ahmed",
    profession: "Business Owner",
    text: "Aroma Spa Uttara is my sanctuary. The therapists are highly skilled and the environment is incredibly peaceful. Highly recommended!",
    rating: 5
  },
  {
    name: "Karim Hassan",
    profession: "Software Engineer",
    text: "Best massage experience in Uttara. Professional staff, clean facilities, and reasonable prices. Will definitely come back.",
    rating: 5
  },
  {
    name: "Nusrat Jahan",
    profession: "Homemaker",
    text: "Very calm environment and excellent service. I feel completely relaxed after every session. Great value for money.",
    rating: 5
  }
];

const WHY_CHOOSE_US = [
  {
    title: "Professional Therapists",
    description: "Highly trained and experienced therapists with expertise in various massage and wellness techniques"
  },
  {
    title: "Clean & Hygienic",
    description: "Maintained to the highest standards of cleanliness and hygiene for your safety and comfort"
  },
  {
    title: "Affordable Pricing",
    description: "Premium quality services at reasonable prices accessible to everyone"
  },
  {
    title: "Peaceful Environment",
    description: "Serene and calming atmosphere designed for ultimate relaxation and wellness"
  },
  {
    title: "Convenient Location",
    description: "Located in the heart of Uttara with easy access and ample parking"
  },
  {
    title: "Personalized Service",
    description: "Customized treatments tailored to your individual needs and preferences"
  }
];

const FAQS = [
  {
    question: "What are your operating hours?",
    answer: "We are open daily from 10:00 AM to 10:00 PM. For special requests or appointments outside these hours, please contact us."
  },
  {
    question: "Do I need to book in advance?",
    answer: "While walk-ins are welcome, we recommend booking in advance to ensure availability and avoid waiting time."
  },
  {
    question: "What should I wear?",
    answer: "Wear comfortable, loose-fitting clothing. We provide robes and towels for your comfort during the treatment."
  },
  {
    question: "Are there any health conditions I should inform you about?",
    answer: "Yes, please inform our staff about any injuries, allergies, or medical conditions before your treatment begins."
  },
  {
    question: "Can I reschedule my appointment?",
    answer: "Yes, you can reschedule up to 24 hours before your appointment. Please contact us for rescheduling."
  },
  {
    question: "Do you offer group packages or discounts?",
    answer: "Yes, we offer special packages for groups and regular customers. Contact us for more details."
  }
];

export default function Home() {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.service || !bookingForm.date || !bookingForm.time) {
      alert("Please fill in all required fields");
      return;
    }

    const message = `🌟 *Booking Request from Aroma Spa Website* 🌟\n\n*Name:* ${bookingForm.name}\n*Phone:* ${bookingForm.phone}\n*Service:* ${bookingForm.service}\n*Date:* ${bookingForm.date}\n*Time:* ${bookingForm.time}\n${bookingForm.message ? `*Message:* ${bookingForm.message}` : ""}`;
    const whatsappUrl = `https://wa.me/8801780821112?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setBookingSuccess(true);
    setBookingForm({ name: "", phone: "", service: "", date: "", time: "", message: "" });
    setTimeout(() => setBookingSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMAGE} alt="Aroma Spa Uttara" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Aroma Spa</h1>
              <p className="text-xs text-gray-600">Uttara</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition">About</a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition">Services</a>
            <a href="#booking" className="text-gray-700 hover:text-amber-600 transition">Booking</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700">
            <a href="https://wa.me/8801780821112" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section with Overlay */}
      <section id="home" className="relative h-96 md:h-[500px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Spa Treatment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Welcome to Aroma Spa Uttara
            </h2>
            <p className="text-lg md:text-xl text-white/95 mb-4">
              The Ultimate Massage and Wellness Experience
            </p>
            <p className="text-base md:text-lg text-white/90 mb-8">
              At Aroma Spa Uttara, we believe that wellness is not a luxury but a necessity. Experience professional, high-quality spa and massage services in a serene sanctuary designed for your relaxation and rejuvenation.
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-base md:text-lg px-8 py-6">
              <a href="#booking">Book Your Appointment</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Aroma Spa Uttara</h2>
            <p className="text-lg text-gray-600">
              At Aroma Spa Uttara, we believe that wellness is not a luxury but a necessity. Our mission is to provide professional, high-quality spa and massage services that are accessible to everyone. Located in the heart of Uttara, we have created a serene sanctuary where you can escape the stress of daily life and rejuvenate your body and mind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-600">Professional Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Experienced and trained therapists dedicated to your wellness journey.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-600">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">High-quality products and equipment ensure the best spa experience.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-600">Affordable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Luxury services at reasonable prices within everyone's budget.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Discover our comprehensive range of professional spa and wellness treatments</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition">
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover" loading="lazy" />
                <CardHeader>
                  <CardTitle className="text-amber-600">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.pricing.map((price, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-600">{price.duration}</span>
                        <span className="font-semibold text-gray-900">{price.price}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                    <a href="https://wa.me/8801780821112" target="_blank" rel="noopener noreferrer">
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">Experience the difference with our professional and caring approach</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-amber-600">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real experiences from our valued customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.profession}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <Card key={idx} className="cursor-pointer" onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  {expandedFAQ === idx ? <ChevronUp /> : <ChevronDown />}
                </CardHeader>
                {expandedFAQ === idx && (
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
              <p className="text-lg text-gray-600">Fill out the form below and we will confirm your booking via WhatsApp</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                {bookingSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    ✓ Your booking request has been sent to WhatsApp. We will contact you shortly!
                  </div>
                )}
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <Input
                      name="name"
                      value={bookingForm.name}
                      onChange={handleBookingChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleBookingChange}
                      placeholder="01780-821112"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
                    <select
                      name="service"
                      value={bookingForm.service}
                      onChange={handleBookingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Choose a service</option>
                      {SERVICES.map(service => (
                        <option key={service.id} value={service.name}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <Input
                        name="date"
                        type="date"
                        value={bookingForm.date}
                        onChange={handleBookingChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                      <Input
                        name="time"
                        type="time"
                        value={bookingForm.time}
                        onChange={handleBookingChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <Textarea
                      name="message"
                      value={bookingForm.message}
                      onChange={handleBookingChange}
                      placeholder="Any special requests or notes..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Booking to WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">We are always ready to hear from you. Contact us anytime.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Phone className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:01780821112" className="text-amber-600 hover:text-amber-700 font-semibold">
                  01780-821112
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://wa.me/8801780821112" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold">
                  Chat with Us
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mail className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:uttaraspa1230@gmail.com" className="text-amber-600 hover:text-amber-700 font-semibold">
                  uttaraspa1230@gmail.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Facebook className="w-8 h-8 text-amber-600 mb-2" />
                <CardTitle>Facebook</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://www.facebook.com/share/1BPpzxc3Jc/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold">
                  Follow Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <div className="max-w-2xl mx-auto text-gray-600 mb-8">
              <p className="text-lg font-semibold text-gray-900">Aroma Spa Uttara</p>
              <p>House 29, Road 3/B, Sector 09</p>
              <p>Uttara, Dhaka 1230, Bangladesh</p>
            </div>
          </div>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.9524485432!2d90.39924!3d23.8776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b8d8d8d8d9%3A0x1234567890!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Aroma Spa Uttara</h3>
              <p className="text-gray-400">Your sanctuary for wellness and relaxation in Uttara.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#booking" className="hover:text-white transition">Booking</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:01780821112" className="hover:text-white transition">01780-821112</a></li>
                <li><a href="mailto:uttaraspa1230@gmail.com" className="hover:text-white transition">uttaraspa1230@gmail.com</a></li>
                <li>House 29, Road 3/B, Sector 09, Uttara</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.facebook.com/share/1BPpzxc3Jc/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook</a></li>
                <li><a href="https://wa.me/8801780821112" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a></li>
                <li><a href="https://t.me/01780821112" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Aroma Spa Uttara. All rights reserved. | Professional Wellness and Massage Center</p>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 md:hidden z-40">
        <a
          href="https://wa.me/8801780821112"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition"
          title="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:01780821112"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition"
          title="Call"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href="#booking"
          className="bg-amber-600 hover:bg-amber-700 text-white rounded-full p-4 shadow-lg transition"
          title="Book"
        >
          <Send className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
