import React,{Component}from "react"
import axios from "axios"
import C_one from "./compo-one/index"
import C_two from "./compo-two"
import C_three from "./compo-three"
import C_four from "./compo-four"
import C_five from "./compo-five"
import C_six from "./compo-six"
import C_seven from "./compo-seven"
import C_eight from "./compo-eight"

export default class Collection extends Component{
    state ={
        one:[],
        two:[],
        three:[],
        four:[],
        five:[],
        six:[]

    }
    componentDidMount(){
        axios.get("data.json").then(results=>{
            this.setState({
                one:results.data.one,
                two:results.data.two,
                three:results.data.three,
                four:results.data.four,
                six:results.data.icons,

            })
        })
    }
    
    render(){
     
        return(
            <div>
                <C_one />
                <C_two two={this.state.one}/>
                <C_three />
                <C_four four={this.state.two}/>
                <C_five />
                <C_six />
                 <C_seven seven={this.state.three}/>
                <C_eight eight={this.state.four}  icons={this.state.six}/>
            </div>
        )
    }
}
