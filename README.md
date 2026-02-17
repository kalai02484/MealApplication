# Meal Application

A modern, interactive meal recipe discovery application built with React and Vite. Browse meals by category, search for recipes, view detailed meal information, and save your favorite meals.

## 🎯 Features

- **Browse Meals**: Explore a wide collection of meals from TheMealDB API
- **Search Functionality**: Real-time search as you type to find meals by name
- **Category Filter**: Filter meals by category (Seafood, Dessert, Breakfast, etc.)
- **Favorites Management**: Add and remove meals to/from your favorites
- **Persistent Storage**: Your favorites are saved in localStorage and persist across sessions
- **Meal Details**: View comprehensive meal information including:
  - Ingredients with measurements
  - Step-by-step cooking instructions
  - Category and origin information
  - Tags and related metadata
  - YouTube video links for visual cooking guides
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern design with Tailwind CSS and Flowbite components

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite React** - Pre-built React components
- **React Icons** - Icon library (FcHome, FcLike, FiHeart, FaHeart, etc.)

### APIs
- **TheMealDB API** - Free API for meal and recipe data
  - Base URL: `https://www.themealdb.com/api/json/v1/1`

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository** (or extract the project folder)
   ```bash
   cd MealApplication
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (Vite default port)

## 🚀 Usage

### Main Page (Home)
- View initial meal suggestions
- Use the search bar to find meals by name (searches as you type)
- Click category buttons to filter meals
- Click "View Details" on any meal card to see full recipe
- Click the heart icon to add/remove meals from favorites

### Meal Details Page
- View complete meal information
- See all ingredients with measurements
- Read step-by-step instructions
- Watch embedded YouTube cooking video
- Check origin, category, and tags
- Add or remove from favorites using the prominent button

### Favorites Page
- Access via "Favorites" in the navigation
- View all your saved favorite meals
- Click any meal to view its details
- Remove meals by toggling the heart icon in meal cards

## 📁 Project Structure

```
MealApplication/
├── public/                    # Static assets
├── src/
│   ├── api/
│   │   └── mealApi.js        # API calls to TheMealDB
│   ├── assets/               # Images and logos
│   ├── components/           # Reusable components
│   │   ├── CategoryFilter.jsx    # Category filtering buttons
│   │   ├── LoadingSpinner.jsx    # Loading indicator
│   │   ├── MealCard.jsx          # Individual meal card
│   │   ├── SearchBar.jsx         # Search input
│   │   └── TopNavbar.jsx         # Navigation bar
│   ├── context/
│   │   └── FavoritesContext.jsx  # Global favorites state
│   ├── hooks/
│   │   └── useFavorites.js       # Favorites logic (legacy - use context)
│   ├── pages/
│   │   ├── Home.jsx              # Main page with search & filter
│   │   ├── Favorites.jsx         # Favorites listing page
│   │   ├── MealDetails.jsx       # Detailed meal view
│   │   └── Error.jsx             # 404 error page
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # This file
```

## 🔌 API Reference

### Endpoints Used

**Fetch Categories**
```javascript
GET /categories.php
```
Returns all meal categories available in the database.

**Search Meals**
```javascript
GET /search.php?s={meal_name}
```
Search meals by name. Returns array of matching meals.

**Fetch Meals by Category**
```javascript
GET /filter.php?c={category_name}
```
Get all meals in a specific category.

**Fetch Meal Details**
```javascript
GET /lookup.php?i={meal_id}
```
Get complete details for a specific meal including ingredients and instructions.

**Fetch Initial Meals** (on page load)
```javascript
GET /search.php?s=
```
Returns a random set of meals for initial display.

## 🎨 Components

### CategoryFilter
- Displays category buttons for filtering
- Shows selected state with visual feedback
- Calls parent's `onCategorySelect` callback

### SearchBar
- Real-time search input
- Triggers search on change (onChange event)
- Prevents default form submission

### MealCard
- Displays meal image, name, and controls
- "View Details" link to meal details page
- Heart icon button to toggle favorites
- Uses FavoritesContext for state management

### LoadingSpinner
- Shows loading indicator during data fetching
- Used on initial load and API calls

### TopNavbar
- Navigation with logo and links
- Links to Home and Favorites pages
- Sticky positioning

### MealDetails
- Full meal information display
- Image, ingredients list, instructions
- YouTube video embed
- Add/remove from favorites button
- Back button to return to previous page

## 📊 State Management

### Global State (FavoritesContext)
- Manages favorite meals across entire application
- Persists to localStorage automatically
- Provides `toggleFavorite()` and `isFavorite()` methods

### Local State
- Individual component state for UI interactions (loading, search query, selected category)

## 🎯 Key Features Explained

### Search as You Type
- Implemented with `onChange` handler in SearchBar
- Instantly updates meal display without page reload
- Handles empty results gracefully

### Category Filtering
- Fetches meals by selected category
- Maintains UI state to show selected category
- Can reset to "All" to show initial meals

### Favorites Persistence
- Uses browser's localStorage API
- Automatically saves when favorites change
- Loads on app startup via context initialization
- Works across browser sessions and tabs

## 🔧 Development

### Available Scripts

**Development Server**
```bash
npm run dev
```

**Build for Production**
```bash
npm run build
```

**Preview Production Build**
```bash
npm run preview
```

**Lint Code**
```bash
npm run lint
```

## 🐛 Known Issues & Fixes Applied

- ✅ Fixed null reference errors when meal data loads
- ✅ Fixed nested anchor tags (hydration error)
- ✅ Fixed multiple favorites only storing the last one (context state management)
- ✅ Fixed page reload on category filter click (LoadingSpinner logic)
- ✅ Added proper API base URL with HTTPS protocol

## 🚀 Future Enhancements

- User authentication and cloud-based favorites sync
- Recipe rating and review system
- Dietary restrictions filter (vegan, keto, etc.)
- Meal planning and weekly schedule
- Social sharing functionality
- Dark mode support
- Recipe print functionality
- Shopping list generator from ingredients

## 📝 License

This project is part of a learning curriculum. The meal data is provided by [TheMealDB](https://www.themealdb.com/) which is free to use.

## 👤 Author

Created as a mini project for frontend development learning.

---

**Happy cooking! 🍽️**