import {
  TeachersInfoBlock,
  TeacherInfoPart,
  TeacherInfoIcon,
  TeacherInfoName,
  Divider,
  TeacheInfoValue,
  TeacheInfoGreenValue,
} from './TeacherInfo.styled';

export const TeacherInfo = ({ lessons_done, rating, price_per_hour }) => {
  return (
    <TeachersInfoBlock>
      <TeacherInfoPart>
        {' '}
        <TeacherInfoIcon
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6667 4.13333C14.6667 3.3866 14.6667 3.01323 14.5213 2.72801C14.3935 2.47713 14.1895 2.27316 13.9387 2.14532C13.6534 2 13.2801 2 12.5333 2H12.2667C10.7732 2 10.0265 2 9.45603 2.29065C8.95426 2.54631 8.54631 2.95426 8.29065 3.45603C8 4.02646 8 4.77319 8 6.26667V14L8.0667 13.8999C8.5298 13.2053 8.76135 12.858 9.06727 12.6065C9.33809 12.3839 9.65016 12.2169 9.9856 12.1151C10.3645 12 10.7819 12 11.6168 12H12.5333C13.2801 12 13.6534 12 13.9387 11.8547C14.1895 11.7268 14.3935 11.5229 14.5213 11.272C14.6667 10.9868 14.6667 10.6134 14.6667 9.86667V4.13333Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33331 4.13333C1.33331 3.3866 1.33331 3.01323 1.47864 2.72801C1.60647 2.47713 1.81044 2.27316 2.06133 2.14532C2.34654 2 2.71991 2 3.46665 2H3.73331C5.22679 2 5.97352 2 6.54395 2.29065C7.04572 2.54631 7.45367 2.95426 7.70933 3.45603C7.99998 4.02646 7.99998 4.77319 7.99998 6.26667V14L7.93328 13.8999C7.47018 13.2053 7.23863 12.858 6.93271 12.6065C6.66188 12.3839 6.34982 12.2169 6.01438 12.1151C5.63548 12 5.21805 12 4.3832 12H3.46665C2.71991 12 2.34654 12 2.06133 11.8547C1.81044 11.7268 1.60647 11.5229 1.47864 11.272C1.33331 10.9868 1.33331 10.6134 1.33331 9.86667V4.13333Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </TeacherInfoIcon>
        <TeacherInfoName>Lessons online</TeacherInfoName>
      </TeacherInfoPart>
      <Divider />

      <TeacherInfoPart>
        {' '}
        <TeacherInfoName>Lessons done:</TeacherInfoName>
        <TeacheInfoValue>{lessons_done}</TeacheInfoValue>
      </TeacherInfoPart>
      <Divider />
      <TeacherInfoPart>
        <TeacherInfoIcon
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_44_535)">
            <path
              d="M6.20021 4.69703L8 1.28579L9.79979 4.69703C9.95896 4.9987 10.2491 5.20947 10.5851 5.26762L14.3856 5.92519L11.6975 8.69103C11.4598 8.93563 11.3489 9.27666 11.3975 9.61427L11.9465 13.4319L8.48537 11.7301C8.17929 11.5795 7.82071 11.5796 7.51463 11.7301L4.05348 13.4319L4.6025 9.61427C4.65105 9.27666 4.54024 8.93563 4.30252 8.69103L1.6144 5.92519L5.41486 5.26762C5.75095 5.20947 6.04104 4.9987 6.20021 4.69703ZM14.5177 5.78928L14.5175 5.78947L14.5177 5.78928ZM3.8834 13.5155C3.88344 13.5155 3.88349 13.5155 3.88353 13.5155L3.8834 13.5155Z"
              fill="#FFC531"
              stroke="#FFC531"
              strokeWidth="1.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_44_535">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </TeacherInfoIcon>
        <TeacherInfoName>Rating:</TeacherInfoName>
        <TeacheInfoValue>{rating}</TeacheInfoValue>
      </TeacherInfoPart>
      <Divider />
      <TeacherInfoPart>
        <TeacherInfoName>Price / 1 hour:</TeacherInfoName>
        <TeacheInfoGreenValue>{price_per_hour}$</TeacheInfoGreenValue>
      </TeacherInfoPart>
    </TeachersInfoBlock>
  );
};
