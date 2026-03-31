// FILE: page.tsx
// PATH: app/page.tsx

const applyEmail = "rsjprwjp@st.ritsumei.ac.jp";
const applySubject = "RDSP 2026 Enquiry";
const applyLink = `mailto:${applyEmail}?subject=${encodeURIComponent(applySubject)}`;

const coreFaculty = [
  {
    name: "Atsushi Kakogawa",
    title: "Associate Professor, Department of Robotics",
    text: "Field and service robotics, including practical applications for infrastructure inspection and environmental exploration.",
    image: "/kakogawa.jpg",
  },
  {
    name: "Valentinus Roby Hananto",
    title: "Lecturer, College of Information Science and Engineering",
    text: "Data science, machine learning, and business intelligence with a practical focus on real-world systems.",
  },
  {
    name: "Victor Kryssanov",
    title: "Professor, College of Information Science and Engineering",
    text: "Data science, machine learning, and smart systems for modern society and intelligent decision-making.",
  },
  {
    name: "Mate Kovacs",
    title: "Assistant Professor, College of Information Science and Engineering",
    text: "Artificial intelligence, natural language processing, and large-scale text and social data analysis.",
  },
  {
    name: "Shady Salama",
    title: "Assistant Professor, College of Information Science and Engineering",
    text: "Artificial intelligence, combinatorial optimization, simulation modeling, evolutionary algorithms, and intelligent manufacturing.",
    image: "/shady2.jpg",
  },
];

const highlights = [
  {
    title: "Study in English",
    text: "All lectures and program activities are conducted in English. No Japanese language ability is required.",
  },
  {
    title: "Live on campus",
    text: "Stay at the OIC Seminar House and experience real university life in a safe and practical environment.",
  },
  {
    title: "Meet Ritsumeikan students",
    text: "Join workshops and exchange opportunities with local students through classes and activities.",
  },
  {
    title: "Experience Japan",
    text: "Explore tea ceremony, sports exchange, and other student-life experiences beyond the classroom.",
  },
];

const experienceCards = [
  {
    src: "/class-hananto.jpg",
    title: "Interactive lectures",
    text: "Learn AI, machine learning, data science, and robotics in an international classroom environment.",
  },
  {
    src: "/tea-ceremony.jpg",
    title: "Tea ceremony experience",
    text: "Enjoy a hands-on cultural session and experience a traditional side of Japan with Ritsumeikan students.",
  },
  {
    src: "/hockey-practice.jpg",
    title: "Sports and exchange",
    text: "Join a sports activity on campus and connect with students through movement, teamwork, and fun.",
  },
  {
    src: "/printer-row.jpg",
    title: "Technology and making",
    text: "See digital fabrication tools and possible hands-on sessions such as laser cutting or 3D printing.",
  },
];

const academicGallery = [
  "/hero-real-data-science.jpg",
  "/class-hananto.jpg",
  "/class-kovacs.jpg",
  "/microsoft-base.jpg",
];

const techGallery = [
  "/microsoft-base.jpg",
  "/printer-flashforge.jpg",
  "/printer-laser.jpg",
  "/printer-row.jpg",
];

const activityGallery = [
  "/hockey-warmup.jpg",
  "/hockey-practice.jpg",
  "/tea-ceremony.jpg",
  "/matcha-close.jpg",
];

const accommodationGallery = [
  "/seminar-beds-1.jpg",
  "/seminar-beds-2.jpg",
  "/seminar-room.jpg",
  "/seminar-laundry.jpg",
];

const realCampusGallery = [
  {
    src: "/oic-ritsumeikan-sign.jpg",
    title: "Ritsumeikan exterior",
    text: "A strong first impression of the campus with the Ritsumeikan identity clearly visible.",
  },
  {
    src: "/oic-campus-courtyard.jpg",
    title: "Open campus courtyard",
    text: "A bright and modern outdoor space where students move between classes and facilities.",
  },
  {
    src: "/oic-skywalk.jpg",
    title: "Connected academic buildings",
    text: "Large-scale campus architecture designed for movement, study, and collaboration.",
  },
  {
    src: "/oic-digital-display.jpg",
    title: "Digital and innovation atmosphere",
    text: "Screens and data-related displays help show the practical, future-oriented learning environment.",
  },
];

const quickFacts = [
  {
    label: "Location",
    value: "Osaka Ibaraki Campus (OIC)",
    note: "A modern campus in Osaka with academic facilities, student spaces, dining options, and on-campus accommodation.",
  },
  {
    label: "Program dates",
    value: "July 16 – July 24, 2026",
    note: "No classes on July 18, 19, and 20. These are free days.",
  },
  {
    label: "Program fee",
    value: "JPY 120,000 + JPY 5,000 service fee",
    note: "No scholarships, waivers, or partner discounts are available for this program.",
  },
  {
    label: "Accommodation",
    value: "OIC Seminar House",
    note: "Shared rooms separated by gender. Participants travel to the residence by themselves.",
  },
  {
    label: "Language / Credit",
    value: "English only / No academic credit",
    note: "A completion certificate will be issued. Final schedule and some details will be updated on this page.",
  },
];

const includedItems = [
  "Lectures by Ritsumeikan faculty members",
  "Workshops and exchange opportunities with Ritsumeikan students",
  "On-campus accommodation fee",
  "Campus Wi-Fi and library access",
  "Travel insurance",
  "Completion certificate",
  "Support documents for a short-term visa, if applicable",
];

const notIncludedItems = [
  "Round-trip airfare and international travel expenses",
  "Local transportation in Japan",
  "Meals",
  "Passport and visa application costs",
  "Personal expenses",
  "Scholarships or tuition waivers",
];

const noteItems = [
  "The first five faculty members listed on this page are confirmed.",
  "Additional special sessions or guest appearances may be announced later.",
  "Possible added content includes VR, laser printing, sports exchange, and cultural club activities.",
  "Program content, lecture titles, and exact activity details are subject to change.",
  "Participants must join from the first day to the final day.",
  "The program has limited capacity, so early application is strongly recommended.",
  "No academic credit will be awarded for this program.",
  "Participants must arrive on July 15 (the day before the program starts). Check-in is required between 3:00 PM and 5:00 PM.",
  "Check-out is scheduled for July 25 (the day after the program ends). Changes to the program period are not allowed.",
  "There will be no classes on July 18 (Saturday), July 19 (Sunday), and July 20 (national holiday). These days are scheduled as free days for personal activities.",
];

export default function Page() {
  return (
    <>
      <main className="page-shell">
        <header className="site-header">
          <a
            href="https://www.rsjprwjp.com/"
            className="brand"
            aria-label="Ritsumeikan main program site"
          >
            <img src="/yoko.jpg" alt="Ritsumeikan" className="brand-logo" />
          </a>
          <nav className="site-nav">
            <a href="#experience">Experience</a>
            <a href="#faculty">Faculty</a>
            <a href="#campus">Campus</a>
            <a href="#accommodation">Accommodation</a>
            <a href="#apply" className="nav-cta">
              Apply
            </a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Ritsumeikan University</p>
            <h1>Study Data Science in Japan</h1>
            <p className="hero-lead">
              Learn data science in a global classroom, live on campus, and
              experience real student life at Ritsumeikan University.
            </p>

            <div className="hero-pills">
              <span>English-medium program</span>
              <span>On-campus accommodation</span>
              <span>Student exchange</span>
              <span>Osaka, Japan</span>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={applyLink}>
                Enquire / Apply
              </a>
              <a className="btn btn-secondary" href="#experience">
                Explore the Program
              </a>
            </div>

            <p className="hero-note">Limited capacity. Please apply early.</p>
          </div>

          <div className="hero-media">
            <div className="hero-media-inner">
              <img
                src="/hero-data-science.jpg"
                alt="Illustrative image of an international data science learning environment"
              />
            </div>
            <p className="hero-caption">
              This hero image is used to express the atmosphere of the program.
              The campus photos below show the actual environment at
              Ritsumeikan.
            </p>
          </div>
        </section>

        <section className="logo-band">
          <div className="logo-band-card">
            <div className="logo-band-mark">
              <img src="/tate.jpg" alt="Ritsumeikan logo mark" />
            </div>
            <div className="logo-band-copy">
              <p className="section-kicker">Why RDSP?</p>
              <h2>Study in Japan. Experience something real.</h2>
              <p>
                RDSP is not only a short academic program. It is also a chance
                to join an international classroom, stay on campus, meet
                Ritsumeikan students, and enjoy technology, culture, and campus
                life in one program.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <p className="section-kicker">Program strengths</p>
            <h2>Why students choose this program</h2>
          </div>

          <div className="grid four">
            {highlights.map((item) => (
              <article className="card feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <p className="section-kicker">What you may experience</p>
            <h2>More than lectures</h2>
            <p>
              This page will continue to be updated as details are confirmed.
              Even at this stage, the program already offers a strong mix of
              academic study, student exchange, and hands-on experiences.
            </p>
          </div>

          <div className="experience-grid">
            {experienceCards.map((item) => (
              <article className="experience-card" key={item.title}>
                <div className="experience-image-wrap">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="experience-image"
                  />
                </div>
                <div className="experience-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <p className="section-kicker">What you will study</p>
            <h2>Data science in practice</h2>
            <p>
              The program aims to combine academic understanding with practical
              thinking, visualisation, and discussion in an international
              learning environment.
            </p>
          </div>

          <article className="card practice-card">
            <div className="practice-media">
              <img
                src="/hero-real-data-science.jpg"
                alt="Illustrative image of students working with data science dashboards and visualisations"
                className="practice-image"
              />
            </div>
            <div className="practice-copy">
              <p className="section-kicker">Learning image</p>
              <h3>A clear image of data science learning</h3>
              <p>
                This image is used as an illustration of the kind of analytical
                mindset and visual learning atmosphere that matches the spirit
                of RDSP.
              </p>
              <p>
                Together with the real campus photos and faculty information on
                this page, it helps visitors quickly understand the academic
                direction of the program.
              </p>
            </div>
          </article>
        </section>

        <section className="section alt">
          <div className="section-head">
            <p className="section-kicker">Actual campus scenes</p>
            <h2>See the real OIC environment</h2>
            <p>
              These photos show the actual Osaka Ibaraki Campus environment and
              help make the page feel more real, more grounded, and more
              trustworthy.
            </p>
          </div>

          <div className="real-campus-grid">
            {realCampusGallery.map((item) => (
              <article className="card real-campus-card" key={item.title}>
                <img src={item.src} alt={item.title} className="card-image" />
                <div className="card-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt">
          <div className="section-head">
            <p className="section-kicker">Academic environment</p>
            <h2>Modern learning spaces and classroom atmosphere</h2>
          </div>

          <div className="mosaic four-up">
            {academicGallery.map((src, index) => (
              <div className="mosaic-item" key={src}>
                <img src={src} alt={`Academic environment ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section id="faculty" className="section">
          <div className="section-head">
            <p className="section-kicker">Faculty</p>
            <h2>Meet your instructors</h2>
            <p>
              The following five faculty members are confirmed. Additional guest
              sessions or special appearances may be announced later on this
              page.
            </p>
          </div>

          <div className="faculty-grid">
            {coreFaculty.map((person) => (
              <article
                className={`card faculty-card ${
                  person.image ? "faculty-card-photo" : ""
                }`}
                key={person.name}
              >
                {person.image ? (
                  <div className="faculty-photo-row">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="faculty-photo"
                    />
                    <div className="faculty-text">
                      <p className="faculty-name">{person.name}</p>
                      <p className="faculty-title">{person.title}</p>
                      <p>{person.text}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="faculty-name">{person.name}</p>
                    <p className="faculty-title">{person.title}</p>
                    <p>{person.text}</p>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section alt">
          <div className="section-head">
            <p className="section-kicker">Technology and making</p>
            <h2>See future technology on campus</h2>
            <p>
              We are also adjusting possible added experiences related to
              fabrication, technology, and digital making. Confirmed details
              will be posted here.
            </p>
          </div>

          <div className="mosaic tech-mosaic">
            {techGallery.map((src, index) => (
              <div className="mosaic-item" key={src}>
                <img src={src} alt={`Technology space ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <p className="section-kicker">Student life</p>
            <h2>Sports, culture, and connection</h2>
          </div>

          <div className="mosaic activity-mosaic">
            {activityGallery.map((src, index) => (
              <div className="mosaic-item" key={src}>
                <img src={src} alt={`Student activity ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section id="campus" className="section alt">
          <div className="section-head">
            <p className="section-kicker">Campus</p>
            <h2>A modern campus in Osaka</h2>
            <p>
              OIC offers study spaces, collaboration spaces, practical
              facilities, and a campus environment that feels both academic and
              welcoming.
            </p>
          </div>

          <div className="two-col">
            <article className="card campus-card tall">
              <img
                src="/oic-campus-courtyard.jpg"
                alt="Open courtyard at Osaka Ibaraki Campus"
                className="card-image"
              />
              <div className="card-copy">
                <h3>Actual OIC courtyard</h3>
                <p>
                  This is a real campus view at OIC. The open layout and modern
                  architecture help visitors immediately feel the atmosphere of
                  the university.
                </p>
              </div>
            </article>

            <div className="stack-col">
              <article className="card">
                <img
                  src="/oic-digital-display.jpg"
                  alt="Digital display and information monitors at OIC"
                  className="card-image"
                />
                <div className="card-copy">
                  <h3>Digital campus atmosphere</h3>
                  <p>
                    Screens, data, and open interiors visually support the image
                    of a future-oriented academic environment.
                  </p>
                </div>
              </article>

              <article className="card">
                <img
                  src="/oic-skywalk.jpg"
                  alt="Skywalk and connected buildings at Osaka Ibaraki Campus"
                  className="card-image"
                />
                <div className="card-copy">
                  <h3>Connected learning spaces</h3>
                  <p>
                    The buildings are physically connected in a way that gives
                    the campus a strong sense of scale, movement, and openness.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <p className="section-kicker">Campus life</p>
            <h2>Dining and daily life on campus</h2>
            <p>
              Students experience daily life on campus, including meals,
              accommodation, and shared spaces designed for comfort and
              interaction.
            </p>
          </div>

          <div className="campus-life-grid">
            <article className="card campus-life-main">
              <img
                src="/food-park.jpg"
                alt="OIC Food Park dining hall"
                className="card-image wide-image"
              />
              <div className="card-copy">
                <h3>OIC Food Park</h3>
                <p>
                  A bright and comfortable dining space on campus where students
                  can enjoy daily meals and spend time with others.
                </p>
              </div>
            </article>

            <article className="card">
              <img
                src="/meal-shop.jpg"
                alt="OIC meal shop"
                className="card-image"
              />
              <div className="card-copy">
                <h3>Meal shop on campus</h3>
                <p>
                  A convenient campus shop for daily needs, light meals, and
                  practical student life support.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <p className="section-kicker">Quick facts</p>
            <h2>Program information</h2>
          </div>

          <div className="grid facts-grid">
            {quickFacts.map((item) => (
              <article className="card fact-card" key={item.label}>
                <p className="fact-label">{item.label}</p>
                <h3>{item.value}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="accommodation" className="section alt">
          <div className="section-head">
            <p className="section-kicker">Accommodation</p>
            <h2>Stay at the OIC Seminar House</h2>
            <p>
              Participants stay on campus in shared rooms separated by gender.
              The residence offers a practical and student-friendly environment
              for short-term study in Japan.
            </p>
          </div>

          <div className="mosaic accommodation-mosaic">
            {accommodationGallery.map((src, index) => (
              <div className="mosaic-item" key={src}>
                <img src={src} alt={`Accommodation ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <p className="section-kicker">Fees</p>
            <h2>What is included</h2>
          </div>

          <div className="two-col">
            <article className="card">
              <h3>Included</h3>
              <ul className="list">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3>Not included</h3>
              <ul className="list">
                {notIncludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section alt">
          <div className="section-head">
            <p className="section-kicker">Notes</p>
            <h2>Please read before applying</h2>
          </div>

          <article className="card">
            <ul className="list">
              {noteItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="apply" className="section final-cta">
          <article className="cta-card">
            <div className="cta-copy">
              <p className="section-kicker">Join RDSP</p>
              <h2>Study data science in Japan</h2>
              <p>
                Learn in English, live on campus, meet Ritsumeikan students,
                and explore future technology in a real university environment.
              </p>
            </div>

            <div className="cta-actions">
              <a className="btn btn-primary" href={applyLink}>
                Contact Us
              </a>
              <a
                className="btn btn-secondary"
                href="https://www.rsjprwjp.com/"
              >
                Main Program Site
              </a>
            </div>
          </article>
        </section>
      </main>

      <style>{`
        html {
          scroll-behaviour: smooth;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at top, rgba(182, 33, 52, 0.07), transparent 36%),
            linear-gradient(180deg, #f9fafc 0%, #f1f4f9 100%);
          color: #12253e;
          font-family: Arial, Helvetica, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
          width: 100%;
        }

        .page-shell {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 18px 0 72px;
        }

        .site-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
          padding: 12px 0;
        }

        .brand {
          display: inline-flex;
          align-items: center;
        }

        .brand-logo {
          width: 300px;
          max-width: 100%;
          height: auto;
        }

        .site-nav {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 14px;
          font-weight: 700;
        }

        .site-nav a {
          color: #4b5d73;
        }

        .site-nav .nav-cta {
          background: #b5333b;
          color: #ffffff;
          padding: 10px 14px;
          border-radius: 999px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.02fr 1.12fr;
          gap: 24px;
          align-items: stretch;
        }

        .hero-copy,
        .hero-media,
        .logo-band-card,
        .card,
        .cta-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(18, 37, 62, 0.08);
          border-radius: 28px;
          box-shadow: 0 18px 48px rgba(18, 37, 62, 0.08);
        }

        .hero-copy {
          padding: 34px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-media {
          position: relative;
          overflow: hidden;
          min-height: 620px;
          padding: 18px 18px 76px;
          background:
            radial-gradient(circle at 20% 20%, rgba(65, 130, 255, 0.18), transparent 28%),
            linear-gradient(135deg, #0f1c34 0%, #10284f 50%, #143765 100%);
        }

        .hero-media-inner {
          height: 100%;
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.04);
        }

        .hero-media img {
          width: 100%;
          height: 100%;
          max-height: 100%;
          object-fit: contain;
          object-position: center center;
        }

        .hero-caption {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 14px;
          margin: 0;
          padding: 8px 10px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.88);
          color: #516275;
          font-size: 12px;
          line-height: 1.5;
        }

        .eyebrow,
        .section-kicker,
        .fact-label {
          margin: 0 0 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b5333b;
        }

        h1 {
          margin: 0;
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        h2 {
          margin: 0;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.14;
          letter-spacing: -0.02em;
        }

        h3 {
          margin: 0 0 10px;
          font-size: 21px;
          line-height: 1.3;
        }

        p {
          margin: 0;
          font-size: 16px;
          line-height: 1.72;
        }

        .hero-lead {
          margin-top: 16px;
          font-size: 19px;
          max-width: 620px;
        }

        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .hero-pills span {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #f4e7e9;
          color: #9f2f38;
          font-size: 14px;
          font-weight: 700;
        }

        .hero-actions,
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 18px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 700;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }

        .btn-primary {
          background: #b5333b;
          color: #ffffff;
        }

        .btn-secondary {
          background: #ffffff;
          color: #12253e;
          border: 1px solid rgba(18, 37, 62, 0.12);
        }

        .hero-note {
          margin-top: 16px;
          font-weight: 700;
          color: #a55500;
        }

        .logo-band {
          padding-top: 26px;
        }

        .logo-band-card {
          display: grid;
          grid-template-columns: 112px 1fr;
          gap: 20px;
          padding: 22px;
          align-items: center;
        }

        .logo-band-mark {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-band-mark img {
          width: 70px;
          height: auto;
        }

        .logo-band-copy p {
          margin-top: 8px;
          max-width: 820px;
        }

        .section {
          padding: 30px 0;
        }

        .section.alt .card,
        .section.alt .logo-band-card {
          background: rgba(255, 255, 255, 0.94);
        }

        .section-head {
          margin-bottom: 18px;
        }

        .section-head p {
          margin-top: 10px;
          max-width: 760px;
        }

        .grid {
          display: grid;
          gap: 18px;
        }

        .grid.four {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .facts-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .feature-card,
        .faculty-card,
        .fact-card,
        .card {
          padding: 24px;
        }

        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .faculty-name {
          font-size: 21px;
          font-weight: 700;
          line-height: 1.25;
        }

        .faculty-title {
          margin: 6px 0 10px;
          color: #516275;
          font-size: 14px;
          line-height: 1.6;
        }

        .faculty-card-photo {
          padding: 20px;
        }

        .faculty-photo-row {
          display: grid;
          grid-template-columns: 86px 1fr;
          gap: 16px;
          align-items: start;
        }

        .faculty-photo {
          width: 86px;
          height: 86px;
          object-fit: cover;
          border-radius: 18px;
          border: 1px solid rgba(18, 37, 62, 0.08);
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .experience-card {
          overflow: hidden;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(18, 37, 62, 0.08);
          border-radius: 24px;
          box-shadow: 0 18px 48px rgba(18, 37, 62, 0.08);
        }

        .experience-image-wrap {
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .experience-image {
          height: 100%;
          object-fit: cover;
        }

        .experience-body {
          padding: 20px 22px 24px;
        }

        .practice-card {
          display: grid;
          grid-template-columns: 1.06fr 0.94fr;
          gap: 0;
          overflow: hidden;
          padding: 0;
        }

        .practice-media {
          min-height: 100%;
        }

        .practice-image {
          height: 100%;
          min-height: 420px;
          object-fit: cover;
        }

        .practice-copy {
          padding: 28px 28px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .practice-copy p + p {
          margin-top: 12px;
        }

        .real-campus-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .real-campus-card .card-image {
          height: 280px;
          object-fit: cover;
        }

        .mosaic {
          display: grid;
          gap: 16px;
        }

        .four-up {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .tech-mosaic,
        .activity-mosaic,
        .accommodation-mosaic {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .mosaic-item {
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(18, 37, 62, 0.08);
          box-shadow: 0 16px 38px rgba(18, 37, 62, 0.08);
          background: #fff;
        }

        .mosaic-item img {
          height: 100%;
          min-height: 230px;
          object-fit: cover;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 18px;
        }

        .stack-col {
          display: grid;
          gap: 18px;
        }

        .campus-card.tall .card-image {
          height: 100%;
          min-height: 480px;
          object-fit: cover;
        }

        .campus-life-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
        }

        .campus-life-main .wide-image {
          max-height: 420px;
          object-fit: cover;
        }

        .card-image {
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          object-fit: cover;
          max-height: 360px;
        }

        .card-copy {
          padding-top: 18px;
        }

        .fact-card h3 {
          margin-bottom: 8px;
        }

        .list {
          margin: 0;
          padding-left: 20px;
          display: grid;
          gap: 10px;
        }

        .list li {
          font-size: 16px;
          line-height: 1.7;
        }

        .cta-card {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: center;
          padding: 28px 30px;
        }

        .cta-copy p:not(.section-kicker) {
          margin-top: 10px;
          max-width: 760px;
        }

        .final-cta {
          padding-bottom: 8px;
        }

        @media (max-width: 1100px) {
          .grid.four,
          .four-up,
          .tech-mosaic,
          .activity-mosaic,
          .accommodation-mosaic {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .facts-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .hero,
          .practice-card,
          .two-col,
          .campus-life-grid,
          .cta-card,
          .logo-band-card {
            grid-template-columns: 1fr;
          }

          .faculty-grid,
          .experience-grid,
          .real-campus-grid,
          .facts-grid {
            grid-template-columns: 1fr;
          }

          .hero-media {
            min-height: 460px;
          }

          .campus-card.tall .card-image,
          .practice-image {
            min-height: 320px;
          }

          .site-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .page-shell {
            width: min(100%, calc(100% - 20px));
            padding: 12px 0 56px;
          }

          .hero-copy,
          .card,
          .cta-card,
          .logo-band-card {
            padding: 20px;
          }

          .hero-media {
            padding: 12px 12px 72px;
            min-height: 360px;
          }

          .grid.four,
          .four-up,
          .tech-mosaic,
          .activity-mosaic,
          .accommodation-mosaic {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 36px;
          }

          h2 {
            font-size: 28px;
          }

          .brand-logo {
            width: 220px;
          }

          .site-nav {
            gap: 12px;
          }

          .btn {
            width: 100%;
          }

          .hero-actions,
          .cta-actions {
            flex-direction: column;
          }

          .faculty-photo-row {
            grid-template-columns: 72px 1fr;
          }

          .faculty-photo {
            width: 72px;
            height: 72px;
          }
        }
      `}</style>
    </>
  );
}
