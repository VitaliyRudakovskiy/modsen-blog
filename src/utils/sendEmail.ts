import emailjs from '@emailjs/browser';

import { serviceId, templateId, userId } from './config';

const sendEmail = async (
  name: string,
  email: string,
  topic: string,
  message: string
) => {
  if (serviceId && templateId && userId) {
    await emailjs.send(
      serviceId,
      templateId,
      {
        to_name: name,
        to_email: email,
        from_name: 'Vitaliy Rudakovskiy',
        topic,
        message,
      },
      userId
    );
  }
};

export default sendEmail;
