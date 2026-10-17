import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StudentCardProps {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ name, course, units, isFullLoad }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.name}>{name}</Text>
        {isFullLoad && <Text style={styles.fullLoadBadge}>Full Load</Text>}
      </View>
      <Text style={styles.details}>Course: {course}</Text>
      <Text style={styles.details}>Units Enrolled: {units}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  fullLoadBadge: {
    backgroundColor: '#28a745',
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  details: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
});