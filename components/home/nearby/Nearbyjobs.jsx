import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import { useRouter } from "expo-router";

import styles from "./nearbyjobs.style";
import { COLORS, colors, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import axios from "axios";

const Nearbyjobs = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const fetchBooks = async () => {
    setLoading(true);
    axios
      .get("https://openlibrary.org/search.json?q=the+lord+of+the+rings", {})
      .then(function (response) {
        setData(response.data.docs.slice(0, 20));
        setLoading(false);
      })
      .catch(function (err) {
        setLoading(false);
        setError("There was an error");
      });
  };
  useEffect(() => {
    if (!data) {
      fetchBooks();
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Books</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((book, index) => (
            <NearbyJobCard
              book={book}
              key={index}
              handleNavigate={() => router.push(`/book-details`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
