import React from 'react';

import { Container } from './styles';

function Contact() {
  return (
    <Container>
      <h2>About me</h2>
      <p>
        Hi, my name is Vinícius Crisol, I am a Brazilian programming student. I
        created this blog with a goal: Help people to solve their problems more
        easily. When I was starting, I didn't have easy access to specific
        information about technologies. With that in mind, I decided to create
        this blog to try to make it easier for those just starting.
      </p>

      <ul>
        <h2>Contact</h2>

        <li>
          <strong>Phone: </strong>
          55 (16) 99104-3028
        </li>

        <li>
          <strong>E-mail: </strong>
          vinicius.crisol@etec.sp.gov.br
        </li>
        <li>
          <strong>Github: </strong>
          <a target='_blank' href='https://github.com/ViniciusCrisol/'>
            github.com/ViniciusCrisol
          </a>
        </li>
        <li>
          <strong>Linkedin: </strong>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/vin%C3%ADciuscrisol/'
          >
            linkedin.com/in/ViníciusCrisol
          </a>
        </li>
      </ul>

      <h2>Blog description</h2>
      <p>
        The blog was created with the SSG system of nextJs, NodeJs(Sqlite3,
        Express), the admin dashboard with pure ReactJs. To styled I used
        Styled-Components.
      </p>
      <br />
      <ul>
        <li>
          <a
            target='_blank'
            href='https://github.com/ViniciusCrisol/blog-nextJs'
          >
            Blog repository
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Contact;
