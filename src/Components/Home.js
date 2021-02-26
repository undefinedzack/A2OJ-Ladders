import {useState, useEffect} from 'react'
import axios from 'axios'

import {ladders} from './data'

const Home = () => {


    const [username, setUsername] = useState('undefinedzack')
    const [details, setDetails] = useState()
    const [division, setDivision] = useState(ladders.div_a)

    

    useEffect(() => {
        const url = 'https://codeforces.com/api/user.status?handle=' + username

        axios.get(url)
            .then(res => setDetails(res))
    }, [username])
    return (
        <>
            {/* {details && console.log(details)} */}
            <div className='container mt-5 mb-5'>
                <div className='d-flex justify-content-center'>
                    <h1>A2OJ</h1>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Username" 
                        aria-label="Username" aria-describedby="basic-addon1"
                        value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setDivision(ladders.div_a)}>Div A</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setDivision(ladders.div_b)}>Div B</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setDivision(ladders.div_c)}>Div C</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setDivision(ladders.div_d)}>Div D</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setDivision(ladders.div_e)}>Div E</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setDivision(ladders.div_1d)}>Div F</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={() => setDivision(ladders.div_1e)}>Div G</button>
                    </li>
                    </ul>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Problem</th> 
                            <th scope="col">Solved!</th>
                        </tr>
                    </thead>
                    <tbody>
                        {division.map((prob, index) => {
                            return(
                                <tr key={index}>
                                    <th scope="row">{prob[0]}</th>
                                    <td><a href={'https://codeforces.com/problemset/problem/'+prob[2]+'/'+prob[3]} > {prob[1]} </a></td>
                                    {details && details.data.result.map( (item, ) => {
                                        
                                        if (item.problem.contestId.toString() === prob[2] 
                                            && item.problem.index.toString() === prob[3] 
                                            && item.verdict === 'OK') {
                                            return(
                                                <td className='table-success'>
                                                    <pre>  <i className="bi bi-check2"></i></pre>
                                                </td>
                                            )
                                        }
                                        return <></>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home