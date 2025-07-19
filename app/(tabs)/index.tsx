import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#EAF7FA', dark: '#1a1a1a' }}
      headerImage={
        <Image
          source={require('@/assets/images/underwraps-logo.png')}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.header}>
        <ThemedText type="title">Welcome to UnderWraps</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Step 1: Enter Your Email</ThemedText>
        <TextInput
          style={styles.inputBox}
          placeholder="you@email.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Step 2: Enter Your Password</ThemedText>
        <TextInput
          style={styles.inputBox}
          placeholder="••••••••"
          placeholderTextColor="#aaa"
          secureTextEntry
          autoCapitalize="none"
        />
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Step 3: Enter MAC Address</ThemedText>
        <ThemedText>
          When your device was delivered a MAC Address was written in your package.
        </ThemedText>
        <TextInput
          style={styles.inputBox}
          placeholder="Ex: A8:A7:67"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
        />
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 160,
    width: 280,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginVertical: 24,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 20,
    gap: 8,
  },
  inputBox: {
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  signUpButton: {
    backgroundColor: '#FF385C',
    paddingVertical: 14,
    paddingHorizontal: 110, // increased from 32 to 64
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
