# Smoothie Recipe Angular Web App – Front-End Specification

## 1. Overview

A responsive, accessible Angular web app for discovering smoothie recipes by ingredients and tags, with detailed recipe views and a delightful user experience.

## 2. Core Screens & Components

### 2.1 Home/Search Page

- **IngredientSearchBarComponent**: Multi-select, autocomplete for ingredients
- **RecipeCardComponent**: Grid/list of recipe cards, each showing:
  - Smoothie image
  - Recipe name
  - Description
  - Tags (as chips or badges)
- **NavBarComponent**: Persistent top navigation bar for main sections (desktop and mobile)
- **ErrorStateComponent**: Friendly messages for no results/network issues

### 2.2 Recipe Details

- **RecipeDetailsComponent**: Modal or page with:
  - Name, description
  - Ingredients (list)
  - Instructions (steps)
  - Tags (chips)
  - Tips (optional)

### 2.3 Feedback

- **FeedbackPromptComponent**: In-app prompt after recipe view

## 3. Data & State

- **Source**: Static JSON (assets/sample-data.json)
- **Recipe Model**:
  - id: string
  - name: string
  - description: string
  - servings: number
  - prepTime: string
  - difficulty: string
  - ingredients: [{ name: string, amount: number, unit: string }]
  - instructions: string[]
  - tags: string[]
  - tips: string[]

## 4. UI/UX Requirements

- **Responsive**: Desktop, tablet, mobile
- **Accessibility**: WCAG AA compliance
- **Performance**: Search/filter <1s
- **Error Handling**: Clear, actionable messages
- **Navigation**: Persistent top navigation bar, logical flow (no bottom nav)
- **Visual Design**: (Specify branding/colors if available)
- **Information Architecture**: Home/Search, Results, Recipe Details
- **Critical UI Components**:
  - Ingredient search bar
  - Recipe cards (image, name, description, tags)
  - Details modal/page

## 5. User Flows

- **Primary**: Home → Search/Filter → Results → Recipe Details → Feedback
- **Edge Cases**: No results, network errors, empty states

## 6. Technical Notes

- **Framework**: Angular (latest stable)
- **Data Loading**: Static JSON, client-side filtering
- **Testing**: Unit + integration
- **Deployment**: Static hosting (Vercel, Netlify, GitHub Pages)

## 7. Out of Scope (MVP)

- User authentication, recipe creation/editing, nutrition data, social sharing

---

_See PRD for full requirements and rationale._
