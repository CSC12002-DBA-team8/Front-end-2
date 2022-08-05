import React, {Component} from "react";

export default class Binding extends Component{
    renderImage = () => {
        return <img src={require("../img/banner.png")} alt="" className="img-responsive" />
    }

render(){
    return(
        <div>
            {this.renderImage()}
        </div>
    )
}
}