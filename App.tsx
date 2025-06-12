/**
 * Amazora - Menopause Fitness & Wellness App
 * Beautiful Onboarding Experience
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  Alert,
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Colors
const Colors = {
  primary: '#6B46C1',
  primaryLight: '#8B5CF6',
  white: '#FFFFFF',
  dark: '#1F2937',
  gray: '#9CA3AF',
  lightGray: '#E5E7EB',
  success: '#10B981',
  healthCards: {
    symptoms: '#FEE2E2',
    stress: '#DCFCE7',
    nutrition: '#CFFAFE',
    exercise: '#E0E7FF',
  },
};

// Current Screen State
type Screen = 'welcome' | 'stage' | 'goals' | 'dashboard';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Fade in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [currentScreen]);

  const navigateToScreen = (screen: Screen) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentScreen(screen);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  // Welcome Screen Component
  const WelcomeScreen = () => (
    <Animated.View style={[styles.screenContainer, { opacity: fadeAnim }]}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.logo}>Amazora</Text>
        <Text style={styles.tagline}>Your Menopause Journey Starts Here</Text>

        <View style={styles.welcomeCard}>
          <Text style={styles.cardTitle}>Designed for Women 40+</Text>
          <Text style={styles.cardDescription}>
            Track symptoms, discover workouts, connect with others,
            and get AI-powered guidance through your menopause journey.
          </Text>
        </View>

        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🤖</Text>
            <Text style={styles.featureText}>AI Coach</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>📊</Text>
            <Text style={styles.featureText}>Symptom Tracking</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>💪</Text>
            <Text style={styles.featureText}>Fitness Library</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>👥</Text>
            <Text style={styles.featureText}>Community</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigateToScreen('stage')}
        >
          <Text style={styles.primaryButtonText}>Start Your Journey</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigateToScreen('dashboard')}
        >
          <Text style={styles.secondaryButtonText}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  // Menopause Stage Selection Screen
  const StageScreen = () => {
    const stages = [
      {
        id: 'perimenopause',
        title: 'Perimenopause',
        description: 'Irregular periods, mood changes, hot flashes beginning',
        ageRange: 'Usually 40-51',
        color: '#F3E8FF',
      },
      {
        id: 'menopause',
        title: 'Menopause',
        description: '12 months without a period, full hormonal changes',
        ageRange: 'Usually 51+',
        color: '#EDE9FE',
      },
      {
        id: 'postmenopause',
        title: 'Post-Menopause',
        description: 'Years after menopause, focus on long-term health',
        ageRange: '55+',
        color: '#DDD6FE',
      },
    ];

    return (
      <Animated.View style={[styles.screenContainer, { opacity: fadeAnim }]}>
        <View style={styles.contentContainer}>
          <Text style={styles.screenTitle}>What stage are you in?</Text>
          <Text style={styles.screenSubtitle}>This helps us personalize your experience</Text>

          <ScrollView style={styles.stageList} showsVerticalScrollIndicator={false}>
            {stages.map((stage) => (
              <TouchableOpacity
                key={stage.id}
                style={[
                  styles.stageCard,
                  selectedStage === stage.id && styles.stageCardSelected,
                  { backgroundColor: stage.color }
                ]}
                onPress={() => setSelectedStage(stage.id)}
              >
                <Text style={styles.stageTitle}>{stage.title}</Text>
                <Text style={styles.stageAge}>{stage.ageRange}</Text>
                <Text style={styles.stageDescription}>{stage.description}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {selectedStage && (
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigateToScreen('goals')}
            >
              <Text style={styles.primaryButtonText}>Continue</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    );
  };

  // Goals Selection Screen
  const GoalsScreen = () => {
    const goals = [
      { id: 'symptoms', title: 'Manage Symptoms', icon: '🌡️', color: Colors.healthCards.symptoms },
      { id: 'fitness', title: 'Stay Active', icon: '💪', color: Colors.healthCards.exercise },
      { id: 'weight', title: 'Healthy Weight', icon: '⚖️', color: Colors.healthCards.nutrition },
      { id: 'sleep', title: 'Better Sleep', icon: '😴', color: '#F0F9FF' },
      { id: 'mood', title: 'Mood Balance', icon: '🧘‍♀️', color: Colors.healthCards.stress },
      { id: 'community', title: 'Find Support', icon: '👥', color: '#FEF3C7' },
    ];

    const toggleGoal = (goalId: string) => {
      setSelectedGoals(prev =>
        prev.includes(goalId)
          ? prev.filter(id => id !== goalId)
          : [...prev, goalId]
      );
    };

    return (
      <Animated.View style={[styles.screenContainer, { opacity: fadeAnim }]}>
        <View style={styles.contentContainer}>
          <Text style={styles.screenTitle}>What are your goals?</Text>
          <Text style={styles.screenSubtitle}>Select all that apply</Text>

          <View style={styles.goalsGrid}>
            {goals.map((goal) => (
              <TouchableOpacity
                key={goal.id}
                style={[
                  styles.goalCard,
                  selectedGoals.includes(goal.id) && styles.goalCardSelected,
                  { backgroundColor: goal.color }
                ]}
                onPress={() => toggleGoal(goal.id)}
              >
                <Text style={styles.goalIcon}>{goal.icon}</Text>
                <Text style={styles.goalTitle}>{goal.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {selectedGoals.length > 0 && (
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => {
                Alert.alert(
                  'Setup Complete! 🎉',
                  `Stage: ${selectedStage}\nGoals: ${selectedGoals.length} selected`,
                  [{ text: 'Continue to Dashboard', onPress: () => navigateToScreen('dashboard') }]
                );
              }}
            >
              <Text style={styles.primaryButtonText}>Complete Setup</Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    );
  };

  // Dashboard Screen
  const DashboardScreen = () => (
    <Animated.View style={[styles.dashboardContainer, { opacity: fadeAnim }]}>
      <View style={styles.dashboardHeader}>
        <Text style={styles.greeting}>Hello, Daniele</Text>
        <Text style={styles.date}>Wednesday, June 12, 2025</Text>
      </View>

      <ScrollView style={styles.dashboardContent}>
        <Text style={styles.sectionTitle}>Your Health Today</Text>

        <View style={styles.healthGrid}>
          <View style={[styles.healthCard, { backgroundColor: Colors.healthCards.symptoms }]}>
            <Text style={styles.healthIcon}>🌡️</Text>
            <Text style={styles.healthLabel}>Symptoms</Text>
            <Text style={styles.healthValue}>2</Text>
            <Text style={styles.healthSubtext}>New today</Text>
          </View>

          <View style={[styles.healthCard, { backgroundColor: Colors.healthCards.stress }]}>
            <Text style={styles.healthIcon}>😌</Text>
            <Text style={styles.healthLabel}>Stress</Text>
            <Text style={styles.healthValue}>Low</Text>
            <Text style={styles.healthSubtext}>Better than yesterday</Text>
          </View>

          <View style={[styles.healthCard, { backgroundColor: Colors.healthCards.nutrition }]}>
            <Text style={styles.healthIcon}>🍽️</Text>
            <Text style={styles.healthLabel}>Nutrition</Text>
            <Text style={styles.healthValue}>Good</Text>
            <Text style={styles.healthSubtext}>1892 calories today</Text>
          </View>

          <View style={[styles.healthCard, { backgroundColor: Colors.healthCards.exercise }]}>
            <Text style={styles.healthIcon}>💪</Text>
            <Text style={styles.healthLabel}>Exercise</Text>
            <Text style={styles.healthValue}>30 min</Text>
            <Text style={styles.healthSubtext}>1 workout today</Text>
          </View>
        </View>

        <View style={styles.insightsSection}>
          <Text style={styles.sectionTitle}>Daily Insights</Text>
          <View style={styles.insightCard}>
            <Text style={styles.insightTitle}>✨ AI Coach Says:</Text>
            <Text style={styles.insightText}>
              Your digestive symptoms appear 2 hours after meals.
              Consider smaller, more frequent meals for better comfort.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.restartButton}
          onPress={() => navigateToScreen('welcome')}
        >
          <Text style={styles.restartButtonText}>← Back to Welcome</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* AI Coach Bubble */}
      <TouchableOpacity
        style={styles.aiCoachBubble}
        onPress={() => Alert.alert('AI Coach', 'Hi! I\'m your menopause companion. I notice you\'re exploring the dashboard. Great job starting your journey! 💜')}
      >
        <Text style={styles.aiCoachIcon}>🤖</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  // Render Current Screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome': return <WelcomeScreen />;
      case 'stage': return <StageScreen />;
      case 'goals': return <GoalsScreen />;
      case 'dashboard': return <DashboardScreen />;
      default: return <WelcomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={currentScreen === 'dashboard' ? Colors.primary : Colors.primary}
      />
      {renderScreen()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  welcomeContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  logo: {
    fontSize: 56,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 20,
    color: Colors.lightGray,
    textAlign: 'center',
    marginBottom: 40,
  },
  welcomeCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 24,
    borderRadius: 20,
    marginBottom: 30,
    width: '100%',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 12,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: Colors.lightGray,
    textAlign: 'center',
    lineHeight: 24,
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 40,
    width: '100%',
  },
  featureItem: {
    alignItems: 'center',
    width: '22%',
    marginVertical: 10,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: Colors.lightGray,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginBottom: 16,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  primaryButtonText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryButton: {
    paddingVertical: 16,
  },
  secondaryButtonText: {
    color: Colors.lightGray,
    fontSize: 16,
    textAlign: 'center',
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  screenSubtitle: {
    fontSize: 16,
    color: Colors.lightGray,
    textAlign: 'center',
    marginBottom: 30,
  },
  stageList: {
    flex: 1,
    marginBottom: 20,
  },
  stageCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  stageCardSelected: {
    borderColor: Colors.white,
    transform: [{ scale: 1.02 }],
  },
  stageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.dark,
    marginBottom: 4,
  },
  stageAge: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 8,
  },
  stageDescription: {
    fontSize: 16,
    color: Colors.dark,
    lineHeight: 22,
  },
  goalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
    flex: 1,
  },
  goalCard: {
    width: '48%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  goalCardSelected: {
    borderColor: Colors.white,
    transform: [{ scale: 1.05 }],
  },
  goalIcon: {
    fontSize: 36,
    marginBottom: 12,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.dark,
    textAlign: 'center',
  },
  dashboardContainer: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  dashboardHeader: {
    backgroundColor: Colors.primary,
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
  },
  date: {
    fontSize: 16,
    color: Colors.lightGray,
    marginTop: 4,
  },
  dashboardContent: {
    flex: 1,
    padding: 20,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 16,
  },
  healthGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  healthCard: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  healthIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  healthLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  healthValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark,
    marginBottom: 2,
  },
  healthSubtext: {
    fontSize: 12,
    color: '#6B7280',
  },
  insightsSection: {
    marginTop: 20,
  },
  insightCard: {
    backgroundColor: '#374151',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 8,
  },
  insightText: {
    fontSize: 14,
    color: Colors.lightGray,
    lineHeight: 20,
  },
  aiCoachBubble: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  aiCoachIcon: {
    fontSize: 28,
  },
  restartButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  restartButtonText: {
    color: Colors.lightGray,
    fontSize: 14,
  },
});

export default App;