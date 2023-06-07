const Overview = ({ overview }: { overview: string }) => {
  const mediaOverview = overview ? overview : "Sinopse não disponível";
  return (
    <div className='mt-6 flex flex-col space-y-2'>
      <h1 className='font-semibold'>Sinopse</h1>
      <p className='text-sm leading-relaxed'>{mediaOverview}</p>
    </div>
  );
};

export default Overview;
