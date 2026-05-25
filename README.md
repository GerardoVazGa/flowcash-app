# FlowCash App

## Project Overview

FlowCash App is a React Native business application built with Expo. It provides a financial dashboard experience with navigation, form handling, budgeting, transactions, and a custom theme.

## Key Features

- Expo-based React Native application
- Navigation using React Navigation (native stack and bottom tabs)
- Form handling with React Hook Form and Zod validation
- Custom theming and layout components
- Support for budgets and transactions features
- Reusable UI and form components

## Project Structure

- `App.js` - Main app entry point
- `index.js` - React Native entry file
- `src/` - Main source code folder
  - `app/` - App-level components, navigation, screens
  - `assets/` - Project asset files
  - `components/` - Reusable UI and layout components
  - `constants/` - Theme and app constants
  - `context/` - React context providers
  - `data/` - Static or mock data
  - `features/` - Feature modules for budgets and transactions
  - `hooks/` - Custom React hooks
  - `services/` - Business logic services
  - `utils/` - Utility helper functions

## Setup and Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Expo development server:
   ```bash
   npm start
   ```
3. Run on Android:
   ```bash
   npm run android
   ```
4. Run on iOS:
   ```bash
   npm run ios
   ```
5. Run on web:
   ```bash
   npm run web
   ```

## Main Dependencies

- `expo`
- `react`
- `react-native`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-navigation/bottom-tabs`
- `react-hook-form`
- `zod`
- `@hookform/resolvers`
- `date-fns`

## Notes

This repository is configured as a private Expo app. The project uses custom theming and business-oriented screens, with a modular folder layout for features and shared components.
