import React from 'react';

class List extends React.Component {

    render() {

        return (
            <>
                <h1>List</h1>
                <div>
                    {this.props.items.map((element) => {

                        console.log(' <li>', element, '</li>')
                        return <ul>
                            <li>name : {element.name}</li>
                            <li>price : {element.price}</li>
                        </ul>


                        // return console.log('List return items map element',element.name)
                        //    return `<li>${element}</li>`
                    }

                    )}
                </div>
            </>
        )
    };
};

export default List;