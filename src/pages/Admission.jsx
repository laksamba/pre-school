import {
  FileText,
  Baby,
  ClipboardList,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const AdmissionInfo = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    ageGroup: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been submitted successfully.");
    setFormData({
      parentName: "",
      childName: "",
      ageGroup: "",
      contact: "",
      message: "",
    });
  };

  return (
    <div className="px-6 md:px-16 py-12 bg-linear-to-b from-pink-50 to-yellow-50 text-gray-800">
      <h1 className="text-4xl font-extrabold text-center text-green-600 mb-10">
        Admission Information
      </h1>

      {/* Info Section */}
      <section className="mb-10 text-center">
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          We welcome children aged <strong>2 to 5 years</strong> to join our
          joyful learning community. Admissions are open throughout the year
          based on seat availability. Visit our school or contact us to know
          more about the enrollment process.
        </p>
      </section>

      {/* Info Cards */}
      <section className="grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-white p-6 rounded-2xl shadow">
          <Baby className="mx-auto mb-4 text-pink-500" size={40} />
          <h3 className="text-xl font-semibold mb-2">Age Criteria</h3>
          <p>Playgroup: 2–3 years</p>
          <p>Nursery: 3–4 years</p>
          <p>Kindergarten: 4–5 years</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <ClipboardList className="mx-auto mb-4 text-yellow-500" size={40} />
          <h3 className="text-xl font-semibold mb-2">Admission Steps</h3>
          <ol className="list-decimal text-left ml-8 space-y-1">
            <li>Submit an enquiry or visit our school.</li>
            <li>Attend a parent–teacher interaction.</li>
            <li>Fill out the admission form.</li>
            <li>Submit documents and confirm enrollment.</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <FileText className="mx-auto mb-4 text-green-500" size={40} />
          <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
          <ul className="list-disc text-left ml-8 space-y-1">
            <li>Child’s Birth Certificate</li>
            <li>Passport-size Photo (2)</li>
            <li>Vaccination Record</li>
            <li>Proof of Address</li>
          </ul>
        </div>
      </section>

      {/* Inquiry + Enroll Section */}
      <section className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Inquiry Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Make an Inquiry
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-left font-medium mb-1">
                Parent’s Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-left font-medium mb-1">
                Child’s Name
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-left font-medium mb-1">
                Age Group
              </label>
              <select
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              >
                <option value="">Select Age Group</option>
                <option value="2–3 years">Playgroup (2–3 years)</option>
                <option value="3–4 years">Nursery (3–4 years)</option>
                <option value="4–5 years">Kindergarten (4–5 years)</option>
              </select>
            </div>

            <div>
              <label className="block text-left font-medium mb-1">
                Contact (Phone/Email)
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-left font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Write your inquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full shadow-md transition-all hover:scale-105"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Enroll Section */}
        <div className="flex flex-col justify-center items-center bg-white p-10 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Ready to Enroll?
          </h2>
          <p className="text-lg mb-8 text-gray-600 max-w-md">
            Once you’ve made an inquiry and received confirmation from our team,
            you can proceed with your child’s enrollment easily via WhatsApp.
          </p>
          <Link
            to="https://wa.me/9779814983127?text=Hello!%20I%27m%20interested%20in%20enrolling%20my%20child%20at%20KidsCare%20Preschool."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-8 py-4 rounded-full font-semibold shadow-md text-lg transition-all hover:scale-105"
          >
            <MessageCircle size={24} />
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
};
