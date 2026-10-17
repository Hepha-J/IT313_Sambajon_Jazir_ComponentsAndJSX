import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native';
import { StudentCard } from './StudentCard';
import { students as initialStudents } from './studentsData';

export const StudentRoster: React.FC = () => {
  const [studentList, setStudentList] = useState(initialStudents);
  const [useIndexAsKey, setUseIndexAsKey] = useState(false);

  const toggleReverse = () => {
    setStudentList((prev) => [...prev].reverse());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>
          Total Enrolled Students: {studentList.length}
        </Text>

        <View style={styles.experimentBox}>
          <Text style={styles.experimentText}>
            Key Strategy: {useIndexAsKey ? "Array Index (Testing)" : "Student ID (Stable)"}
          </Text>
          <Button 
            title="Toggle Key Strategy" 
            onPress={() => setUseIndexAsKey(!useIndexAsKey)} 
          />
          <View style={{ marginTop: 8 }}>
            <Button title="Reverse Roster Order" onPress={toggleReverse} color="#dc3545" />
          </View>
        </View>

        {studentList.map((student, index) => (
          <StudentCard
            key={useIndexAsKey ? index : student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 16,
    textAlign: 'center',
  },
  experimentBox: {
    backgroundColor: '#e9ecef',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  experimentText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
});