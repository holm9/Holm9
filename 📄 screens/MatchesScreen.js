import React from 'react';
import { ScrollView } from 'react-native';
import MatchCard from '../components/MatchCard';

export default function MatchesScreen() {
  return (
    <ScrollView>
      <MatchCard league="الدوري الإسباني" teamA="برشلونة" teamB="ريال مدريد" score="2 - 1" />
      <MatchCard league="الدوري الإنجليزي" teamA="ليفربول" teamB="مانشستر سيتي" score="0 - 0" />
    </ScrollView>
  );
}
