import Card from "./Card";

function About() {
  return (
    <>
      <div>
      <section className="bg-green-50 py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="images/imgg.jpeg"
                alt="About Us Image"
                className="rounded-lg shadow-lg w-full h-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:brightness-110 hover:rotate-1"
              />
            </div>
            <div className="md:w-1/2 lg:ml-12 text-center md:text-left">
              <h1 className="text-3xl font-bold text-green-600 mb-4">
                About Us
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to{" "}
                <span className="font-bold text-gray-600">
                  Aasra Foundation
                </span>
                , a dedicated Muslim charity organization committed to spreading
                hope and kindness. Rooted in the principles of{" "}
                <span className="font-bold">Islamic values</span>, our mission
                is to serve humanity and uplift the lives of those in need
                across <span className="font-bold">India</span>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At{" "}
                <span className="font-bold text-gray-600">
                  Aasra Foundation
                </span>
                , we strive to provide support for the underprivileged by
                focusing on key areas like{" "}
                <span className="font-bold">education</span>,{" "}
                <span className="font-bold">healthcare</span>, disaster relief,
                and empowerment programs. We believe that true service lies in{" "}
                <span className="font-bold">compassion</span> and making a
                tangible difference in people's lives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With the unwavering support of our generous donors and
                volunteers, we have been able to touch countless lives and bring
                positive change. Our efforts aim to create a world where
                everyone has access to basic needs and opportunities to thrive.
                Together, we can achieve our vision of fostering a society
                grounded in <span className="font-bold">equality</span> and{" "}
                <span className="font-bold">dignity</span> for all.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join us in our journey of{" "}
                <span className="font-bold">giving back</span> and being a
                source of light for those in darkness. Together, let us continue
                the noble work of{" "}
                <span className="font-bold text-gray-600">
                  Aasra Foundation
                </span>{" "}
                — serving humanity with humility and love.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Card />
    </>
  );
}

export default About;
