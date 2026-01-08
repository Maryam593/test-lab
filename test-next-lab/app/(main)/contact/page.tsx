const contactPage = () => {
  return (
    <>
    <div>
        <h1 className="text-center text-5xl font-semibold text-teal-700">Get in Touch</h1>
        <p className="text-center text-[25px] text-teal-900">Have a question or need assistance? Send us a message and we'll get back to you soon.</p>
   <div className="grid grid-cols-2">
    <div></div>
 {/* form */}
 <div>
    <form className="flex flex-col p-10">
        <label className="text-teal-800 text-[10px] font-medium mb-2" htmlFor="email">Email</label>
        <input className="border border-teal-400 rounded-md p-2 mb-4" type="email" id="email" name="email" required />
        <label className="text-teal-800 text-[10px] font-medium mb-2" htmlFor="message">Message</label>
        <textarea className="border border-teal-400 rounded-md p-2 mb-4" id="message" name="message" rows={5} required></textarea>
        <button className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300 w-[200px]" type="submit">Send Message</button>
    </form>

 </div>
   </div>
    </div>
    </>
  )
}   

export default contactPage;