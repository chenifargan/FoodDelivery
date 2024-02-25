 React Native Delivery App

## Overview

This React Native application serves as a delivery app, providing a seamless experience for users to explore and order from various featured restaurants. The app utilizes modern technologies such as React Navigation, Redux Toolkit, and integrates with a Sanity Studio backend for content management.

## Features

- **Navigation**: Powered by React Navigation, the app provides smooth and intuitive navigation for an enhanced user experience.

- **State Management**: Redux Toolkit is employed for efficient state management, ensuring a centralized and predictable state container.

- **Map Integration**: Leveraging the capabilities of `react-native-maps`, the app seamlessly integrates maps to enhance location-based features.

- **Sanity Studio Integration**: The app connects to a Sanity Studio backend for content management, allowing easy management of featured restaurants, categories, and other dynamic content.

## Dependencies

- **@react-navigation/native**: v6.1.9
- **@react-navigation/native-stack**: v6.9.17
- **@reduxjs/toolkit**: v2.1.0
- **@sanity/client**: v6.13.3
- **@sanity/image-url**: v1.0.2
- **expo**: v~49.0.15
- **expo-status-bar**: v~1.6.0
- **react**: v18.2.0
- **react-native**: v0.72.6
- **react-native-feather**: v1.1.2
- **react-native-maps**: v1.10.0
- **react-native-safe-area-context**: v4.6.3
- **react-native-screens**: v~3.22.0
- **react-redux**: v9.1.0
- **@babel/core**: v7.20.0
- **nativewind**: v2.0.11
- **tailwindcss**: v3.3.2

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the app:
   - iOS: `npm run ios`
   - Android: `npm run android`
   - Web: `npm run web`

## Sanity Studio

### Overview

The Sanity Studio serves as the backend for managing dynamic content in the React Native delivery app. It provides a convenient interface for adding, editing, and organizing data related to featured restaurants, categories, and more.

### Development Commands

- `sanity dev`: Start the development environment.
- `sanity start`: Start the Studio.
- `sanity build`: Build the Studio.
- `sanity deploy`: Deploy the Studio.
- `sanity graphql deploy`: Deploy GraphQL schema.

### Dependencies

- **@sanity/vision**: v3.28.0
- **react**: v18.2.0
- **react-dom**: v18.2.0
- **react-is**: v18.2.0
- **sanity**: v3.28.0
- **styled-components**: v6.0.7

### Development Dependencies

- **@sanity/eslint-config-studio**: v3.0.1
- **@types/react**: v18.0.25
- **eslint**: v8.6.0
- **prettier**: v3.0.2
- **typescript**: v5.1.6
