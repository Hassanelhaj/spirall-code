import React from "react";
import ContactPoter from "./ContactPoter";
import ContactForm from "./ContactForm";

const ContactCon = () => {
  return (
    <div className=" w-screen min-h-[86dvh]  overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
      <section className={`lg:col-span-1  poster text-white lg:min-h-[90dvh]`}>
        <ContactPoter />
      </section>
      <section className="lg:col-span-1 bg-purple-50 lg:min-h-[86dvh]">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactCon;
