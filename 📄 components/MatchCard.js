import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MatchCard({ league, teamA, teamB, score }) {
  return (
    <View style={styles.card}>
      <Text style={styles.league}>{league}</Text>
      <Text style={styles.match}>{teamA} vs {teamB}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, margin: 8, backgroundColor: '#eee', borderRadius: 8 },
  league: { fontSize: 16, fontWeight: 'bold' },
  match: { fontSize: 14 },
  score: { fontSize: 18, color: 'green' },
});
