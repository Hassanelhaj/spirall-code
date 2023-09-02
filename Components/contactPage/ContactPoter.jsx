import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactPoter = () => {
  return (
    <main
      className={`flex flex-col justify-center items-center gap-4 p-4 capitalize h-full`}
    >
      <section className="flex flex-col justify-center items-center text-lg gap-2 p-2 lg:p-12">
        <h2 className="text-xl font-extrabold">Have a project in mind ?</h2>

        <p className="font-semibold w-64">
          reach out to us . We can make something awsome together
        </p>
        <section className="flex  justify-center items-center gap-2 font-medium">
          <a
            target="_blank"
            href="mailto:Spiralcode4@gmail.com"
            className="text-3xl cursor-pointer hover:opacity-80"
          >
            <MdEmail />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100081132437769"
            className="text-3xl cursor-pointer hover:opacity-80"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/spiral-code/"
            className="text-3xl cursor-pointer hover:opacity-80"
          >
            <FaLinkedin />
          </a>
          {/* <a
            target="_blank"
            href="mailto:Spiralcode4@gmail.com"
            className="text-3xl cursor-pointer hover:opacity-80"
          >
            <FaGithub />
          </a> */}
        </section>
      </section>
    </main>
  );
};

export default ContactPoter;
