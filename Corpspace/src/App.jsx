/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YdzHSWmMNiq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <HotelIcon className="w-6 h-6" />
          <span className="text-xl font-bold">Meeting Rooms</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Rooms
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            My Reservations
          </Link>
          <Button variant="secondary">
            <UserIcon className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Next Meeting</h1>
                <p className="text-muted-foreground mb-8">Find and reserve the perfect meeting room for your team.</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                  prefetch={false}
                >
                  <CalendarIcon className="w-5 h-5" />
                  View Availability
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link href="#" className="relative overflow-hidden rounded-lg group" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={320}
                    height={240}
                    alt="Meeting Room 1"
                    className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xl group-hover:bg-black/30 transition-colors">
                    Meeting Room 1
                  </div>
                </Link>
                <Link href="#" className="relative overflow-hidden rounded-lg group" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={320}
                    height={240}
                    alt="Meeting Room 2"
                    className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xl group-hover:bg-black/30 transition-colors">
                    Meeting Room 2
                  </div>
                </Link>
                <Link href="#" className="relative overflow-hidden rounded-lg group" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={320}
                    height={240}
                    alt="Meeting Room 3"
                    className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xl group-hover:bg-black/30 transition-colors">
                    Meeting Room 3
                  </div>
                </Link>
                <Link href="#" className="relative overflow-hidden rounded-lg group" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={320}
                    height={240}
                    alt="Meeting Room 4"
                    className="object-cover aspect-[4/3] group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xl group-hover:bg-black/30 transition-colors">
                    Meeting Room 4
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Check Availability</h2>
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <Calendar
                numberOfMonths={2}
                mode="range"
                className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={320}
                    height={240}
                    alt="Meeting Room 1"
                    className="object-cover aspect-[4/3] rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-2">Meeting Room 1</h3>
                  <p className="text-muted-foreground mb-4">Capacity: 8 people</p>
                  <div className="flex items-center gap-2 mb-4">
                    <WifiIcon className="w-5 h-5" />
                    <ProjectorIcon className="w-5 h-5" />
                    <ClapperboardIcon className="w-5 h-5" />
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    prefetch={false}
                  >
                    <CalendarIcon className="w-5 h-5" />
                    Book Now
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={320}
                    height={240}
                    alt="Meeting Room 2"
                    className="object-cover aspect-[4/3] rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-2">Meeting Room 2</h3>
                  <p className="text-muted-foreground mb-4">Capacity: 12 people</p>
                  <div className="flex items-center gap-2 mb-4">
                    <WifiIcon className="w-5 h-5" />
                    <ProjectorIcon className="w-5 h-5" />
                    <ClapperboardIcon className="w-5 h-5" />
                    <CoffeeIcon className="w-5 h-5" />
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    prefetch={false}
                  >
                    <CalendarIcon className="w-5 h-5" />
                    Book Now
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width={320}
                    height={240}
                    alt="Meeting Room 3"
                    className="object-cover aspect-[4/3] rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-2">Meeting Room 3</h3>
                  <p className="text-muted-foreground mb-4">Capacity: 6 people</p>
                  <div className="flex items-center gap-2 mb-4">
                    <WifiIcon className="w-5 h-5" />
                    <ProjectorIcon className="w-5 h-5" />
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    prefetch={false}
                  >
                    <CalendarIcon className="w-5 h-5" />
                    Book Now
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 Meeting Rooms. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClapperboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
      <path d="m6.2 5.3 3.1 3.9" />
      <path d="m12.4 3.4 3.1 4" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  )
}


function CoffeeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  )
}


function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  )
}


function ProjectorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function WifiIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}