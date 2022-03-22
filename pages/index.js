import { useState } from 'react';

function Home() {
    return (
        <div>
            <h2>Married Days Counter</h2>
            <div><b>Dedication:</b> I Love you TREM, because this i return to the game!</div>
            <CountLovesDay />
        </div>
    )
}

function CountLovesDay() {
    const   days = 74,
            [count, setCountLove] = useState(days);

    function countDays() {
        setCountLove(count + 1);
    }

    function clear() {
        setCountLove(days);
    }

    return (
        <div>
            <br></br>
            <div>{count} days of marriage</div>
            <br></br>
            <button onClick={countDays}>And the other day?</button>
            <button onClick={clear}>Restart</button>
        </div>
    )
}

export default Home