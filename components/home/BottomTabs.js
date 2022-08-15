import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-elements'


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/material-rounded/48/ffffff/home.png',
        inactive: 'https://img.icons8.com/material-rounded/48/cccccc/home.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/ios-filled/50/cccccc/search--v1.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios-filled/50/cccccc/instagram-reel.png'
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/ios-filled/48/ffffff/shopping-mall.png',
        inactive: 'https://img.icons8.com/ios-filled/48/cccccc/shopping-mall.png'
    },
    {
        name: 'Profile',
        active: 'http://interesting-information.ru/wp-content/uploads/2016/11/%D0%A4%D0%BE%D1%82%D0%BE2-%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D1%8C-%D0%B3%D1%80%D0%B8%D0%B7%D0%BB%D0%B8.jpg',
        inactive: 'http://interesting-information.ru/wp-content/uploads/2016/11/%D0%A4%D0%BE%D1%82%D0%BE2-%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B4%D1%8C-%D0%B3%D1%80%D0%B8%D0%B7%D0%BB%D0%B8.jpg'
    },
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{uri: icon.inactive}} style={styles.icon}/>
        </TouchableOpacity>
    )
  return (
        <View>
            <Divider  width={1} orientation='vertical'  style={{ backgroundColor: 'silver' }}/>
            <View style={styles.container}>
                {icons.map((icon,index) => (
                <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {

    },
    container: {
        flexDirection:'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon: {
        width: 30,
        height: 30

    }
})
export default BottomTabs