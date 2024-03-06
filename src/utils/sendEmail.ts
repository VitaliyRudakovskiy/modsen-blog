import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID;

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
