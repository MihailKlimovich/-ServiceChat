import { SafeAreaView, Platform, StatusBar, Text, StyleSheet } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgoundColor: 'black', 
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})

export default NewPostScreen