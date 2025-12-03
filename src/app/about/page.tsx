import styles from '../styles/About.module.css';

export default function Page() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>About Page</h1>
      <h2 className={styles.subTitle}> This is the About page content</h2>

      <p className={styles.body}>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        It has survived not only five centuries,
        but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
        It has survived not only five centuries,
        but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
      <h2 className={styles.subTitle}> Services Offered</h2>

      <p className={styles.body}>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        It has survived not only five centuries,
        but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
      <ul className="list-disc list-inside text-black ml-5 mt-2 ">
        <li>EDUCATION</li>
        <li>FINANCE</li>
        <li>HEALTHCARE</li>
        <li>LAW</li>
        <li>TRAVEL</li>
        <li>TECHNOLOGY</li>
        <li>SPORTS</li>
      </ul>

      <h2 className={styles.subTitle}> Our Team</h2>
      <p className={styles.body}>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        It has survived not only five centuries,
        but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  );
}
