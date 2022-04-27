import React from 'react';
import JoeSplashPic from '../assets/aws-logo.png';
import { useLocation } from 'react-router-dom';

const AboutCard = () => {
  const location = useLocation();

  const getDescription = () => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            <h2>This is a new Service!!!</h2>

          </>
        );
        break;
      default:
        return <p>Regular Person</p>;
    }
  };

  return (
    <>
      <section className="about-card">
        <table>
          <tbody>
            <tr>
              <td>
                <article>{getDescription()}</article>
              </td>
              <td>
                <img src={JoeSplashPic} alt="Joe Splash Pic" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AboutCard;
