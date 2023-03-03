import React, { useState, useEffect, FC } from 'react';
import { styled } from '@mui/material/styles';
import { VariantType, useSnackbar } from 'notistack';

import {
  Button,
  TextField,
  Stack,
  Typography,
} from '@mui/material';
// import SendMail from '../sendEmail';

const validateEmail = (email: string): boolean => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
});

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormValues>>(
    {},
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitVariant =
    (variant: VariantType) => () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar('Message Sent Successfully!', {
        variant,
      });
    };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    // Validate form data
    const newErrors: Partial<FormValues> = {};

    if (!formValues.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      window.alert('First name is required');
    }
    if (!formValues.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formValues.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    handleSubmitVariant('success')();
    // SendMail().catch(console.error);
  };

  return (
    <React.Fragment>
      <Form
        onSubmit={handleSubmit}
        sx={{
          mt: 10,
          mr: 2,
        }}
      >
        <Stack spacing={2}>
          <TextField
            label="First Name"
            name="firstName"
            className="contactForm"
            value={formValues.firstName}
            onChange={handleInputChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            // required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <TextField
            label="What Do You Want To Tell Me?"
            name="message"
            value={formValues.message}
            onChange={handleInputChange}
            error={!!errors.lastName}
            helperText={errors.message}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // onSubmit={handleSubmitVariant('success')}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Msg To Me'}
          </Button>
        </Stack>
      </Form>
    </React.Fragment>
  );
};

export default ContactForm;
