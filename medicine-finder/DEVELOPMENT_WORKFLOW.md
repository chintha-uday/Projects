# Development Workflow & Documentation Guidelines

**Version:** 1.0.0  
**Last Updated:** January 18, 2026  
**Purpose:** Ensure all code changes are automatically documented

---

## Quick Reference Checklist

### For Every Code Change, Follow This Process:

```
┌─────────────────────────────────────────────────────┐
│  BEFORE COMMITTING CODE                             │
├─────────────────────────────────────────────────────┤
│ ✅ 1. Update relevant documentation files          │
│ ✅ 2. Add/update code comments                     │
│ ✅ 3. Update API_REFERENCE.md if APIs change      │
│ ✅ 4. Update ARCHITECTURE.md if structure changes  │
│ ✅ 5. Update component descriptions if needed      │
│ ✅ 6. Run tests (if applicable)                    │
│ ✅ 7. Commit with descriptive message              │
│ ✅ 8. Update version number if major change       │
└─────────────────────────────────────────────────────┘
```

---

## Documentation Files & When to Update Them

### 📄 DOCUMENTATION.md (Main Reference)
**Update When:**
- New features added
- Component behavior changes
- Authentication flow changes
- Search functionality updates
- UI/UX changes
- Data structure modifications

**How to Update:**
1. Find the relevant section
2. Update description and examples
3. Update code samples
4. Add to version history

**Example Update:**
```markdown
## [Feature Name] - UPDATED January 18, 2026

### Previous Behavior
[Old description]

### New Behavior
[New description]

### Code Example
[Updated code]
```

---

### 📋 API_REFERENCE.md (Technical APIs)
**Update When:**
- New components created
- Context API changes
- New routes added
- Data structures change
- Props change for existing components

**How to Update:**
```markdown
## ComponentName (NEW/UPDATED)

### Props
```javascript
{
  propName: type,      // Description - UPDATED
  newProp: type,       // Description - NEW
}
```

### Returns
[Description of return values]

### Example
[Updated code example]
```

---

### 🏗️ ARCHITECTURE.md (System Design)
**Update When:**
- Application structure changes
- New folders/modules added
- Component hierarchy changes
- State management changes
- Authentication flow updated

**How to Update:**
1. Update component hierarchy diagram
2. Update data flow diagrams
3. Update folder structure diagram
4. Update design patterns section
5. Add new architecture notes

---

### 📊 FINAL_SUMMARY.md (Status Report)
**Update When:**
- Major features completed
- Phase changes occur
- Significant milestones reached
- Statistics change

**How to Update:**
```markdown
## Latest Updates - January 18, 2026

### Features Added
- [Feature 1]
- [Feature 2]

### Files Modified
- src/components/[ComponentName].js
- src/pages/[PageName].js

### Statistics Updated
- Lines of Code: [New count]
- Components: [New count]
```

---

### 🔍 INDEX.md (Quick Lookup)
**Update When:**
- New components added
- New pages created
- New utilities added
- File structure changes

**How to Update:**
Add to appropriate section:
```markdown
| Component/File | Location | Purpose | Last Updated |
|---|---|---|---|
| NewComponent | src/components/NewComponent.js | [Description] | Jan 18, 2026 |
```

---

### 🚀 SETUP_GUIDE.md (Quick Start)
**Update When:**
- Setup process changes
- New dependencies added
- Installation steps change
- Credentials change

---

### ✅ VERIFICATION_CHECKLIST.md (Quality Assurance)
**Update When:**
- New features need testing
- Quality metrics change
- Deployment process updates

---

## Code Change Categories & Documentation Templates

### 1️⃣ NEW COMPONENT CREATED

**Files to Update:**
- [ ] DOCUMENTATION.md → Components section
- [ ] API_REFERENCE.md → Add component props/methods
- [ ] ARCHITECTURE.md → Update component hierarchy
- [ ] INDEX.md → Add to component list
- [ ] Component file → Add JSDoc comments

**Template:**
```javascript
/**
 * ComponentName - Brief description
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.propName - Description
 * @returns {React.ReactElement}
 * 
 * @example
 * <ComponentName propName="value" />
 */
```

**Documentation Template:**
```markdown
### ComponentName (NEW - Jan 18, 2026)

**Purpose:** [Description]

**Location:** `src/components/ComponentName.js`

**Props:**
- `propName` (type) - Description

**Usage:**
\`\`\`jsx
import ComponentName from './components/ComponentName';

<ComponentName propName="value" />
\`\`\`

**Related Files:**
- CSS: src/components/ComponentName.css
```

---

### 2️⃣ NEW PAGE/ROUTE CREATED

**Files to Update:**
- [ ] DOCUMENTATION.md → Pages section
- [ ] ARCHITECTURE.md → Routes section
- [ ] API_REFERENCE.md → Routes table
- [ ] App.js → Check if route added

**Template:**
```javascript
// In App.js - Document the new route
<Route 
  path="/new-page" 
  element={
    <ProtectedRoute requiredRole="admin">
      <NewPage />
    </ProtectedRoute>
  }
/>
```

**Documentation Update:**
```markdown
### NewPage (NEW - Jan 18, 2026)

**Route:** `/new-page`  
**Access:** Admin only / Public / Protected  
**Purpose:** [Description]

**Key Features:**
- [Feature 1]
- [Feature 2]
```

---

### 3️⃣ DATABASE/DATA STRUCTURE CHANGE

**Files to Update:**
- [ ] DOCUMENTATION.md → Data Management section
- [ ] API_REFERENCE.md → Data structures
- [ ] Code file → Add inline comments

**Template:**
```javascript
// Updated data structure - Jan 18, 2026
const medicineObject = {
  id: number,
  name: string,           // NEW FIELD
  company: string,        // UPDATED - Now required
  genericName: string,
  // ... rest of fields
};
```

**Documentation Update:**
```markdown
## Data Structure Update - Jan 18, 2026

### Changes Made
| Field | Change Type | Details |
|-------|-------------|---------|
| name | NEW | Added to track brand names |
| company | UPDATED | Now a required field |

### Migration Guide
[Instructions if needed]
```

---

### 4️⃣ AUTHENTICATION FLOW CHANGE

**Files to Update:**
- [ ] DOCUMENTATION.md → Authentication section
- [ ] ARCHITECTURE.md → Auth flow diagram
- [ ] AuthContext.js → Add comments

**Documentation Update:**
```markdown
## Authentication Flow Update - Jan 18, 2026

### Previous Flow
[Old flow description]

### New Flow
[New flow description]

### Code Changes
- AuthContext.js: [What changed]
- [Other files]

### Testing Checklist
- [ ] Admin login works
- [ ] Doctor login works
- [ ] Guest login works
- [ ] Logout works
```

---

### 5️⃣ STYLING/CSS UPDATES

**Files to Update:**
- [ ] DOCUMENTATION.md → Design System section
- [ ] Code file → Add CSS comments

**Template:**
```css
/* Updated - Jan 18, 2026 */
.className {
  /* NEW: Added margin for better spacing */
  margin: 1rem;
  /* UPDATED: Changed color from #D4824C to #B85D3D */
  color: #B85D3D;
}
```

---

### 6️⃣ BUG FIX

**Files to Update:**
- [ ] VERIFICATION_CHECKLIST.md → Bug fixes section
- [ ] Code file → Add fix comment with date
- [ ] FINAL_SUMMARY.md → Bug fixes section

**Template:**
```javascript
// BUG FIX - Jan 18, 2026
// Issue: [Description of bug]
// Solution: [How it was fixed]
if (condition) {
  // Fixed version
}
```

---

### 7️⃣ DEPENDENCY/PACKAGE UPDATE

**Files to Update:**
- [ ] package.json (automatic)
- [ ] SETUP_GUIDE.md → Dependencies section
- [ ] DOCUMENTATION.md → If setup changes

**Process:**
```bash
npm install package-name@version
# Then update documentation

# Commit
git commit -m "Add: package-name v1.0.0 for [purpose]"
```

---

## Git Commit Message Format

### Standard Format:
```
[TYPE]: [Description] - [Date]

[Details]

Files Modified:
- File 1
- File 2

Documentation Updated:
- DOCUMENTATION.md
- API_REFERENCE.md
```

### Type Examples:
- `FEATURE`: New feature added
- `UPDATE`: Existing feature modified
- `FIX`: Bug fix
- `REFACTOR`: Code restructuring
- `DOCS`: Documentation update
- `DATA`: Data structure changes

### Examples:
```bash
git commit -m "FEATURE: Add medicine search by symptoms - Jan 18, 2026

- Implemented SearchBar component
- Added filter logic in DashboardPage
- Updated UI styling

Files: SearchBar.js, DashboardPage.js, SearchBar.css
Docs: DOCUMENTATION.md, ARCHITECTURE.md"
```

---

## Documentation Update Checklist Template

Copy this for every code change:

```markdown
## Update: [Change Name] - [Date]

### Code Changes
- [ ] Component/File 1: [Description]
- [ ] Component/File 2: [Description]

### Documentation Files to Update
- [ ] DOCUMENTATION.md
- [ ] API_REFERENCE.md
- [ ] ARCHITECTURE.md
- [ ] FINAL_SUMMARY.md
- [ ] INDEX.md
- [ ] SETUP_GUIDE.md
- [ ] VERIFICATION_CHECKLIST.md

### Specific Updates Made
- [ ] Updated component descriptions
- [ ] Added/updated props documentation
- [ ] Updated code examples
- [ ] Updated diagrams
- [ ] Updated data structures
- [ ] Added inline code comments

### Testing Done
- [ ] Feature works as expected
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Documentation is accurate

### Commit Information
- Branch: medicine
- Commit Message: [What will be committed]
```

---

## Auto-Documentation Tips

### 1. Use Code Comments
```javascript
/**
 * ComponentName
 * Purpose: [What it does]
 * Last Updated: Jan 18, 2026
 * @param {type} propName - Description
 */
```

### 2. Keep Examples Updated
- Every component in API_REFERENCE should have working example
- Update examples when props change
- Keep code samples in sync with actual code

### 3. Use Version Tags
```javascript
// v1.1.0 - Jan 18, 2026: Added new parameter
// v1.0.0 - Initial version
```

### 4. Date Code Changes
```javascript
// UPDATED Jan 18, 2026: Changed behavior
// NEW Jan 18, 2026: Added function
```

---

## Documentation Maintenance Schedule

### After Every Code Change
- [ ] Update relevant documentation
- [ ] Update code comments
- [ ] Commit with description

### Weekly Review
- [ ] Check for undocumented changes
- [ ] Review new issues
- [ ] Update statistics

### Before Deployment
- [ ] Full documentation review
- [ ] Verify all examples work
- [ ] Check links and references
- [ ] Update version number

---

## Quick Update Commands

### Document a new component:
```bash
# 1. Create component
# 2. Add to API_REFERENCE.md
# 3. Add to DOCUMENTATION.md
# 4. Update ARCHITECTURE.md
# 5. Commit

git add src/components/NewComponent.js API_REFERENCE.md DOCUMENTATION.md ARCHITECTURE.md
git commit -m "FEATURE: Add NewComponent - Jan 18, 2026"
git push origin medicine
```

### Update after database change:
```bash
git add src/data/*.json DOCUMENTATION.md API_REFERENCE.md
git commit -m "DATA: Update medicines database structure - Jan 18, 2026"
git push origin medicine
```

---

## Future Automation Suggestions

### Phase 2: Consider implementing
1. **JSDoc to Markdown converter** - Auto-generate API docs from comments
2. **Git hooks** - Remind to update docs on commit
3. **CI/CD checks** - Verify docs updated with code changes
4. **Auto-changelog generator** - Generate FINAL_SUMMARY.md automatically
5. **Link validator** - Verify all documentation links work

---

## Questions & Support

**When updating docs, ask yourself:**
1. ✅ Does someone new understand this change?
2. ✅ Are there examples for complex features?
3. ✅ Are breaking changes clearly marked?
4. ✅ Are all affected files documented?
5. ✅ Is the version number updated?

---

**Remember:** Good documentation is as important as good code!
