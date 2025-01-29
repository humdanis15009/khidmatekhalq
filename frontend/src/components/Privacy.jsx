import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
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

      <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="lg:text-4xl text-2xl font-bold lg:my-6 mb-2 text-center text-pink-700">
          Privacy Policy
        </h1>
        <p className="mb-4 lg:text-[18px] text-[16px]">
          At <strong>Aasra Foundation</strong>, we are committed to protecting
          your privacy and maintaining the trust you place in us. This Privacy
          Policy outlines how we collect, use, and safeguard your personal
          information. Our commitment to 100% transparency ensures that every
          action we take aligns with our mission of accountability and service
          to the community.
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold lg:mb-3">
          1. Information We Collect:
        </h2>
        <p className="mb-4 lg:text-[18px] text-[16px]">
          We collect the following types of information to ensure efficient
          operations and provide the best possible support:
          <ul className="list-disc list-inside ml-5">
            <li>
              <strong>Personal Information:</strong> Includes your name, email
              address, phone number, and address when you donate or register as
              a volunteer.
            </li>
            <li>
              <strong>Transaction Data:</strong> Details of your contributions,
              including payment information, to ensure transparency in fund
              allocation.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with our website, such as IP address and browsing behavior, to
              improve our services.
            </li>
          </ul>
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold lg:mb-3">
          2. How We Use Your Information:
        </h2>
        <p className="mb-4 lg:text-[18px] text-[16px]">
          Your information is used exclusively for charitable purposes and to
          maintain transparency. Specifically, we use it to:
          <ul className="list-disc list-inside ml-5">
            <li>
              <strong>Facilitate Donations:</strong> To process your
              contributions securely and provide receipts.
            </li>
            <li>
              <strong>Provide Transparency:</strong> To share how funds are
              utilized for community projects, ensuring accountability.
            </li>
            <li>
              <strong>Engage with Supporters:</strong> To update you on our
              initiatives, upcoming events, and the impact of your
              contributions.
            </li>
            <li>
              <strong>Improve Our Services:</strong> To optimize our website and
              ensure a seamless user experience.
            </li>
          </ul>
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold lg:mb-3">
          3. Transparency and Fund Allocation:
        </h2>
        <p className="mb-4 lg:text-[18px] text-[16px]">
          At Aasra Foundation, we maintain 100% transparency in the allocation
          of funds. Donors can request detailed reports on how their
          contributions are utilized. Our annual financial statements are also
          made publicly available to reflect our commitment to honesty and
          accountability.
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold lg:mb-3">
          4. Sharing Your Information:
        </h2>
        <p className="mb-4 lg:text-[18px] text-[16px]">
          We do not sell, trade, or share your personal information with third
          parties, except:
          <ul className="list-disc list-inside ml-5">
            <li>
              <strong>Service Providers:</strong> Trusted third parties who
              assist us in processing payments or managing donor communications.
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by law or to
              protect the rights and safety of Aasra Foundation and its
              supporters.
            </li>
          </ul>
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold lg:mb-3">
          5. Your Choices:
        </h2>
        <p className="mb-4 lg:text-[18px] text-[16px]">
          You have full control over your information. You can:
          <ul className="list-disc list-inside ml-5">
            <li>
              <strong>Access and Update:</strong> Update your personal details
              or donation preferences by contacting us directly.
            </li>
            <li>
              <strong>Opt-Out:</strong> Choose not to receive updates or
              newsletters by unsubscribing via the provided link.
            </li>
          </ul>
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold lg:mb-3">
          6. Security:
        </h2>
        <p className="mb-4 lg:text-[18px] text-[16px]">
          We employ robust security measures to protect your personal
          information. However, no method of online transmission or storage is
          entirely secure, and we encourage you to reach out with any concerns.
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold lg:mb-3">
          7. Changes to This Policy:
        </h2>
        <p className="mb-4 lg:text-[18px] text-[16px]">
          Aasra Foundation reserves the right to update this Privacy Policy as
          needed. Significant changes will be communicated through our website
          or via email.
        </p>

        <h2 className="lg:text-2xl text-lg font-semibold lg:mb-3">
          8. Contact Us:
        </h2>
        <p className="lg:text-[18px] text-[16px]">
          If you have any questions or require further information, please
          contact us at:{" "}
          <a
            href="mailto:contact@aasrafoundation.org"
            className="text-blue-500 hover:underline"
          >
            aasrafoundation11@gmail.com
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Privacy;
