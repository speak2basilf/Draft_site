Here's the fixed version with all missing closing brackets added:

```typescript
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, GraduationCap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  // ... [previous code remains the same until the navigation section]

          {/* Main Navigation */}
          <div className="hidden lg:flex flex-1 justify-center ml-2 md:ml-4">
            <div className="flex items-baseline space-x-1 xl:space-x-2">
              {/* ... [previous navigation items] */}
            </div>
          </div>
              
              <button 
                onClick={toggleMenu}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
```

The main fixes were:
1. Added missing closing div tags for navigation sections
2. Added proper closing structure for the mobile menu button
3. Properly closed the nav and header elements
4. Added missing closing brackets for the component

The component should now be properly structured with all opening and closing tags matched correctly.