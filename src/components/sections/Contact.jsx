import React, { useState } from "react";
import ContactCard from "../ui/ContactCard";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Contact = ({ t, textTitleClass, darkMode, cardClass }) => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const contact = formData.get("contact");
    const message = formData.get("message");

    let formattedContact = contact.trim();
    if (formattedContact.startsWith('@')) {
      formattedContact = `https://t.me/${formattedContact.slice(1)}`;
    } else if (!formattedContact.includes('@') && !formattedContact.startsWith('http') && !/^\+?[0-9\s\-]+$/.test(formattedContact)) {
      formattedContact = `https://t.me/${formattedContact}`;
    }

    const text = `📬 Yangi xabar!\n\n👤 Ism: ${name}\n🔗 Aloqa: ${formattedContact}\n📝 Xabar: ${message}`;

    try {
      await fetch(`https://api.telegram.org/bot8720963933:AAGgRwy4pJVANtC96cc_bBTgfBDNK4kphQE/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "5387795208",
          text: text,
        }),
      });
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
      e.target.reset();
    } catch (error) {
      console.error("Xatolik:", error);
      setFormStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-32 px-4 md:px-10 max-w-7xl mx-auto relative border-t border-white/5">
      <div className="text-center mb-20">
        <h3 className={`text-4xl sm:text-5xl md:text-6xl font-black ${textTitleClass} mb-4 uppercase tracking-tighter`}>
          {t.contactTitle}
        </h3>
        <p className="text-slate-500 font-light">{t.contactDesc}</p>
        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ContactCard
            href="https://t.me/TM_Backdev"
            label="Telegram"
            val="@TM_Backdev"
            color="hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            darkMode={darkMode}
          />
          <ContactCard
            href="https://instagram.com/temur.s1"
            label="Instagram"
            val="@temur.s1"
            color="hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            darkMode={darkMode}
          />
          <ContactCard
            href="tel:+998906967999"
            label="Phone"
            val="+998 90 696 79 99"
            color="hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            darkMode={darkMode}
          />
          <ContactCard
            href="mailto:tmaq77@gmail.com"
            label="Email"
            val="tmaq77@gmail.com"
            color="hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            darkMode={darkMode}
          />
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`${cardClass} p-8 rounded-[2.5rem] backdrop-blur-md relative`}
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Send className="w-24 h-24" />
          </div>
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.formNameLabel}</label>
              <input required name="name" type="text" className={`w-full bg-transparent border-b ${darkMode ? "border-white/10 focus:border-blue-500 text-white" : "border-black/10 focus:border-blue-500 text-black"} py-3 outline-none transition-colors`} placeholder={t.formNamePlaceholder} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.formContactLabel}</label>
              <input required name="contact" type="text" className={`w-full bg-transparent border-b ${darkMode ? "border-white/10 focus:border-blue-500 text-white" : "border-black/10 focus:border-blue-500 text-black"} py-3 outline-none transition-colors`} placeholder={t.formContactPlaceholder} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.formMessageLabel}</label>
              <textarea required name="message" rows="4" className={`w-full bg-transparent border-b ${darkMode ? "border-white/10 focus:border-blue-500 text-white" : "border-black/10 focus:border-blue-500 text-black"} py-3 outline-none transition-colors resize-none`} placeholder={t.formMessagePlaceholder}></textarea>
            </div>
            <button 
              type="submit" 
              disabled={formStatus !== "idle"}
              className={`mt-4 w-full flex items-center justify-center gap-2 ${formStatus === "success" ? "bg-emerald-500" : "bg-blue-600 hover:bg-blue-700"} text-white px-8 py-4 rounded-2xl font-bold transition-all uppercase tracking-widest text-sm disabled:opacity-70`}
            >
              {formStatus === "idle" && <><Send className="w-4 h-4" /> {t.formSendBtn}</>}
              {formStatus === "submitting" && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {formStatus === "success" && <><CheckCircle2 className="w-5 h-5" /> {t.formSuccessBtn}</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
