import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import CaseStudies from "@/components/CaseStudies"
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Nosotros"
        description="Desarrollamos soluciones avanzadas para auditoría vial, validación geométrica y seguridad vial bajo normativa latinoamericana."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <CaseStudies />
    </>
  );
};

export default AboutPage;
