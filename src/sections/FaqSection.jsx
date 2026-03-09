import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {

  const faqs = [
    {
      question: "What is School ERP Software?",
      answer:
        "School ERP software helps schools manage operations like admissions, attendance, exams, fees, and communication from one platform."
    },
    {
      question: "How Does School ERP Software Work for My School?",
      answer:
        "It centralizes school operations and automates tasks like attendance, reports, communication, and fee management."
    },
    {
      question: "Why is Class Sites School Software Different from Others?",
      answer:
        "Class Sites offers powerful modules, mobile apps, automation tools, and user-friendly dashboards."
    },
    {
      question: "How to Choose the Right School ERP Software?",
      answer:
        "Look for automation features, security, mobile support, easy interface, and reliable customer support."
    },
    {
      question: "Is there any hardware required to run Class Sites ERP?",
      answer:
        "No. It is cloud-based software and works on any device with internet access."
    },
    {
      question: "How easy is it to implement Class Sites in my school?",
      answer:
        "Implementation is quick and our team assists you during onboarding and setup."
    }
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">

            FAQs – Answers to Your Questions{" "}
            <span className="text-red-500">About Class Sites App</span>

          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Explore common questions and answers about Class Sites App to help you understand our features and benefits.
          </p>

        </div>


        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border-b pb-5"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-800"
              >

                {faq.question}

                {activeIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}

              </button>

              {activeIndex === index && (
                <p className="text-gray-600 mt-3 text-sm">
                  {faq.answer}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}