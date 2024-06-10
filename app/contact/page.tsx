import Navbar from "../Navbar/page";
const ContactUs = () => {
    return (
        <>
            <Navbar />
        <div className="flex justify-center items-center min-h-screen bg-black-100">
            <section className="w-full max-w-lg mx-auto p-6 space-y-4">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p><strong>Address:</strong> 123 Company Street, City, State, Country</p>
            <p><strong>Email:</strong> info@yourcompany.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            </section>
        </div>
        </>
  );
};

export default ContactUs;
