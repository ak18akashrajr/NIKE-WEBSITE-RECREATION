
const Button = ({label, iconURL,backgroundColor,textColor,borderColor}) => {
  return (
    <button className="flex justify-center items-center 
    gap-2 px-7 py-4 border 
    font-montserrat text-lg leading-none
     bg-coral-red 
     rounded-full
      text-white border-coral-red">
        {label}
        {iconURL && (
        <img src={iconURL} alt="arrow_right-icon" 
        className="ml-2 rounded-full w-5 h-5  text-white "/>
        )}
    </button>
  )
}

export default Button