import { useState } from "react"
import ErrorMessage from "../components/ErrorMessage";


export const withErrorApi = (View)=> {
    return props => {
        let [error, setError] = useState(false);

        return(
            <>
                {!error 
                    ? <View
                            setError={setError}
                            {...props}
                        /> 
                    : <ErrorMessage/>
                }
            </>
        )
    }
}