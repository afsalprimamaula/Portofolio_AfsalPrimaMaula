// Tambahkan 'id' ke dalam parameter agar section bisa di-scroll
const Section = ({ children, className, id }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center px-8 md:px-24 ${className}`}>
    {children}
  </section>
);