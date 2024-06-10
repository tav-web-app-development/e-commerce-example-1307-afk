import Navbar from "../Navbar/page";

const AboutUsPage = () => {
    return (
    <>
    <Navbar />
    <div className="flex justify-center items-center min-h-screen bg-black-100">
      <main className="text-center max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">About Us</h1>
        <p className="mb-4">This is a brief description of our company. We provide excellent services and products.</p>
      </main>
    </div>
    </>
  );
};

export default AboutUsPage;
