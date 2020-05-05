import React, { Component } from 'react'
import data from "../shopData"
import CollectionPreview from "../components/CollectionPreview";

export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: data
        }
    }
    render() {
        return (
            <div>
                <CollectionPreview title="Clothes" items={this.state.collections}/>
            </div>
        )
    }
}
