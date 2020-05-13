import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    SearchBar

} from "react-native"



class Searchbar extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            />

          
        )
    }

}
export default Searchbar;
