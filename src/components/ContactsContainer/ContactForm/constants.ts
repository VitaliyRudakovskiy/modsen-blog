import { FormInputsProps } from '@/types/formInputs';

export const contactOptions: string[] = [
  'Business',
  'Economy',
  'Startup',
  'Technology',
];

export const contactFormInputs: FormInputsProps[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'name',
  },
  {
    name: 'email',
    type: 'text',
    placeholder: 'email',
  },
];
