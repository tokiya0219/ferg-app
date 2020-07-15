import React from 'react';

import './main-pic.styles.scss';

class MainPic extends React.Component{
    constructor(props){
        super(props);

        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering
        };
    }

    render(){
    return (
        <div>
            <div className='main-pic'
            onMouseEnter={this.handleMouseHover}
            onMouseOut={this.handleMouseHover}
            >
            {
                this.state.isHovering &&
                <h1 className='header'>Ferg Loves You</h1>
            }
            </div>
        </div>
    );
    }
}


export default MainPic;