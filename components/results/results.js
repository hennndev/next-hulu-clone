import Result from "./result"

const Results = ({results}) => {
    return (
        <div className="grid grid-cols-auto-fill gap-y-3 gap-x-5 m-5">
            {results.results.map(result => (
                <Result key={result.id} result={result}/>
            ))}
        </div>
    )
}

export default Results
