import Navigation from "@/components/layout/Navigation"
import Hero from "@/components/sections/Hero"
import WhyUs from "@/components/sections/WhyUs"
import Services from "@/components/sections/Services"
import Results from "@/components/sections/Results"
import CTASection from "@/components/sections/CTASection"
import Footer from "@/components/layout/Footer"
import { BookingProvider, useBooking } from "@/context/BookingContext"
import BookingModal from "@/components/booking/BookingModal"

function AppContent() {
  const { isOpen, closeBooking } = useBooking();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Services />
        <Results />
        <CTASection />
        <Footer />
      </main>
      <BookingModal isOpen={isOpen} onClose={closeBooking} />
    </div>
  );
}

export function App() {
  return (
    <BookingProvider>
      <AppContent />
    </BookingProvider>
  )
}

export default App