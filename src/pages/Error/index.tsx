import React, { useEffect } from 'react';
import ErrorSvg from '../../assets/404-error-animate.svg';

const Error = () => {
  useEffect(() => {
    document.title = `Oops - Page Not Found`;
  }, []);

  return (
    <React.Fragment>
      <main>
        <section className="Headling-error">
          <h1>
            <span>Uh-oh!</span> <br />
            The page you are looking for seems to have gotten lost in the infinity of the Internet
          </h1>
        </section>
        <section className="section-img">
          <img src={ErrorSvg} alt="Gif animée Error 404" />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Error;
