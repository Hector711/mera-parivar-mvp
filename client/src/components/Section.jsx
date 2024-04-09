export default function Section({ children, tail, id }) {
  return (
    <section className={tail} id={id}>
      {children}
    </section>
  );
}
