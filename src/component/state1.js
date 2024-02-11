import React, { useState } from 'react'

const state1 = () => {
    const [count, Setcount] = useState(0);
    const [str, setsr] = useState("mohit")
    console.log(count)
    return ( <
            div >
            <
            h1 > Current valu: (count) <
            button > onclick = {
                () = }
            Update the current valu <
            /button> <
            /h1>

            <
            h2 >
            Current String: { str } <
            br / >
            <
            button onClick = {
                () => {
                    if (str !== "") {
                        setstr("")
                    } else
                }
                setstr(str + "rohit")

            }
        } >
        Update the String with any 's name <
        /button>

    <
    /h2> <
    /div>
)
}

export default state1