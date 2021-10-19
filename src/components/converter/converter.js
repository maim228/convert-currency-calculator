import React from 'react'
import './converter.css'
import Button from 'react-bootstrap/Button'


class Convert extends React.Component{
    state={
        currencyList:[],
        current:'AED',
        rate:''
    }
    componentDidMount(){
        fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.REACT_APP_API_KEY}&base_currency=EGP`)
    .then((res) => res.json())
    .then((data) => 
    this.setState({currencyList:Object.keys(data.data).sort(),
    })
    );
    }
    render(){
        const { currencyList,current,rate } = this.state
        const handleChange = (e)=>{
            document.querySelector('.resultForm').style.display='none';
            this.setState({
                current:e.target.value
            })
        }
        const handleSubmit = (e)=>{
            e.preventDefault();
            const convertTo = document.querySelector('.secondary').value;
            fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.REACT_APP_API_KEY}&base_currency=${current}`)
    .then((res) => res.json())
    .then((data) => 
    this.setState({rate:Object.entries(data.data).filter((d)=>d[0] === convertTo)[0][1],
    }),console.log(this.state.rate)
    );
    document.querySelector('.resultForm').style.display='block';
    }
    const handleConvert = (e)=>{
        const converted = e.target.value;
        document.querySelector('.converted').value = converted * rate;
    }
        return(
            <div>
                <div className='selectForm'>
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                      <div className='grid'>
                       <div> 
                        <h1>Choose Currency</h1>
                        <br />
                        <select className='choosefirst' onChange={(e)=>{handleChange(e)}}>
                            {currencyList.map((currency) =><option key={currency} value={currency}>{currency}</option>)}
                        </select>
                       </div> 
                       <div>
                        <h1>Choose Currency</h1>
                        <br />
                        <select className='choosefirst secondary'>
                            {currencyList.filter((currency) => currency !== current).map((c)=><option key={c} value={c}>{c}</option>)}
                        </select>
                        </div>
                       </div>
                        <Button variant="primary" size="lg" active type='submit'>
                          Convert
                      </Button>
                    </form>
                    <br />
                </div>
                <br />
                <form className='resultForm'>
                    <div className='grid'>
                        <div>
                        <input type='number' placeholder={'0.00  ' +current} onChange={(e)=>{handleConvert(e)}} className='choosefirst' />
                        </div>
                        <div>
                        <input type='number' placeholder='0.00' className='choosefirst converted' disabled />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Convert