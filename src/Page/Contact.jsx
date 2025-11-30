import React from "react";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pt-20 shadow-xl shadow-cyan-100 ">
        {/*  المصنع  */}
        <div className="collapse collapse-arrow  border border-gray-300 text-black">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-3xl text-cyan-900 mb-2">
            الإدارة والمصنع
          </div>
          <div className="collapse-content text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaMapMarkerAlt /> العنوان
                </h3>
                <p className="text-gray-600 text-2xl">بلطيم المدينه الصناعيه</p>

                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaClock /> ساعات العمل
                </h3>
                <p className="text-gray-600 text-2xl">
                  من 8 صباحاً حتى 4 مساءً
                </p>
                <h3 className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> للتواصل
                </h3>
                <p className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> 01090222129
                </p>

                <a
                  className="flex text-2xl mb-3 md:mb-0 md:text-3xl font-bold gap-1 items-center transition hover:text-cyan-800 hover:scale-102"
                  href="https://wa.me/201090222129?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> تواصل معنا عبر الواتساب
                </a>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.0673960839493!2d31.10643017609697!3d31.543026474305837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f73c9699d0e13d%3A0x903b4db60ebccbea!2z2LTYsdmD2Kkg2LTZhdin2YQg2KfZhNiv2YTYqtin2YQg2YTZhNi12YbYp9i52KfYqiDYp9mE2LrYsNin2KbZitip2Yxb2K3ZhNmI2KfZhtuKINix2YrYqtin2KxdJUE2JTgw!5e0!3m2!1sar!2seg!4v1702472016074!5m2!1sar!2seg"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* محل 1  */}
        {/* محل 1  */}
        {/* محل 1  */}
        <div className="collapse collapse-arrow  border border-gray-300  text-black">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-3xl text-cyan-900 mb-2">
            محل (1) شارع جمال عبدالناصر
          </div>
          <div className="collapse-content text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaMapMarkerAlt /> العنوان
                </h3>
                <p className="text-gray-600 text-2xl">
                  بلطيم شارع جمال عبد الناصر{" "}
                </p>

                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaClock /> ساعات العمل
                </h3>
                <p className="text-gray-600 text-2xl">
                  من 8 صباحاً حتى 11 مساءً
                </p>
                <h3 className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> للتواصل
                </h3>
                <p className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> 01002003849
                </p>

                <a
                  className="flex text-2xl mb-3 md:mb-0 md:text-3xl font-bold gap-1 items-center transition hover:text-cyan-800 hover:scale-102"
                  href="https://wa.me/201002003849?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> تواصل معنا عبر الواتساب
                </a>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.970348924114!2d31.084435410866668!3d31.552428345450462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f73cb1dbc4d819%3A0x9bc575d3a82fd5b0!2sHB%20Retag!5e0!3m2!1sen!2seg!4v1764418926255!5m2!1sen!2seg"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* محل 2 */}
        {/* محل 2 */}
        {/* محل 2 */}
        {/* محل 2 */}
        {/* محل 2 */}
        <div className="collapse collapse-arrow  border border-gray-300 text-black">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-3xl text-cyan-900 mb-2">
            محل (2) شارع بورسعيد
          </div>
          <div className="collapse-content text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaMapMarkerAlt /> العنوان
                </h3>
                <p className="text-gray-600 text-2xl">بلطيم شارع بورسعيد </p>

                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaClock /> ساعات العمل
                </h3>
                <p className="text-gray-600 text-2xl">
                  من 8 صباحاً حتى 11 مساءً
                </p>
                <h3 className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> للتواصل
                </h3>
                <p className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> 01022204917
                </p>

                <a
                  className="flex text-2xl mb-3 md:mb-0 md:text-3xl font-bold gap-1 items-center transition hover:text-cyan-800 hover:scale-102"
                  href="https://wa.me/201022204917?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> تواصل معنا عبر الواتساب
                </a>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3399.8890759655833!2d31.091679875612865!3d31.554658674198276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDMzJzE2LjgiTiAzMcKwMDUnMzkuMyJF!5e0!3m2!1sen!2seg!4v1764419819478!5m2!1sen!2seg"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* محل 7 */}
        {/* محل 7 */}
        {/* محل 7 */}
        {/* محل 7 */}
        {/* محل 7 */}

        <div className="collapse collapse-arrow  border border-gray-300  text-black">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-3xl text-cyan-900 mb-2">
            محل (7) الرياض
          </div>
          <div className="collapse-content text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaMapMarkerAlt /> العنوان
                </h3>
                <p className="text-gray-600 text-2xl">
                  الرياض بجوار مركز الشرطة{" "}
                </p>

                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaClock /> ساعات العمل
                </h3>
                <p className="text-gray-600 text-2xl">
                  من 8 صباحاً حتى 11 مساءً
                </p>
                <h3 className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> للتواصل
                </h3>
                <p className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> 01022204910
                </p>

                <a
                  className="flex text-2xl mb-3 md:mb-0 md:text-3xl font-bold gap-1 items-center transition hover:text-cyan-800 hover:scale-102"
                  href="https://wa.me/201022204910?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> تواصل معنا عبر الواتساب
                </a>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.8149524338671!2d30.944058213657105!3d31.241230293522598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f701a13339cb07%3A0x2e3ea2ac35739810!2z2K3ZhNmI2KfZhtmKINix2YrYqtin2Kw!5e0!3m2!1sen!2seg!4v1764424835528!5m2!1sen!2seg"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* محل 3 */}
        {/* محل 3 */}
        {/* محل 3 */}
        {/* محل 3 */}

        <div className="collapse collapse-arrow  border border-gray-300  text-black">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-3xl text-cyan-900 mb-2">
            محل (3) البرج
          </div>
          <div className="collapse-content text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaMapMarkerAlt /> العنوان
                </h3>
                <p className="text-gray-600 text-2xl">
                  الرياض بجوار مركز الشرطة{" "}
                </p>

                <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
                  <FaClock /> ساعات العمل
                </h3>
                <p className="text-gray-600 text-2xl">
                  من 8 صباحاً حتى 11 مساءً
                </p>
                <h3 className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> للتواصل
                </h3>
                <p className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
                  <FaPhone /> 01022204910
                </p>

                <a
                  className="flex text-2xl mb-3 md:mb-0 md:text-3xl font-bold gap-1 items-center transition hover:text-cyan-800 hover:scale-102"
                  href="https://wa.me/201022204910?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> تواصل معنا عبر الواتساب
                </a>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.5297098105715!2d30.98698648545377!3d31.581920014098234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f72174cb0e07f5%3A0x82d0da19c197102c!2z2K3ZhNmI2KfZhtmKINix2YrYqtin2KwgLSBSZXRhaiBQYXN0cnk!5e0!3m2!1sen!2seg!4v1764509599891!5m2!1sen!2seg"
                 width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
