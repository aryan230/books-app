import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ book, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {book.title}
        </Text>
        <Text style={styles.aurthor}>
          {book && book.author_name ? book.author_name[0] : "N/A"}
        </Text>
        <Text style={styles.jobType}>
          {book && book.publish_date ? book.publish_date[0] : "N/A"}
        </Text>
        <TouchableOpacity style={styles.btnBook2}>
          <Text
            style={{
              color: "#083344",
              //
            }}
          >
            Mark as read
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
