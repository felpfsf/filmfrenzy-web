const Caption = ({ name }: { name: string }) => {
  return (
    <span className='rounded bg-accent px-2 py-px text-xs font-semibold text-primary'>
      {name}
    </span>
  );
};

export default Caption;
