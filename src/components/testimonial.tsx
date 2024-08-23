import Image from "next/image";
import user1 from "/public/image-emily.jpg";
import user2 from "/public/image-thomas.jpg";
import user3 from "/public/image-jennie.jpg";

const Testimonial = () => {
  return (
    <section className="w-full py-32">
      <h2 className="text-center font-title font-2xl font-bold text-slate-400 mb-16">
        CLIENT TESTIMONIAL
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-3 justify-between items-center gap-10 xl:gap-0 space-y-5 xl:space-y-0">
        {/* First testimonial */}
        <div className="flex flex-col items-center space-y-14">
          <div className="overflow-hidden">
            <Image
              src={user1}
              alt="testimonial image 1"
              className="rounded-full w-20 h-20"
            />
          </div>

          <p className="w-[400px] text-center font-body text-lg font-semibold text-slate-600">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit
          </p>

          <div className="text-center  space-y-3">
            <p className="font-bold font-title text-xl">Emily R.</p>
            <p className="text-xs font-semibold font-body text-slate-400/80">
              Marketing Director
            </p>
          </div>
        </div>

        {/* Second testimonial */}
        <div className="flex flex-col items-center space-y-14">
          <div className="overflow-hidden">
            <Image
              src={user2}
              alt="testimonial image 1"
              className="rounded-full w-20 h-20"
            />
          </div>

          <p className="w-[400px] text-center font-body text-lg font-semibold text-slate-600">
            Sunnyside's enthusiasm coupled with their keen interst in our
            brands's success made it a satisfying and enjoyable experience
          </p>

          <div className="text-center  space-y-3">
            <p className="font-bold font-title text-xl">Thomas S.</p>
            <p className="text-xs font-semibold font-body text-slate-400/80">
              Cheif Operating Officer
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-14">
          <div className="overflow-hidden">
            <Image
              src={user3}
              alt="testimonial image 1"
              className="rounded-full w-20 h-20"
            />
          </div>

          <p className="w-[400px] text-center font-body text-lg font-semibold text-slate-600">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>

          <div className="text-center space-y-3">
            <p className="font-bold font-title text-xl">Jennie F.</p>
            <p className="text-xs font-semibold font-body text-slate-400/80">
              Business Owner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
