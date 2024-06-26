const TimelineIcon = ({ completed }: { completed?: boolean | undefined }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="37"
      viewBox="0 0 36 37"
      fill="none"
    >
      <circle
        cx="18"
        cy="18.3789"
        r="18"
        fill={completed ? '#EBD6FF' : '#D9D9D9'}
      />
      <circle
        cx="18.4767"
        cy="18.8537"
        r="6.90444"
        fill={completed ? '#9933FF' : '#525252'}
      />
    </svg>
  );
};

export default TimelineIcon;
