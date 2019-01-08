export const exampleAction = () =>(
    {
        type: 'Example'
    }
)

export const exampleActionTwo = (sampleData)=>(
    {
        type: 'Example-Two',
        payload: sampleData
    }
)