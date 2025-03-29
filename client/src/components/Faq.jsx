import React from "react";
import { Link } from "react-router-dom";

function Faq() {
  return (
    <>
      <div className="max w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-20">
        <h1 className="text-3xl font-bold mt-40">
          Frequently asked Questions (FAQ){" "}
          <span className="font-bold text-[#1c7856]">MediLinkPlus</span>
        </h1>
        <div className="mt-60 w-90 md:w-400">
          <div className="collapse collapse-arrow bg-base-100 border border-black">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              1. What is MedLinkPlus?
            </div>
            <div className="collapse-content text-sm">
              MedLinkPlus is a full-stack MedTech software solution designed to
              streamline medical processes, enhance digital record management,
              and improve patient experiences. It provides role-based modules
              for doctors, patients, and pharmacies, ensuring seamless
              interactions within the healthcare ecosystem.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              2. Who can use MedLinkPlus?
            </div>
            <div className="collapse-content text-sm">
              MedLinkPlus is designed for healthcare providers, patients, and
              pharmacies. Each user has a role-based module that caters to their
              specific needs, ensuring secure and efficient communication within
              the system.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              3. How does MedLinkPlus improve healthcare workflows?
            </div>
            <div className="collapse-content text-sm">
              MedLinkPlus digitizes medical records, facilitates QR code-enabled
              prescriptions, supports online medicine ordering with real-time
              notifications, and provides a secure digital repository for
              medical data. These features help reduce errors, optimize
              workflows, and enhance patient care.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              4. What are the key features of MedLinkPlus?
            </div>
            <div className="collapse-content text-sm">
              ⚫ Role-based access for doctors, patients, and pharmacies.
              <br />
              ⚫ QR code-enabled prescriptions for secure access and validation.
              <br />
              ⚫ Online medicine ordering system with real-time notifications.
              <br />
              ⚫ Secure digital repository for efficient medical record
              management.
              <br />
              ⚫ Cloud-based architecture for scalability and reliability.
              <br />⚫ Robust authentication mechanisms for data security.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              5. How does the QR code-enabled prescription system work?
            </div>
            <div className="collapse-content text-sm">
              Doctors generate prescriptions with QR codes that patients can
              scan to access securely. Pharmacies can also validate
              prescriptions by scanning the QR code, reducing the chances of
              errors or fraudulent prescriptions.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              6. Can patients order medicines online through MedLinkPlus?
            </div>
            <div className="collapse-content text-sm">
              Yes, patients can place online medicine orders, and pharmacies
              receive real-time notifications to process the request. This
              feature enhances accessibility and convenience.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              7. How does MedLinkPlus ensure data security and compliance?
            </div>
            <div className="collapse-content text-sm">
              MedLinkPlus uses cloud-based storage, encryption, and
              authentication mechanisms to ensure data security. It also
              complies with healthcare regulations and standards for privacy and
              protection of medical records.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              8. Can MedLinkPlus integrate with other healthcare systems?
            </div>
            <div className="collapse-content text-sm">
              Yes, the system’s modular and microservices-based architecture
              allows seamless integration with existing healthcare
              infrastructure and future innovations.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              9. Is MedLinkPlus user-friendly?
            </div>
            <div className="collapse-content text-sm">
              Yes, MedLinkPlus features an intuitive interface with real-time
              notifications and role-based access control, ensuring a smooth
              experience for all stakeholders.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              10. What benefits does MedLinkPlus offer to healthcare providers?
            </div>
            <div className="collapse-content text-sm">
              ⚫ Reduces prescription errors and improves management efficiency.{" "}
              <br />
              ⚫Enhances patient-doctor communication and record accessibility.{" "}
              <br />
              ⚫Optimizes pharmacy operations with automated notifications.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              11. How can I get started with MedLinkPlus?
            </div>
            <div className="collapse-content text-sm">
              Healthcare providers, patients, or pharmacies can sign up on the
              platform. For enterprise-level integration, contact the
              MedLinkPlus support team.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-black mt-5">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              12. Is technical support available?
            </div>
            <div className="collapse-content text-sm">
              Yes, MedLinkPlus offers dedicated customer support to assist users
              with any technical or operational issues.
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-10">
            For further inquiries, please contact [support{" "}
            <Link to="/contact" className="text-blue-700">
              contact us
            </Link>{" "}
            page].
          </h1>
        </div>
      </div>
    </>
  );
}

export default Faq;
