import { FileText, Baby, CalendarDays, ClipboardList, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const AdmissionInfo = () => {
  return (
    <div className="px-6 md:px-16 py-12 bg-linear-to-b from-pink-50 to-yellow-50 text-gray-800">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Admission Information
      </h1>

      <section className="mb-10 text-center">
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          We welcome children aged <strong>2 to 5 years</strong> to join our
          joyful learning community. Admissions are open throughout the year
          based on seat availability. Visit our school or contact us to know
          more about the enrollment process.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 text-center">
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

      <div className=" flex  mx-auto justify-center text-center mt-12">
         <Link
      to="https://wa.me/9779814983127?text=Hello!%20I%27m%20interested%20in%20enrolling%20my%20child%20at%20KidsCare%20Preschool."
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-6 py-3  rounded-full font-semibold shadow-md transition-all hover:scale-105"
    >
      <MessageCircle size={20} />
      Enroll Now
    </Link>
      </div>
    </div>
  );
};
