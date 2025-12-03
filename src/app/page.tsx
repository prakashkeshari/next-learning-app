import Link from 'next/link';
import styles from './home_page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Master Modern Web Development
        </h1>
        <p className={styles.subTitle}>
          Join thousands of developers learning Next.js, React, and Node.js through our premium interactive courses.
        </p>
        <Link href="/blogs" className={styles.ctaButton}>
          Start Learning Now
        </Link>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.card}>
          <h3>🚀 Next.js Mastery</h3>
          <p>Deep dive into App Router, Server Components, and advanced patterns.</p>
        </div>
        <div className={styles.card}>
          <h3>⚛️ React Ecosystem</h3>
          <p>Learn state management, hooks, and performance optimization techniques.</p>
        </div>
        <div className={styles.card}>
          <h3>🟢 Node.js Backend</h3>
          <p>Build scalable APIs and microservices with Node.js and NestJS.</p>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className={styles.blogPreview}>
        <h2 className={styles.sectionTitle}>Latest Articles</h2>
        <div className={styles.blogGrid}>
          <div className={styles.blogItem}>
            <div className={styles.blogContent}>
              <h3>Next.js 15 Features</h3>
              <p>Explore the newest updates in the React framework for production.</p>
            </div>
          </div>
          <div className={styles.blogItem}>
            <div className={styles.blogContent}>
              <h3>React Server Components</h3>
              <p>Understanding the paradigm shift in frontend development.</p>
            </div>
          </div>
          <div className={styles.blogItem}>
            <div className={styles.blogContent}>
              <h3>TypeScript Best Practices</h3>
              <p>Write safer, more maintainable code with advanced types.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>

        <form className={styles.contactForm} action="/contact" method="get">
          <p>Have questions? Want to collaborate? We'd love to hear from you.</p>

          <Link href="/contact" className={styles.contactButton}>
            Go to Contact Form
          </Link>
        </form>
      </section>
    </div>
  );
}
