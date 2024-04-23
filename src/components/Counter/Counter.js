import React, { useEffect } from "react"

export const Counter = () => {
  const [count, setCount] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const countRef = React.useRef(null)

  console.log("count ", countRef?.current?.textContent)

  useEffect(() => {
    console.log("useEffect render ")

    return () => {
      console.log("useEffect cleanup")
    }
  })

  useEffect(() => {
    let interval

    if (!pause) {
      console.log("setInterval")

      interval = setInterval(() => {
        console.log("increment")
        countRef.current.textContent = +countRef.current.textContent + 1

        //setCount((c) => c + 1)
      }, 1000)
    }

    return () => {
      console.log("clearInterval")
      clearInterval(interval)
    }
  }, [pause])

  // const incrementTwice = () => {
  //   increment()
  //   increment()
  // }

  // const decrementTwice = () => {
  //   decrement()
  //   decrement()
  // }

  // const increment = () => {
  //   setCount((c) => c + 1)
  // }

  // const decrement = () => {
  //   setCount((count) => count - 1)
  // }

  const onPause = () => {
    console.log("onPause")
    setPause((p) => !p)
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <span>Count:</span>
        <span ref={countRef}>{0}</span>
      </div>
      <button onClick={onPause}>{pause ? "Resume" : "Pause"}</button>
      {/* <button onClick={incrementTwice}>Increment twice</button>
      <button onClick={decrementTwice}>Decrement twice</button> */}
    </div>
  )
}
