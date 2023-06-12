import { ReactNode } from 'react'

const classNames = (...classes) => classes.filter(Boolean).join(' ')

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button
    type="button"
    className={classNames(
      'rounded bg-purple-800 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
      className
    )}
    {...props}
  >
    {children}
  </button>
)
