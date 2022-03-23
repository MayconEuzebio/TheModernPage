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

function daysBetween(date1, date2) {

    console.log(date1, date2);
    // The number of milliseconds in one day
    const ONE_DAY = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1 - date2);

    // Convert back to days and return
    return Math.round(differenceMs / ONE_DAY);

}

function CountLovesDay() {
    const   days = daysBetween(new Date('01/07/2022'), new Date()),
            [   count,
                weddingDay, 
                setCountLove,] = useState(days);

    function countDays() {
        setCountLove(count + 1);
    }

    function clear() {
        setCountLove(days);
    }

    function inputWeddingDay() {
        if ( Object.prototype.toString.call(weddingDay) === '[object Date]' )
        //if ( false === true)
            return false
        else {
            return (
                <div>
                    <label>Inform the wedding day</label>
                    <input type="date" id="weddingDay" name="weddingDay" value={weddingDay}></input>
                    <br></br>
                </div>
            )
        }
    }

    return (
        <div>
            <br></br>
            <div>{count} days of marriage</div>
            <br></br>
            {inputWeddingDay()}
            <button onClick={countDays}>And the other day?</button>
            <button onClick={clear}>Today?</button>
        </div>
    )
}

export default Home