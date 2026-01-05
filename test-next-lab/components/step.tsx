type StepProps  = {
    name : String, 
    title : String,
    description : String
}
const Step = ({name, title, description}: StepProps) => {
    return (
        <>
        <div>
            <span>{name}</span>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        </>
    )
}
export default Step