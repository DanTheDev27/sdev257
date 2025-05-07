import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import styles from "./styles";

// FilmDetail screen displays details for selected film
export default function FilmDetail({ route, navigation }) {
    const { uid } = route.params; // uid passed from Films
    // local state to store film details and loading status
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch film details when the component mounts
    useEffect(() => {
        const fetchFilmDetail = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/films/${uid}`);
                const data = await response.json();
                // setting the film properties (stores title, director, etc)
                setFilm(data.result.properties);
                setLoading(false);
            } catch (error) {
                console.error('Error loading film details:', error);
            }
        };
        fetchFilmDetail();
    }, [uid]); //re runs this if uid changes
    if (loading) {
        return <ActivityIndicator size='large' color='#0000ff' />;
    }
    // once loaded display film details
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{film.title}</Text>
            <Text style={styles.label}>Director: <Text style={styles.value}>{film.director}</Text></Text>
            <Text style={styles.label}>Producer: <Text style={styles.value}>{film.producer}</Text></Text>
            <Text style={styles.label}> Release Date: <Text style={styles.value}>{film.release_date}</Text></Text>
            <Text style={styles.label}>Opening Crawl:</Text>
            <Text style={styles.crawl}>{film.opening_crawl}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} color="#D8C021" />
        </View>
    );

}