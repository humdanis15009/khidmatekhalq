import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Aasra Foundation</title>
        <meta
          name="description"
          content="Aasra Foundation, a dedicated charity focused on uplifting marginalized communities in India. Join us in providing education, healthcare, food, and essential services to those in need. Make a difference today!"
        />
        <meta
          name="keywords"
          content="Aasra Foundation, charity, social services, education, healthcare, food distribution, marginalized communities, India, community support, humanitarian aid."
        />
        <meta name="author" content="Aasra Foundation" />
        <link
          rel="canonical"
          href="https://aasrafoundation.netlify.app/AboutUs"
        />
        <meta property="og:title" content="About Us - Aasra Foundation" />
        <meta
          property="og:description"
          content="Aasra Foundation is a charitable organization committed to supporting marginalized communities across India. We provide essential services like education, healthcare, food, and more to those in need. Join us in making a lasting impact through compassion and action."
        />
        <meta
          property="og:image"
          content="https://aasrafoundation.netlify.app/logo2.png"
        />
        <meta
          property="og:url"
          content="https://aasrafoundation.netlify.app/AboutUs"
        />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nikah Junction - Trusted Muslim Matrimony Service"
        />
        <meta
          name="twitter:description"
          content="Find your perfect Muslim partner on Nikah Junction. Register today!"
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        /> */}
      </Helmet>
      <div className="bg-gray-100 flex text-gray-800 min-h-screen">
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="lg:text-4xl text-2xl font-bold text-green-700 text-center lg:my-6 my-2">
            About Us
          </h1>
          <p className="lg:text-lg lg:mb-6 mb-4">
            Welcome to{" "}
            <span className="font-bold text-gray-600">Aasra Foundation</span>, a
            charitable organization dedicated to uplifting underprivileged
            communities and spreading hope and support. Our mission is rooted in{" "}
            <span className="font-bold text-gray-600">compassion</span> and{" "}
            <span className="font-bold text-gray-600">service</span> for
            humanity.
          </p>

          <h2 className="lg:text-2xl text-lg font-semibold text-gray-800 lg:mb-4">
            Our Founder:
          </h2>
          <div className="lg:flex items-center lg:mb-6">
            <div className="lg:w-[500px] w-[120px] float-left lg:mr-6 mr-3">
              <img
                className="rounded-lg "
                src="images/Founder.jpeg"
                alt="Haji Abdul Khaliq"
              />
            </div>
            <p className="lg:text-lg">
              {" "}
              <span className="font-bold text-gray-600">
                Haji Abdul Khaliq
              </span>{" "}
              is the visionary behind Aasra Foundation.He is also the founder of
              &nbsp;
              <span className="font-bold text-gray-600">
                Nikah Junction
              </span>{" "}
              which has been running parallel to the Nikah Junction since 1994.
              He is retired from the post of{" "}
              <span className="font-bold text-gray-600">Chief Post Master</span>{" "}
              , Lucknow division. He has been dedicated to serving humanity
              through charitable efforts since 1994. With years of experience in
              community welfare and a passion for making a difference, Haji
              Abdul Khaliq has established Aasra Foundation as a trusted
              platform for meaningful change. . His dedication and commitment to
              providing a respectful and reliable service form the cornerstone
              of our platform.
            </p>
          </div>

          <h2 className="lg:text-2xl text-lg font-semibold text-gray-800 lg:mb-4 mt-4">
            Our Mission:
          </h2>
          <p className="lg:text-lg mb-6">
            At Aasra Foundation, our mission is to create opportunities for
            underprivileged individuals and foster an environment of care and
            equality. We strive to achieve:
          </p>
          <ul className="list-disc list-inside lg:mb-6 mb-3 pl-5">
            <li>
              <span className="font-bold text-gray-600">Empowerment</span>{" "}
              through education and skill development.
            </li>
            <li>
              <span className="font-bold text-gray-600">Support</span> for the
              marginalized through food, clothing, and medical aid.
            </li>
            <li>
              Building a community based on{" "}
              <span className="font-bold text-gray-600">
                compassion and shared values
              </span>
              .
            </li>
          </ul>

          <h2 className="lg:text-2xl text-lg font-semibold text-gray-800 lg:mb-4 mt-4">
            Our Values:
          </h2>
          <p className="lg:text-lg lg:mb-6">
            We are guided by the principles of{" "}
            <span className="font-bold text-gray-600">kindness</span>,{" "}
            <span className="font-bold text-gray-600">equity</span>, and{" "}
            <span className="font-bold text-gray-600">dignity</span>. Our team
            works tirelessly to ensure that every individual we assist is
            treated with respect and care.
          </p>

          <h2 className="lg:text-2xl text-lg font-semibold text-gray-800 lg:mb-4 mt-4">
            Contact Us:
          </h2>
          <p className="lg:text-lg lg:mb-6">
            If you have any questions or wish to contribute to our efforts,
            please feel free to reach out. Together, we can make a difference.
          </p>

          <p className="lg:text-lg">
            Thank you for supporting Aasra Foundation, where hope meets action
            for a better tomorrow.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
