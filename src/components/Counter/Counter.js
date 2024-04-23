import React, { useEffect, useRef } from "react"

export const Counter = () => {
  const [count, setCount] = React.useState(null)
  const [pause, setPause] = React.useState(false)

  const countRef = useRef(null)

  //   const increment = () => {
  //     setCount((count) => count + 1)
  //     setCount((count) => count + 1)
  //   }

  //   const decrement = () => {
  //     setCount(count - 1)
  //   }

  //   console.log("count ", +countRef?.current?.innerText)
  //   useEffect(() => {
  //     console.log("useEffect called")
  //     return () => {
  //       console.log("useEffect cleanup called")
  //     }
  //   })

  useEffect(() => {
    let intVal
    if (!pause) {
      console.log("setInterval called")

      intVal = setInterval(() => {
        setCount((count) => count + 1)
        //countRef.current.innerText = +countRef.current.innerText + 1
      }, 1000)
    }

    return () => {
      console.log("clearInterval called")

      clearInterval(intVal)
    }
  }, [pause])

  const onPause = () => {
    console.log("onPause called")
    //clearInterval(intVal)
    setPause((p) => !p)
  }


  return (
    <div>
      <h1>Counter</h1>
      <div>
        <span>Counter:</span>

        <span ref={countRef}>{count}</span>
      </div>
      <button onClick={onPause}>{pause ? "Resume" : "Pause"}</button>
      {/* <button onClick={increment}>Increment twice</button>
      <button onClick={decrement}>Decrement</button> */}
    </div>
  )
}
