import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() }<a href="https://github.com/ilir2523">Made by ilir2523</a></p>
      </Container>
    </footer>
  );
};

export default Footer;
