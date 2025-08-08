export default function Contact() {
  return (
    <div className="bg-beige">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
        <p className="mb-6">
          Ready to make your event magical? Reach out today!
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-secondary font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-accent rounded focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-secondary font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-accent rounded focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-secondary font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-accent rounded h-24 focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-accent">
            Other Ways to Reach Us
          </h2>
          <p className="mt-2">Email: events@balloonarch.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}
