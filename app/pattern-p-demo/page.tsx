import styles from './page.module.css';

const programs = [
  { code: 'RWJP', title: 'Ritsumeikan Winter & Summer Program', copy: 'Academic courses in English with Japanese culture experiences.', image: '/class-kovacs.jpg', tone: 'red' },
  { code: 'RWJP Express', title: 'Intensive short-term study', copy: 'Focused learning in a compact programme format.', image: '/campus-autumn.jpg', tone: 'gold' },
  { code: 'RDSP', title: 'Research & Discussion Short-term Program', copy: 'Research, discussion and collaborative learning.', image: '/hero-real-data-science.jpg', tone: 'green' },
  { code: 'RBMP', title: 'Ritsumeikan Business Management Program', copy: 'Business learning with practical and cross-cultural perspectives.', image: '/co-creation-hub.jpg', tone: 'navy' },
];

const stories = [
  { name: 'Student story', meta: 'Short-term programme', quote: 'Kyoto became a classroom beyond the campus.', image: '/HANANTOValentinusRoby.jpg' },
  { name: 'Student story', meta: 'Global learning', quote: 'I learned by sharing ideas with people from different backgrounds.', image: '/class-hananto.jpg' },
  { name: 'Student story', meta: 'Campus experience', quote: 'The programme connected academic study with everyday life in Japan.', image: '/hero-hockey-group.jpg' },
];

export default function PatternPDemoPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Ritsumeikan University home">
          <span className={styles.brandMark}>R</span>
          <span>Ritsumeikan University</span>
        </a>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#programs">Programs</a>
          <a href="#campus">Campus Life</a>
          <a href="#stories">Student Stories</a>
          <a href="#apply">Apply</a>
          <a href="#news">FAQ</a>
        </nav>
        <div className={styles.headerTools}><span>◎ English</span><span>⌕</span></div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroImageWrap}>
          <img src="/campus-autumn.jpg" alt="Ritsumeikan campus in autumn" className={styles.heroImage} />
        </div>
        <div className={styles.heroCopy}>
          <div className={styles.heroMotif} aria-hidden="true">京</div>
          <p className={styles.eyebrow}>RITSUMEIKAN SHORT-TERM STUDY</p>
          <h1>Short-Term<br />Study in Kyoto</h1>
          <p className={styles.heroLead}>Learn, explore, and connect<br />at Ritsumeikan University.</p>
          <div className={styles.heroActions}>
            <a className={styles.buttonLight} href="#programs">Explore Programs <span>→</span></a>
            <a className={styles.buttonOutline} href="#apply">Apply Now</a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.programSection}`} id="programs">
        <div className={styles.sideIntro}>
          <p className={styles.kicker}>PROGRAMS</p>
          <h2>Find the program<br />that fits you</h2>
          <a href="#programs" className={styles.textLink}>View all programs →</a>
        </div>
        <div className={styles.programGrid}>
          {programs.map((program) => (
            <article key={program.code} className={styles.programCard}>
              <img src={program.image} alt="" />
              <div className={styles.programBody}>
                <h3 className={styles[program.tone]}>{program.code}</h3>
                <p className={styles.programTitle}>{program.title}</p>
                <p>{program.copy}</p>
                <a href="#apply" aria-label={`Explore ${program.code}`} className={`${styles.circleArrow} ${styles[`${program.tone}Bg`]}`}>→</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.whySection}`} id="campus">
        <div className={styles.sideIntro}>
          <p className={styles.kicker}>WHY RITSUMEIKAN</p>
          <h2>Why study at<br />Ritsumeikan?</h2>
          <a href="#campus" className={styles.textLink}>Discover more →</a>
        </div>
        <div className={styles.mosaic}>
          <article className={`${styles.mosaicCard} ${styles.mosaicTall}`}>
            <img src="/class-kovacs.jpg" alt="Students learning in class" />
            <div className={styles.overlay}><h3>Academic<br />Excellence</h3><p>Learn through globally minded academic experiences.</p></div>
          </article>
          <article className={`${styles.mosaicCard} ${styles.mosaicTop}`}>
            <img src="/campus-autumn.jpg" alt="Ritsumeikan campus" />
            <div className={styles.overlay}><h3>Kyoto:<br />Your Classroom</h3><p>Study where history, culture and innovation meet.</p></div>
          </article>
          <article className={`${styles.mosaicCard} ${styles.mosaicSmall}`}>
            <img src="/hero-hockey-group.jpg" alt="Students together" />
            <div className={styles.overlay}><h3>Global<br />Community</h3><p>Connect with students from around the world.</p></div>
          </article>
          <article className={`${styles.mosaicCard} ${styles.mosaicWide}`}>
            <img src="/food-park.jpg" alt="Japanese food and culture" />
            <div className={styles.overlay}><h3>Culture<br />Everyday</h3><p>Experience Japanese culture through daily life and activities.</p></div>
            <a href="#stories" className={styles.goldArrow} aria-label="Explore culture">→</a>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.storySection}`} id="stories">
        <div className={styles.sideIntro}>
          <p className={styles.kicker}>STORIES</p>
          <h2>Student Stories</h2>
          <a href="#stories" className={styles.textLink}>Read more stories →</a>
        </div>
        <div className={styles.storyGrid}>
          {stories.map((story) => (
            <article className={styles.storyCard} key={story.quote}>
              <img src={story.image} alt="" />
              <div>
                <p className={styles.quote}>“{story.quote}”</p>
                <p className={styles.storyMeta}>{story.name}<br /><span>{story.meta}</span></p>
              </div>
              <span className={styles.storyArrow}>→</span>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.lifeSection}`}>
        <div className={styles.sideIntro}>
          <p className={styles.kicker}>LIFE IN KYOTO</p>
          <h2>Study. Explore.<br />Belong.</h2>
          <a href="#campus" className={styles.textLink}>See more →</a>
        </div>
        <div className={styles.lifeGrid}>
          <article className={styles.lifeCard}><img src="/campus-autumn.jpg" alt="Campus" /><div><h3>Vibrant Campus</h3><p>Modern facilities and welcoming learning spaces.</p></div></article>
          <article className={styles.lifeCard}><img src="/co-creation-hub.jpg" alt="Collaborative learning space" /><div><h3>Learn Together</h3><p>Spaces designed for connection and co-creation.</p></div></article>
          <article className={styles.lifeCard}><img src="/hockey-practice.jpg" alt="Student activity" /><div><h3>Student Activities</h3><p>Clubs, events and shared experiences.</p></div></article>
          <article className={styles.lifeCard}><img src="/class-hananto.jpg" alt="Student support" /><div><h3>Support You Can Count On</h3><p>Guidance before, during and after your stay.</p></div></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.newsSection}`} id="news">
        <div className={styles.sideIntro}>
          <p className={styles.kicker}>UPDATES</p>
          <h2>News &amp;<br />Deadlines</h2>
          <a href="#news" className={styles.textLink}>View all news →</a>
        </div>
        <div className={styles.newsGrid}>
          <article><span>APPLICATION</span><h3>Application information</h3><p>Check each programme page for the current application period and requirements.</p><b>→</b></article>
          <article><span>ORIENTATION</span><h3>Before you arrive</h3><p>Programme-specific orientation details are provided to confirmed participants.</p><b>→</b></article>
          <article><span>PROGRAMMES</span><h3>Find your best fit</h3><p>Compare programme themes, duration and learning style.</p><b>→</b></article>
          <article className={styles.timelineTile}><span>START HERE</span><h3>Application Timeline</h3><p>Plan your journey step by step.</p><b>→</b></article>
        </div>
      </section>

      <section className={styles.finalCta} id="apply">
        <div><p className={styles.kickerLight}>YOUR NEXT CHAPTER</p><h2>Ready to start your journey?</h2><p>Make Kyoto your classroom.</p></div>
        <a className={styles.buttonLight} href="#programs">Explore Programs →</a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}><span className={styles.brandMark}>R</span><strong>Ritsumeikan<br />University</strong><p>Shaping Peace. Inspiring the Future.</p></div>
        <div><strong>Programs</strong><a href="#programs">RWJP</a><a href="#programs">RWJP Express</a><a href="#programs">RDSP</a><a href="#programs">RBMP</a></div>
        <div><strong>Campus Life</strong><a href="#campus">About Kyoto</a><a href="#campus">Student Support</a><a href="#stories">Activities</a></div>
        <div><strong>Resources</strong><a href="#news">Apply</a><a href="#news">FAQ</a><a href="#news">Contact</a></div>
        <div><strong>Connect</strong><span>Instagram · YouTube · LinkedIn</span></div>
      </footer>
    </main>
  );
}
