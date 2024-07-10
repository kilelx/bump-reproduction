import { btnProps } from "@/types"

const Button = ({title, btnStyles, link}: btnProps) => {
  return (
    <a
        href={link}
        className={`inline-block py-4 pl-6 pr-16 rounded-full font-medium font-clash-display shadow-btn transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${btnStyles}`}
    >
        {title}
    </a>
  )
}

export default Button