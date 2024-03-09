import emailjs from '@emailjs/browser';

import { serviceId, templateSubscribeId, userId } from './config';

const subscribe = async (email: string) => {
  if (serviceId && templateSubscribeId && userId) {
    await emailjs.send(
      serviceId,
      templateSubscribeId,
      {
        to_email: email,
        from_name: 'Vitaliy Rudakovskiy',
      },
      userId
    );
  }
};

export default subscribe;
