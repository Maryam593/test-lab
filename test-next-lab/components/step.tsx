type StepProps  = {
    name : String, 
    title : String,
    description : String, 
//     className : String
}
const Step = ({name, title, description}: StepProps) => {
    return (
        <>
        <div>
            <div className="w-10 h-10 rounded-full bg-[#2F7F6F] text-white flex items-center justify-center font-bold">{name}</div>
            <h1 className="font-semibold">{title}</h1>
            <p className="text-sm text-gray-500">{description}</p>
            <svg className="absolute inset-0 w-full h-full">
            <path d="M10 300 C150 200, 300 400, 500 100"
      stroke="#2F7F6F"
      strokeWidth="4"
      fill="none" />
        </svg>
        </div>
        </>
    )
}
export default Step