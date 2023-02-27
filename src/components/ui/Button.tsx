interface ButtonProps {
  handleClick?: () => void
  label: string
}

export const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <button
      className='rounded-md bg-primary px-4 py-2 font-semibold ring-[#FFB500] duration-500 hover:bg-secondary hover:ring-1 active:bg-accent'
      onClick={handleClick}
      aria-label={`${label} button`}
      tabIndex={0}
      >
      {label}
    </button>
  )
}
