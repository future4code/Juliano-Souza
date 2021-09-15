import React from "react";

export class CompartilharPost extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.icone} alt='icone' onClick={this.props.onShare}/>
            </div> 
        )
    }
}