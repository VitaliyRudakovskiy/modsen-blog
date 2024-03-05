import * as Yup from 'yup';

const contactScheme = Yup.object()
  .shape({
    name: Yup.string().min(2, 'invalidNameMin').max(20, 'invalidNameMax'),
    email: Yup.string().email('invalidEmail'),
    topic: Yup.string(),
    message: Yup.string().min(30, 'invalidMessage'),
  })
  .required();

export default contactScheme;
