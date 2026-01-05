import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Home } from "@/pages/Home/Home";
import { Services } from "@/pages/Services/Services";
import { About } from "@/pages/About/About";
import { Contact } from "@/pages/Contact/Contact";
import { Impressum } from "@/pages/Legal/Impressum";
import { Privacy } from "@/pages/Legal/Privacy";
import { NotFound } from "@/pages/NotFound/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
