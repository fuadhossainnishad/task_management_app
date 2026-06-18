# 📱 Task Management App (React Native)

A **production-grade React Native application** built with a **feature-based, scalable architecture**, designed for maintainability, modularity, and long-term team growth.

This project follows **clean architecture principles adapted for mobile**, separating concerns across domain features, infrastructure, navigation, and shared system utilities.

---

# 🏗️ System Architecture Overview

This application is structured using a **feature-first modular architecture**:

```
src/
├── app/              # Application bootstrap & providers layer
├── bootstrap/        # App initialization & state resolution
├── navigation/       # Navigation graphs (stack, tab, feature navigators)
├── features/         # Domain-driven modules (auth, home, job, etc.)
├── shared/           # Reusable UI components, hooks, utilities
├── infrastructure/   # External systems (storage, API, state management)
├── config/           # Environment & app configuration
└── api/              # API client layer
```

---

## 🧠 Architectural Philosophy

This project is built on 4 core principles:

### 1. Feature Isolation (Vertical Slicing)

Each feature owns its:

* Screens
* Services
* Types (if needed)
* Business logic

Example:

```
features/auth/
features/job/
features/settings/
```

👉 Features do NOT depend on each other directly.

---

### 2. Infrastructure Separation

External concerns are isolated:

* API communication → `api/`
* Persistent storage → `infrastructure/storage`
* State management → `infrastructure/state`

This ensures **UI/business logic is decoupled from external systems**.

---

### 3. Navigation as a First-Class Layer

Navigation is modular:

```
navigation/
├── AppNavigator.tsx
├── BottomNavigator.tsx
├── OnboardingNavigator.tsx
├── JobNavigator.tsx
...
```

Each domain can scale independently without breaking global routing.

---

### 4. App Bootstrap Lifecycle

The app boot process is controlled centrally:

```
App → AppBootstrap → useAppInit → Navigator Selection
```

### Boot states:

```ts
loading → onboarding → unauthenticated → authenticated
```

This ensures:

* clean auth gating
* onboarding control
* predictable app entry flow

---

# 🚀 Getting Started

## 1. Install dependencies

```bash
npm install
```

---

## 2. Run Metro bundler

```bash
npm start
```

---

## 3. Run Android

```bash
npm run android
```

---

## 4. Run iOS

```bash
npm run ios
```

---

# ⚙️ Tech Stack

### Core

* React Native 0.86+
* React 19
* TypeScript

### Navigation

* React Navigation (Native Stack + Bottom Tabs)

### State & Data

* React Query (`@tanstack/react-query`)

### Storage

* AsyncStorage
* Secure storage abstraction

### UI System

* NativeWind (Tailwind-style styling for RN)
* React Native SVG
* Reanimated

---

# 🎨 Styling Strategy

This project uses **NativeWind (Tailwind for React Native)**:

```tsx
<View className="flex-1 bg-white items-center justify-center">
```

### Configuration:

* `tailwind.config.js` → design system
* `global.css` → NativeWind entry
* `metro.config.js` → NativeWind transformer

---

# 🧭 Navigation Strategy

### Root Stack:

* Onboarding flow
* Auth flow
* App (Bottom Tabs)

### Nested Navigation:

* Feature-based stacks (Job, Settings, etc.)

Example:

```
HomeTab
 ├── Home
 ├── Jobs
 ├── Settings
```

---

# 🔐 Authentication Flow

Handled via:

```
useAppInit()
```

### Decision Tree:

```
If onboarding not completed → Onboarding flow
Else if no token → Auth flow
Else → Main app
```

---

# 📦 Feature Structure Standard

Each feature follows:

```
features/auth/
├── screens/
├── services/
├── hooks (optional future)
├── types (optional)
```

---

# 🧩 Shared Layer

Reusable system components:

* UI Components (Buttons, Inputs, Modals)
* Hooks
* Utilities
* Constants

---

# 🏗️ Infrastructure Layer

Handles system-level concerns:

### State

* Query client setup

### Storage

* Secure storage abstraction
* Async persistence layer

---

# 🧪 Development Guidelines

### 1. Do not cross-import features

Bad:

```ts
features/auth → features/job ❌
```

### 2. Use shared layer for reuse

```ts
shared/components ✔
```

### 3. Keep business logic inside feature/services

Not inside screens.

---

# 📈 Scalability Design Goals

This architecture is designed to support:

* Multi-team development
* Feature-based ownership
* Easy onboarding of new developers
* Large-scale enterprise apps
* Clean separation of UI / domain / infra

---

# 🧠 Engineering Notes

This project intentionally avoids:

* Global monolithic state
* Tight coupling between screens
* Navigation logic inside components
* Direct API calls from UI layer

Instead it follows:

> “UI is dumb, features are smart, infrastructure is invisible.”

---

# 🧭 Future Improvements (Roadmap)

* Zustand / Redux Toolkit integration (if needed)
* Feature-level testing (Jest + Detox)
* CI/CD pipeline (GitHub Actions)
* Code splitting for large features
* Design system layer (tokens + components)
* API layer abstraction upgrade (Axios interceptors + retry strategy)

---

# 📌 Summary

This is not just a React Native project.

It is a **modular mobile system architecture** designed for:

* Scale
* Maintainability
* Team collaboration
* Long-term evolution