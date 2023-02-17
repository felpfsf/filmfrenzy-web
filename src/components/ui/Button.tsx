interface ButtonProps {
  handleClick?: () => void
  label: string
}

export const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <button
      className='rounded-md bg-button px-4 py-2 font-semibold ring-[#FFB500] duration-500 hover:bg-button_hover hover:ring-1'
      onClick={handleClick}
      aria-label={`${label} button`}
      >
      {label}
    </button>
  )
}
