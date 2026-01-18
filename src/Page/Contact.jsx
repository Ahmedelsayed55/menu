import Borg3 from "../Component/contactComponent/Borg3";
import Elryad from "../Component/contactComponent/Elryad";
import BorSaed from "../Component/contactComponent/BorSaed";
import GamalNaser from "../Component/contactComponent/GamalNaser";
import Masna3 from "../Component/contactComponent/Masna3";
import Elborsa from "../Component/contactComponent/Elborsa";
import Salm from "../Component/contactComponent/Salm";
const Contact = () => {
  return (
    <div className="bg-gray-100 py-20 md:py-30">
      <div className="container mx-auto  shadow-xl shadow-cyan-100 bg-gray-50 ">
        {/*  المصنع  */}
        {/* <div className="collapse collapse-arrow border border-gray-300 text-black">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold pb-10 text-center text-[24px] md:text-3xl text-cyan-900 mb-2">
            {" "}
            الإدارة والمصنع
          </div>
          <div className="collapse-content text-sm">
            <Masna3 />
          </div>
        </div> */}
        {/* محل 1  */}
        <div className="collapse collapse-arrow  border border-gray-300  text-black">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold pb-10 text-center text-[24px] md:text-3xl text-cyan-900 mb-2">
            بلطيم شارع جمال عبد الناصر
          </div>
          <div className="collapse-content text-sm">
            <GamalNaser />
          </div>
        </div>
        {/* محل 2 */}
        <div className="collapse collapse-arrow  border border-gray-300 text-black">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-[24px] text-center md:text-3xl text-cyan-900 mb-2 pb-10">
            بلطيم شارع بورسعيد
          </div>
          <div className="collapse-content text-sm">
            <BorSaed />
          </div>
        </div>
        {/* محل 3 */}

        <div className="collapse collapse-arrow  border border-gray-300   text-black">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-[24px] pb-10 text-center md:text-3xl text-cyan-900 mb-2">
            البرج بجوار مسجد سيدي عيسي
          </div>
          <div className="collapse-content text-sm">
            <Borg3 />
          </div>
        </div>

        {/* محل 7 */}

        <div className="collapse collapse-arrow  border border-gray-300  text-black">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-[24px] pb-10 text-center md:text-3xl text-cyan-900 mb-2">
            الرياض بجوار مركز الشرطة
          </div>
          <div className="collapse-content text-sm">
            <Elryad />
          </div>
        </div>

        {/* البورصه */}

        <div className="collapse collapse-arrow  border border-gray-300  text-black">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-[24px] pb-10 text-center md:text-3xl text-cyan-900 mb-2">
            البورصه طريق كفر الشيخ بلطيم
          </div>
          <div className="collapse-content text-sm">
            <Elborsa />
          </div>
        </div>

        {/* سالم */}

        <div className="collapse collapse-arrow  border border-gray-300  text-black">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-[24px] pb-10 text-center md:text-3xl text-cyan-900 mb-2">
            سيدي سالم بجوار مسجد عباس عبيدي
          </div>
          <div className="collapse-content text-sm">
            <Salm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
