import { BANNER_PADDING } from "~/components/homepage/constants";
import bannerImg from "../assets/images/contact-us.png";
import CustomInput from "~/components/inputs/CustomInput";
import CustomTextareaInput from "~/components/inputs/CustomTextareaInput";

export async function action({ request }) {
  // const body = await request.formData();

  return null;
}

const ContactUs = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row h-screen">
      <div
        className={`flex flex-1 flex-col justify-center items-centerd bg-lightPurple px-16 sm:px-16 md:px-30 lg:px-36`}
      >
        <h1 className="font-extrabold text-[4rem] text-purple">Contact Us</h1>
        <form method="POST">
          {/* name */}
          <CustomInput name="name" placeholder="Name" className="my-3 w-full" />
          {/* email */}
          <CustomInput
            placeholder="Email"
            name="email"
            className="my-3 w-full"
            type="email"
          />
          <CustomInput
            placeholder="Phone Number"
            className="my-3 w-full"
            type="tel"
            name="phone"
          />
          <CustomTextareaInput
            placeholder="Comment"
            name="comment"
            className="my-3 w-full"
          />
          <button>Submit</button>
        </form>
      </div>
      <div
        className={`flex flex-1 flex-col justify-center items-center bg-paleYellow ${BANNER_PADDING}`}
      >
        <img src={bannerImg} className="w-[30rem] h-[30rem]" />
      </div>
    </div>
  );
};

export default ContactUs;
