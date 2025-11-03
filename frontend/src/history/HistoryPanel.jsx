import "react"
import {useState, useEffect} from "react";

export function HistoryPanel() {
    
  const [history, setHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchHistory()
  })

  const fetchHistory = async () => {
        setIsLoading(true)
        // setError(null)
        // try{
        //     const response = await fetch("/api/challenge/history")
        //     if(!response.ok){
        //         throw new Error("Failed to fetch history")
        //     }
        //     const data = await response.json()
        //     setHistory(data.history)
        // }
        // catch(err){
        //     setError(err.message)
        // }
        // finally{
        //     setIsLoading(false)
        // }
    }

    if(isLoading){
        return <div className="loading">Loading History....</div>
    }

    if(error){
        return <div className="error-message">
            <p>{error}</p>
            <button onClick={fetchHistory}>Retry</button>
        </div>
    }
    return <div className="history-panel">
        <h2>History</h2>
        {history.length === 0 ? <p>No Challenge history</p> :
        <div className="history-list">
            {history.map((entry, index) => {
                return <MCQChallenge
                  challenege={challenge}
                  key={challenge.id}
                  showExplanation={true}
                />
            })}
             </div>}
    </div>
}