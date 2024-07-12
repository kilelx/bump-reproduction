import { btnProps } from "@/types"

const Button = ({title, btnStyles, link}: btnProps) => {
  return (
    <a
        href={link}
        className={`btn-shadow py-4 pl-6 pr-16 font-medium transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${btnStyles} overflow-hidden`}
    >
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-tertiary-yellow absolute w-[96px] top-0 -right-10" viewBox="0 0 244 231"><path d="M214.83,87.73c-17.84-8.81-38.44-9.61-58.33-9.98,3.14-17.71-1.32-36.64-12.05-51.08C133.72,12.23,116.88,2.48,99.02.37c-13.03-1.54-27.57,1.53-35.83,11.72-7.64,9.43-8.24,23.12-4.27,34.59,3.97,11.47,11.86,21.12,20.09,30.03-15.83-9.17-45.78-12.04-60.39-1.04C4,86.67-3.12,106.74,1.3,124.49c4.42,17.75,20.13,32.13,38.2,34.98-6.2,16.88.54,36.63,13.35,49.25,12.81,12.62,30.63,18.99,48.4,21.75,13.65,2.12,29.15,1.78,39.29-7.61,7.84-7.26,10.76-18.69,9.96-29.34-.8-10.66-4.87-20.77-9.18-30.55,19.37,5.78,39.47,11.63,59.5,8.88,20.03-2.75,40.03-16.61,43.14-36.58,3.06-19.66-11.29-38.73-29.13-47.54Z"></path></svg>
    </a>
  )
}

export default Button