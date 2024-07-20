// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profilePic}
        />
        <View style={styles.followInfo}>
          <Text>Followers: 100</Text>
          <Text>Following: 150</Text>
        </View>
      </View>
      <View style={styles.secondSection}>
        <Text>Posts: 10</Text>
      </View>
      <ScrollView horizontal style={styles.thirdSection}>
        {/* Dummy posts in stacked card format */}
        {[1, 2, 3, 4, 5].map((post) => (
          <View key={post} style={styles.post}>
            <Image
              source={{ uri: 'https://via.placeholder.com/300' }}
              style={styles.postImage}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  followInfo: {
    marginLeft: 16,
  },
  secondSection: {
    marginBottom: 16,
  },
  thirdSection: {
    flexDirection: 'row',
  },
  post: {
    marginRight: 8,
  },
  postImage: {
    width: 300,
    height: 300,
  },
});

export default ProfileScreen;
