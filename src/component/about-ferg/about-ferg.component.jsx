import React from 'react';

import './about-ferg.styles.scss';

class Ferg extends React.Component {
    constructor() {
        super();

        this.state ={
            lists: [
                {
                    id:'place',
                    string: 'p',
                    title: 'Location',
                    description:' It is now located on Shotover Street next to the new addition of Ferg Baker.',
                    linkUrl: 'place'
                },
                {
                    id:'history',
                    string: 'h',
                    title: 'History',
                    description:'Fergburger started in February 2001, operating out of a garage off Cow Lane, its obscure location making it hard to find but conversely giving it something of a novelty status, relying on word of mouth to attract customers.',
                    linkUrl: 'History'
                },
                //  {
                //     id:'born',   
                //     string: 'b',
                //     title: 'Born In',
                //     description: '333',
                //     linkUrl: 'Born'
                //  }
            ]
        }
    }

    render() {
        return(
            <div className='our-page'>
                <h1 className='title'>ABOUT US</h1>
                {this.state.lists.map(list => (
                    <div className='list' key={list.string}>
                    <h2 className='list-item' id={list.id} > {list.title} </h2>
                    <span className='description'>{list.description}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Ferg;