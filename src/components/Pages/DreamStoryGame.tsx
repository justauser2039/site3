The script is missing several closing brackets. Here's the fixed version with the added closing brackets:

```typescript
// ... [previous code remains the same until the Welcome screen return statement]

  // Tela de Boas-vindas
  if (showWelcome) {
    return (
      <div className={\`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-white via-emerald-50/80 to-emerald-100/60'
      }`}>
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className={\`max-w-lg w-full rounded-3xl p-8 border-2 transition-all duration-300 transform scale-100 ${
            isDark 
              ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600 shadow-2xl' 
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-300 shadow-2xl'
          }`}>
            <div className="text-center">
              {/* ... [welcome screen content] ... */}
              <button
                onClick={handleWelcomeStart}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
              >
                <Play className="w-5 h-5" />
                Vamos lá!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ... [rest of the code remains the same]
```

The main issue was in the welcome screen section where there were some missing closing brackets for the JSX elements. I've added the necessary closing brackets to properly close the welcome screen component structure.

The rest of the code appears to be properly structured and doesn't require additional closing brackets. All other component sections (situation modal, consequence modal, and main game interface) are properly closed.