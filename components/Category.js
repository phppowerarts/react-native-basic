import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation';



class Category extends Component {

   GoToCompanyList = () => {
      this.props.navigation.navigate('CompanyList')
   }

   render() {
      return (
         <TouchableOpacity onPress={() => this.GoToCompanyList({})}>
			 <Image source={this.props.uri}
			   style={this.props.imagestyle}
			   />
             <Text style={this.props.textstyle} >
                {this.props.name}
             </Text>
         </TouchableOpacity>
      )
   }
}

export default Category