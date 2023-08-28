import React from "react";
import Layout from "../components/layouts/Layout";

function Policy() {
  return (
    <Layout title={"Privacy-Policy Page"}>
      <div className="row policy">
        <div className="col-md-8 text-cont">
          <h1 className="bg-dark p-2 text-white text-center">Privacy-Policy</h1>
          <p className="text-justify mt-2">
            At XYZ E-commerce (referred to as "we," "us," or "our"), we are
            committed to protecting the privacy and security of our users'
            personal information. This Privacy Policy outlines how we collect,
            use, disclose, and safeguard your data when you interact with our
            website or use our services. By accessing or using our website, you
            agree to the terms of this Privacy Policy.
          </p>
          {/* <p className="text-justify mt-2"></p> */}
          <ul>
            <h5>1. Information We Collect:</h5>
            <p>
              We may collect various types of information from our users,
              including but not limited to:
            </p>
            <li>
              Personal Information: Name, email address, shipping address,
              billing information, phone number, and other identifying details
              necessary to process orders and provide customer support.
            </li>
            <li>
              Account Information: Usernames, passwords, and other credentials
              used to access our services.
            </li>
            <li>
              Device and Usage Information: IP address, browser type, operating
              system, referring URLs, and interaction with our website to
              improve user experience and analyze usage patterns.
            </li>
            <li>
              Payment Information: Credit card numbers, payment methods, and
              billing details when you make purchases on our website.
            </li>
            <li>
              Communication Data: Records of your interactions with us, such as
              emails, chats, and customer support queries.
            </li>

            <h5>2. How We Use Your Information:</h5>
            <p>We may use your information for various purposes, including:</p>

            <li>
              Processing Orders: Fulfilling your purchases, processing payments,
              and delivering products to the correct address.
            </li>
            <li>
              Customer Support: Assisting with inquiries, resolving issues, and
              providing support services.
            </li>
            <li>
              Personalization: Tailoring our website and content to enhance your
              experience based on your preferences and usage patterns.
            </li>
            <li>
              Marketing and Promotions: Sending you promotional offers,
              newsletters, and information about products or services that may
              be of interest to you (you can opt-out at any time).
            </li>
            <li>
              Analytics: Analyzing website usage data to improve our offerings,
              identify trends, and optimize user experience.
            </li>
            <li>
              Legal Compliance: Complying with applicable laws, regulations, or
              legal processes.
            </li>

            <h5>3.How We Share Your Information: </h5>
            <p>We may share your information in the following circumstances:</p>
            <li>
              Service Providers: Sharing data with trusted third-party service
              providers who assist us in running our business operations and
              services.
            </li>
            <li>
              Business Transfers: In the event of a merger, acquisition, or
              sale, your data may be transferred to the acquiring entity.
            </li>
            <li>
              Legal Requirements: Disclosing information when required by law or
              to protect our rights, safety, or the safety of others.
            </li>

            <h5>4. Cookies and Similar Technologies:</h5>
            <p>
              We use cookies and similar technologies to collect information
              about your usage patterns and enhance your experience on our
              website. Cookies are small data files stored on your device when
              you visit our site. You can manage your cookie preferences through
              your browser settings.
            </p>

            <h5>5. Security:</h5>
            <p>
              We take appropriate measures to protect your data from
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of data transmission over the internet or
              electronic storage is entirely secure, and we cannot guarantee
              absolute security.
            </p>

            <h5>6. Third-Party Links:</h5>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites, so
              we encourage you to review their privacy policies when accessing
              them.
            </p>

            <h5>7. Children's Privacy:</h5>
            <p>
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from individuals
              under 13 years of age. If we become aware of any such data being
              collected, we will take immediate steps to delete it.
            </p>

            <h5>8. Changes to Privacy Policy:</h5>
            <p>
              We may update this Privacy Policy from time to time. The revised
              version will be posted on our website, and the effective date will
              be updated accordingly. Continued use of our website following
              changes signifies your acceptance of the updated Privacy Policy.
            </p>

            <h5>9. Contact Us:</h5>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your data, please contact us at [insert contact
              details].
            </p>
            <p>
              Please note that this is a general template, and the content may
              vary depending on the specific practices and policies of the XYZ
              E-commerce website. Always ensure that the Privacy Policy
              accurately reflects the actual practices of the company and
              complies with relevant laws and regulations.
            </p>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Policy;
