# 🌸 Amazora - Menopause Fitness & Wellness App

> **🎯 Mission**: AI-powered menopause companion for women 40+ combining fitness, symptom tracking, and community support

## 🚨 DEVELOPMENT RULES - READ FIRST

### ⛔ **IRON RULES - NO EXCEPTIONS**
1. **🔴 MOBILE-FIRST RULE**: Nothing gets developed until successful run on Samsung S24
2. **🔴 MVP-ONLY RULE**: Only MVP features until Phase 1 complete
3. **🔴 ONE-FEATURE RULE**: Complete one feature 100% before starting next
4. **🔴 TEST-FIRST RULE**: Every component must run on device before PR
5. **🔴 NO-REFACTOR RULE**: No refactoring until MVP is device-tested

### 📱 **DEVICE TESTING PROTOCOL**
- **Primary Device**: Samsung S24 (USB Debugging)
- **IDE**: PyCharm Professional
- **Test Frequency**: After every component
- **Required**: Screenshots + video proof of working features
- **Deployment**: `npx react-native run-android` → PyCharm → Samsung S24

---

## 📋 PROJECT STATUS

### 🎯 **CURRENT GOAL: PHASE 1 MVP**
**Status**: `DEVELOPMENT` | **Next**: Device Testing Setup

### ✅ **COMPLETED**
- [x] Project structure created
- [x] Basic onboarding flow (App.tsx prototype)
- [x] Design system foundation
- [x] React Native + TypeScript setup

### 🔄 **IN PROGRESS**
- [ ] **PRIORITY 1**: Samsung S24 successful run
- [ ] Component architecture refactoring
- [ ] Navigation setup (React Navigation)

### ⏳ **UPCOMING**
- [ ] AI Coach integration
- [ ] Supabase backend setup
- [ ] Exercise library foundation

---

## 🏗️ TECHNICAL ARCHITECTURE

### **Tech Stack**
```
Frontend:     React Native CLI + TypeScript
IDE:          PyCharm Professional
Device:       Samsung S24 (USB Debugging)
Backend:      Node.js + Express + Supabase
Database:     PostgreSQL (Supabase)
AI:           OpenAI GPT-4 + Custom ML Models
Storage:      AWS S3 + CloudFront
Auth:         Supabase Auth
Payments:     Stripe
Analytics:    Mixpanel
Notifications: React Native Push Notifications
```

### **Project Structure**
```
Amazora/
├── 📱 App.tsx                 # Main app entry (PROTOTYPE)
├── 📁 src/
│   ├── 🧩 components/         # Reusable UI components
│   │   ├── ai-coach/         # AI Coach UI components
│   │   ├── common/           # Buttons, Cards, Inputs
│   │   ├── community/        # Community features
│   │   ├── exercise/         # Fitness components
│   │   ├── meal-tracking/    # Nutrition tracking
│   │   ├── onboarding/       # Onboarding flow
│   │   └── symptom-tracker/  # Symptom logging
│   ├── 📺 screens/           # App screens/pages
│   │   ├── auth/            # Login/Signup
│   │   ├── home/            # Dashboard
│   │   ├── symptoms/        # Symptom tracking
│   │   ├── exercise/        # Fitness screens
│   │   ├── community/       # Community screens
│   │   └── profile/         # Settings/Profile
│   ├── 🔌 services/         # Backend integrations
│   │   ├── api/            # Supabase, AI Coach
│   │   ├── ai/             # AI/ML services
│   │   ├── storage/        # File management
│   │   └── notifications/  # Push notifications
│   ├── 🎣 hooks/           # Custom React hooks
│   ├── 🛠️ utils/           # Helper functions
│   ├── 🎨 styles/          # Design system
│   └── 📝 types/           # TypeScript definitions
├── 📦 package.json
└── 📖 README.md            # This file
```

---

## 🚀 DEVELOPMENT PHASES

### **🎯 PHASE 1: MVP (4-6 weeks)**
**Goal**: Working app on Samsung S24 with core features

#### **Sprint 1: Foundation (Week 1)**
- [x] Project setup & structure
- [ ] **CRITICAL**: Successful device run
- [ ] Navigation implementation
- [ ] Component architecture

#### **Sprint 2: Core Features (Week 2-3)**
- [ ] Onboarding flow (4 screens)
- [ ] Basic symptom tracking
- [ ] Simple dashboard
- [ ] AI Coach foundation

#### **Sprint 3: Integration (Week 4-5)**
- [ ] Supabase integration
- [ ] Basic exercise library
- [ ] Community foundation
- [ ] Testing & refinement

#### **Sprint 4: Polish (Week 6)**
- [ ] UI/UX improvements
- [ ] Performance optimization
- [ ] Beta testing preparation

### **🔥 PHASE 2: Enhancement (6-8 weeks)**
- Advanced AI coaching
- Full meal tracking
- Video exercise library
- Community challenges
- Wearable integration

### **🚀 PHASE 3: Scale (8-12 weeks)**
- Advanced analytics
- Health report generation
- Expert content system
- Premium features
- Production deployment

---

## 🎯 CORE FEATURES

### **🎬 Onboarding Experience**
- **Menopause Stage Assessment**: Perimenopause/Menopause/Post-menopause
- **AI Fitness Assessment**: Movement analysis & personalization
- **Goal Setting**: Health & fitness objectives
- **Symptom Baseline**: Initial symptom documentation

### **🤖 AI Coach System**
- **Context-Aware Tips**: Screen-specific coaching
- **Pattern Recognition**: Symptom trend analysis
- **Exercise Recommendations**: Personalized workouts
- **Nutrition Guidance**: Meal suggestions based on symptoms
- **Motivation System**: Adaptive encouragement

### **📊 Symptom Tracking**
- **40+ Symptoms**: Comprehensive menopause library
- **Severity Scale**: 1-10 tracking with visual indicators
- **Trigger Identification**: Food, stress, exercise correlations
- **Pattern Insights**: AI-generated trend analysis
- **Health Reports**: Exportable for healthcare providers

### **💪 Exercise Library**
- **Video Content**: Professional exercise demonstrations
- **Menopause-Specific**: Workouts for hormonal changes
- **Difficulty Levels**: Beginner to advanced
- **Form Feedback**: AI-powered movement analysis
- **Admin Upload**: Content management system

### **👥 Community Features**
- **40+ Focus**: Age-appropriate community
- **Challenges**: Monthly fitness & wellness challenges
- **Support Groups**: Topic-specific discussions
- **Achievement Sharing**: Milestone celebrations
- **Expert AMAs**: Q&A with specialists

---

## 🛠️ SETUP & DEVELOPMENT

### **Prerequisites**
```bash
Node.js >= 18.0.0
npm >= 8.0.0
React Native CLI
Android Studio + Android SDK
PyCharm Professional
Samsung S24 (USB Debugging enabled)
Java Development Kit (JDK) 11+
```

### **Installation**
```bash
# Clone repository
git clone [repository-url]
cd Amazora

# Install dependencies
npm install

# Start Metro bundler
npx react-native start

# 🚨 CRITICAL: Deploy to Samsung S24
# In new terminal:
npx react-native run-android
# OR from PyCharm: Run configuration
```

### **Device Testing Checklist**
- [ ] Samsung S24 connected via USB
- [ ] USB Debugging enabled
- [ ] App builds successfully (`npx react-native run-android`)
- [ ] App loads without crashes
- [ ] All 4 onboarding screens functional
- [ ] Navigation between screens works
- [ ] AI Coach bubble appears
- [ ] Dashboard displays health cards
- [ ] No Metro bundler errors
- [ ] Smooth animations
- [ ] Screenshots documented in PyCharm

---

## 🎨 DESIGN SYSTEM

### **Color Palette**
```javascript
Primary: #6B46C1 (Purple - Trust, Wellness)
Success: #10B981 (Green - Health)
Health Cards:
  - Symptoms: #FEE2E2 (Light Red)
  - Stress: #DCFCE7 (Light Green)
  - Nutrition: #CFFAFE (Light Cyan)
  - Exercise: #E0E7FF (Light Blue)
```

### **Typography**
- **Headers**: Bold, 24-32px
- **Body**: Regular, 16px
- **Captions**: 12-14px
- **Accessibility**: High contrast, readable fonts

### **Component Standards**
- **Buttons**: 25px border radius, elevation shadows
- **Cards**: 16px border radius, subtle backgrounds
- **Animations**: 300ms duration, smooth transitions
- **Touch Targets**: Minimum 44px for accessibility

---

## 🔗 INTEGRATIONS

### **Supabase (Backend)**
```typescript
// config/supabase.ts
Database: PostgreSQL
Auth: Email/Social login
Storage: Profile images, exercise videos
Real-time: Community feeds, challenges
```

### **OpenAI (AI Coach)**
```typescript
// services/ai/openaiClient.ts
Model: GPT-4
Context: User profile + current screen
Functions: Coaching tips, symptom analysis
Rate Limits: Managed for cost efficiency
```

### **AWS S3 (Media Storage)**
```typescript
// services/storage/videoManager.ts
Exercise Videos: CloudFront CDN
User Uploads: Profile pictures
Admin Content: Exercise thumbnails
```

---

## 📱 COMPONENT LIBRARY

### **Common Components**
- `Button.tsx` - Primary/Secondary/Outline variants
- `Card.tsx` - Health cards, content cards
- `Input.tsx` - Form inputs with validation
- `Loading.tsx` - Spinner and skeleton loaders

### **Feature Components**
- `AICoachBubble.tsx` - Floating coach assistant
- `SymptomLogger.tsx` - Symptom entry interface
- `ExerciseCard.tsx` - Exercise preview cards
- `HealthCard.tsx` - Dashboard health metrics

### **Screen Components**
- `WelcomeScreen.tsx` - Onboarding entry
- `DashboardScreen.tsx` - Main app screen
- `SymptomTrackerScreen.tsx` - Symptom management
- `ExerciseLibraryScreen.tsx` - Fitness content

---

## 🧪 TESTING STRATEGY

### **Testing Pyramid**
1. **Unit Tests**: Components, utilities, services
2. **Integration Tests**: API calls, data flow
3. **E2E Tests**: Critical user journeys
4. **Device Tests**: Samsung S24 real-world testing

### **Test Files**
```
__tests__/
├── components/
├── screens/
├── services/
└── utils/
```

---

## 📈 ANALYTICS & MONITORING

### **Key Metrics**
- **Engagement**: Daily/Monthly active users
- **Retention**: 1-day, 7-day, 30-day retention
- **Feature Usage**: Screen time, feature adoption
- **Health Outcomes**: Symptom improvement tracking

### **Events Tracking**
```typescript
// Onboarding completion
// Symptom log entries
// Exercise completions
// AI Coach interactions
// Community engagement
```

---

## 🚢 DEPLOYMENT

### **Development Environment**
- **Local**: `npx react-native start` + PyCharm
- **Testing**: Direct deployment to Samsung S24 via USB
- **Build**: `npx react-native run-android`
- **Debug**: PyCharm debugger + React Native tools

### **Production Environment**
- **Android**: Google Play Store (React Native build)
- **iOS**: App Store (React Native build)
- **Backend**: Vercel/Railway deployment
- **Database**: Supabase hosted PostgreSQL

---

## 🔧 PYCHARM SETUP

### **Required Plugins**
- React Native Console
- React Native Snippets  
- ESLint
- Prettier
- TypeScript

### **Run Configurations**
```bash
# Android Debug Configuration
Name: Amazora Android
Command: npx react-native run-android
Working Directory: /path/to/Amazora

# Metro Bundler Configuration  
Name: Metro Start
Command: npx react-native start
Working Directory: /path/to/Amazora
```

### **Samsung S24 Setup**
1. **Enable Developer Options**: Settings → About → Tap Build Number 7x
2. **Enable USB Debugging**: Developer Options → USB Debugging
3. **Connect Device**: USB cable to computer
4. **Verify Connection**: `adb devices` (should show Samsung S24)
5. **Trust Computer**: Accept popup on S24

---

## 🤝 TEAM COLLABORATION

### **Git Workflow**
```bash
main          # Production-ready code
develop       # Integration branch
feature/*     # Feature development
bugfix/*      # Bug fixes
hotfix/*      # Critical fixes
```

### **Commit Messages**
```
feat: add symptom tracking component
fix: resolve navigation crash on Android
docs: update README with setup instructions
test: add unit tests for AI coach service
```

### **Pull Request Process**
1. Feature branch from `develop`
2. **Device testing required**
3. Code review + approval
4. Merge to `develop`
5. Regular merges to `main`

---

## 📞 SUPPORT & CONTACT

### **Development Team**
- **Lead Developer**: [Your Name]
- **UI/UX Designer**: TBD
- **AI/ML Engineer**: TBD
- **Backend Developer**: TBD

### **Key Resources**
- **Documentation**: This README
- **Design System**: Figma (TBD)
- **API Docs**: Supabase docs
- **Bug Tracking**: GitHub Issues

---

## 🔮 FUTURE ROADMAP

### **Q2 2025: MVP Launch**
- Core features complete
- Samsung S24 + iOS testing
- Beta user testing
- App store submission

### **Q3 2025: Feature Expansion**
- Advanced AI features
- Wearable integrations
- Premium subscriptions
- Marketing launch

### **Q4 2025: Scale & Growth**
- User acquisition campaigns
- Advanced analytics
- Healthcare partnerships
- International expansion

---

## ⚠️ CRITICAL REMINDERS

### **🚨 BEFORE EVERY DEVELOPMENT SESSION**
1. **Check current branch**: Always work on feature branches
2. **Test on device**: Samsung S24 testing mandatory
3. **Check this README**: Ensure following current phase rules
4. **Update status**: Mark completed tasks in this document

### **🚨 BEFORE EVERY COMMIT**
1. **Device testing**: Verify functionality on Samsung S24
2. **Code review**: Self-review all changes
3. **Documentation**: Update relevant docs
4. **Screenshots**: Document visual changes

### **🚨 BEFORE MOVING TO NEXT PHASE**
1. **Complete current phase**: 100% completion required
2. **Device validation**: All features tested on Samsung S24
3. **Performance check**: No memory leaks or crashes
4. **User testing**: Validate with target demographic

---

**🎯 CURRENT PRIORITY: GET THIS RUNNING ON SAMSUNG S24 VIA PYCHARM**

*Setup: PyCharm → USB → Samsung S24 → `npx react-native run-android`*

*Last Updated: June 12, 2025*