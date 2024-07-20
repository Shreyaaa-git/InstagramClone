// screens/HomeScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.storySection}>
        <Text style={styles.sectionTitle}>Stories</Text>
        <ScrollView horizontal>
          {/* Dummy profiles */}
          {[1, 2, 3, 4, 5].map((profile) => (
            <View key={profile} style={styles.story}>
              <Image
                source={{ uri: 'https://via.placeholder.com/100' }}
                style={styles.profilePic}
              />
              <Text>Profile {profile}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.postsSection}>
        <Text style={styles.sectionTitle}>Posts</Text>
        {/* Dummy posts */}
        {[1, 2, 3, 4, 5].map((post) => (
          <View key={post} style={styles.post}>
            <Image
              source={{ uri: 'https://via.placeholder.com/300' }}
              style={styles.postImage}
            />
            <Text style={styles.postText}>Post {post}</Text>
          </View>
        ))}
      </View>
      <View style={styles.suggestionsSection}>
        <Text style={styles.sectionTitle}>Suggestions</Text>
        {/* Dummy suggestions */}
        {[1, 2, 3].map((suggestion) => (
          <View key={suggestion} style={styles.suggestion}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.profilePic}
            />
            <Text>Suggestion {suggestion}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.profileIcon}
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons name="person-circle" size={40} color="black" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  storySection: {
    marginBottom: 16,
  },
  story: {
    marginRight: 8,
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postsSection: {
    marginBottom: 16,
  },
  post: {
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postText: {
    marginTop: 8,
  },
  suggestionsSection: {
    marginBottom: 16,
  },
  suggestion: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    alignItems: 'center',
    marginTop: 16,
  },
});

export default HomeScreen;
