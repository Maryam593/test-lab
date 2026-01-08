"use client"
import Lottie from "react-lottie-player"
import { useEffect, useState } from "react"

const ContactPage = () => {
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    fetch("/doodle-color-7-service-hover-pinch.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
  }, [])

  return (
    <div>
      <h1 className="text-center text-5xl font-semibold text-teal-700">Get in Touch</h1>
      <p className="text-center text-[25px] text-teal-900">
        Have a question or need assistance? Send us a message and we'll get back to you soon.
      </p>

      <div className="mt-10 ml-10 mr-10 mb-10 grid grid-cols-[1fr_auto_1.5fr] gap-10 items-start">

        {/* left section */}
        <div className="flex flex-col gap-4 text-[10px]">
          {animationData && (
            <Lottie animationData={animationData} loop={true} />
          )}
          <h2 className="text-teal-800 text-xl font-semibold">Reelio</h2>
          <p className="text-teal-600 text-sm">
            Helping creators and brands connect smarter, faster, and better.
          </p>
        </div>

        {/* divider */}
        <div className="w-px h-full bg-teal-600/40"></div>

        {/* form */}
        <form className="flex flex-col p-2">
          <label className="text-teal-800 text-xs font-medium mb-1" htmlFor="email">Email</label>
          <input
            className="border border-teal-400 rounded-md p-2 mb-4"
            type="email"
            id="email"
            name="email"
            required
          />
          <label className="text-teal-800 text-xs font-medium mb-1" htmlFor="message">Message</label>
          <textarea
            className="border border-teal-400 rounded-md p-2 mb-4"
            id="message"
            name="message"
            rows={5}
            required
          />
          <button
            className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300 w-[200px]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
