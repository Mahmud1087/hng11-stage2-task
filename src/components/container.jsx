const Container = ({ children, className }) => {
  return (
    <section className={`w-[90%] lg:w-[88%] mx-auto ${className}`}>
      {children}
    </section>
  );
};
export default Container;
