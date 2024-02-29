'use client';

import Error from 'next/error';

const NotFound = () => {
  return (
    <html lang='ru'>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
};

export default NotFound;
