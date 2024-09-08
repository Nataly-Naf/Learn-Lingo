import {
  ModalwindowWrapper,
  Background,
  OptionLabel,
  InputField,
  TitleText,
  SupportText,
  TeacherWrapper,
  StyledAvatar,
  TeacherText,
  TeacherNameText,
  QuestionTitleText,
  FieldWrapper,
} from './BookLessonModalWindow.styled';
import { IoClose } from 'react-icons/io5';
import { Button } from 'components/Button/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema
const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number must only contain digits')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  reason: yup.string().required('Please select a reason'),
});

export const BookLessonWindow = ({ teacher, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    alert(
      `Selected option: ${data.reason}\nFull Name: ${data.fullName}\nEmail: ${data.email}\nPhone Number: ${data.phoneNumber}`
    );
    closeModal();
  };

  return (
    <Background>
      <ModalwindowWrapper>
        <IoClose onClick={closeModal} />
        <TitleText>Book trial lesson</TitleText>
        <SupportText>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </SupportText>
        <TeacherWrapper>
          <StyledAvatar
            width="50px"
            src={teacher.avatar_url}
            alt={teacher.name}
          />
          <div>
            <TeacherText>Your teacher</TeacherText>
            <TeacherNameText>
              {teacher.name} {teacher.surname}
            </TeacherNameText>
          </div>
        </TeacherWrapper>
        <QuestionTitleText>
          What is your main reason for learning English?
        </QuestionTitleText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <OptionLabel>
            <input
              type="radio"
              value="Career and business"
              {...register('reason')}
            />
            Career and business
          </OptionLabel>
          <OptionLabel>
            <input
              type="radio"
              value="Lesson for kids"
              {...register('reason')}
            />
            Lesson for kids
          </OptionLabel>
          <OptionLabel>
            <input type="radio" value="Living abroad" {...register('reason')} />
            Living abroad
          </OptionLabel>
          <OptionLabel>
            <input
              type="radio"
              value="Exams and coursework"
              {...register('reason')}
            />
            Exams and coursework
          </OptionLabel>
          <OptionLabel>
            <input
              type="radio"
              value="Culture, travel or hobby"
              {...register('reason')}
            />
            Culture, travel or hobby
          </OptionLabel>
          {errors.reason && <p>{errors.reason.message}</p>}

          <FieldWrapper>
            <InputField
              type="text"
              placeholder="Full Name"
              {...register('fullName')}
            />
            {errors.fullName && <p>{errors.fullName.message}</p>}
            <InputField
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <InputField
              type="tel"
              placeholder="Phone Number"
              {...register('phoneNumber')}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          </FieldWrapper>

          <Button type="submit" text="Book"></Button>
        </form>
      </ModalwindowWrapper>
    </Background>
  );
};
