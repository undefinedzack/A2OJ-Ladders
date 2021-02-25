import {useState, useEffect} from 'react'
import axios from 'axios'

import {ladders} from './data'

const Home = () => {

    const [username, setUsername] = useState('undefinedzack')
    const [details, setDetails] = useState()

    const url = 'https://codeforces.com/api/user.status?handle=' + username

    useEffect(() => {
        axios.get(url)
            .then(res => setDetails(res))
            .then(console.log(details))
    }, [])
    return (
        <>
            <div className='container mt-5 mb-5'>
                {ladders.div_a.map((prob, index) => {
                    return(
                        <>
                            
                            <div className='row'>
                                <div className='col-md-2 d-flex justify-content-center'>
                                    <h1>{prob[0]}</h1>
                                </div>
                                <div className='col-md-6 d-flex justify-content-center'>
                                    <h1>{prob[1]}</h1>
                                </div>
                                <div className='col-md-4 d-flex justify-content-center'>
                                    {details && details.data.result.map( (item) => {
                                        if (item.problem.contestId == prob[2] 
                                            && item.problem.index == prob[3] 
                                            && item.verdict == 'OK') {
                                            return(
                                                <h1>Solved!</h1>
                                            )
                                        }
                                        
                                    })}
                                </div>
                            </div>
                            
                        </>
                        
                    )
                })}
            </div>
        </>
    )
}

export default Home