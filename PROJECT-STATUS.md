# Whatley National Trust - Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

## Installation Steps

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Start the server: `npm start`
5. Access at http://localhost:3000

## Configuration
- Copy `.env.example` to `.env`
- Update database connection string
- Set JWT secret key
- Configure crypto API keys# Whatley National Trust - Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

## Installation Steps

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Start the server: `npm start`
5. Access at http://localhost:3000

## Configuration
- Copy `.env.example` to `.env`
- Update database connection string
- Set JWT secret key
- Configure crypto API keys# Whatley National Trust - Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

## Installation Steps

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Start the server: `npm start`
5. Access at http://localhost:3000

## Configuration
- Copy `.env.example` to `.env`
- Update database connection string
- Set JWT secret key
- Configure crypto API keys# Banking API Documentation

## Authentication
All API endpoints require authentication via JWT token.

## Endpoints

### User Management
- `POST /api/login` - User authentication
- `POST /api/register` - User registration
- `GET /api/user/profile` - Get user profile

### Account Management
- `GET /api/accounts` - Get user accounts
- `POST /api/accounts/transfer` - Transfer funds
- `GET /api/accounts/balance` - Get account balance

### Cryptocurrency
- `GET /api/crypto/rates` - Get current crypto rates
- `POST /api/crypto/buy` - Purchase cryptocurrency
- `POST /api/crypto/sell` - Sell cryptocurrency

