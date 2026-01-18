# 📋 Developer Quick Reference Card

**Use this card before committing any code changes**

---

## ⚡ Super Quick Workflow (2 minutes)

### Step 1: Make Code Changes
```bash
# Edit your files, test everything works
npm start
# Verify in browser
```

### Step 2: Update Documentation
```bash
# Ask yourself:
# ✅ Did I change a component? → Update DOCUMENTATION.md
# ✅ Did I change an API? → Update API_REFERENCE.md  
# ✅ Did I add files? → Update INDEX.md
# ✅ Did I change data? → Update DOCUMENTATION.md
```

### Step 3: Add Comments
```javascript
// NEW - Jan 18, 2026: Added new parameter
// UPDATED - Jan 18, 2026: Changed behavior from X to Y
/**
 * ComponentName - Brief description
 */
```

### Step 4: Commit with Good Message
```bash
git add .
git commit -m "FEATURE: Brief description - Jan 18, 2026"
git push origin medicine
```

### Step 5: Update CHANGELOG.md
Add entry to CHANGELOG.md documenting the change

---

## 🎯 Checklist by Change Type

### 🆕 NEW COMPONENT
- [ ] Created component file (Component.js)
- [ ] Created styles (Component.css)
- [ ] Added JSDoc comments
- [ ] Updated DOCUMENTATION.md → Components section
- [ ] Updated API_REFERENCE.md → Add props table
- [ ] Updated ARCHITECTURE.md → Component diagram
- [ ] Updated INDEX.md → Add to component list
- [ ] Update CHANGELOG.md

### 📄 NEW PAGE/ROUTE
- [ ] Created page component
- [ ] Added route in App.js
- [ ] Added authentication check if needed
- [ ] Updated DOCUMENTATION.md → Pages section
- [ ] Updated ARCHITECTURE.md → Routes section
- [ ] Updated API_REFERENCE.md → Routes table
- [ ] Update CHANGELOG.md

### 🗄️ DATA STRUCTURE CHANGE
- [ ] Modified data files
- [ ] Updated DOCUMENTATION.md → Data Management
- [ ] Updated API_REFERENCE.md → Data structures
- [ ] Added inline code comments
- [ ] Update CHANGELOG.md

### 🎨 STYLING CHANGE
- [ ] Updated CSS file
- [ ] Added comments in CSS
- [ ] Updated DOCUMENTATION.md → Design System if major
- [ ] Verified responsive design
- [ ] Update CHANGELOG.md

### 🔒 AUTHENTICATION CHANGE
- [ ] Modified AuthContext.js
- [ ] Updated DOCUMENTATION.md → Authentication
- [ ] Updated ARCHITECTURE.md → Auth flow
- [ ] Tested all roles (Admin/Doctor/Guest)
- [ ] Update CHANGELOG.md

### 🐛 BUG FIX
- [ ] Fixed the bug
- [ ] Added code comment with fix explanation
- [ ] Tested the fix
- [ ] Updated VERIFICATION_CHECKLIST.md
- [ ] Update CHANGELOG.md

### 📦 NEW DEPENDENCY
- [ ] Installed package: `npm install package-name`
- [ ] Updated SETUP_GUIDE.md if setup changes
- [ ] Added usage example in code
- [ ] Tested package works
- [ ] Update CHANGELOG.md

---

## 📚 Which File to Update?

| Change | Update These Files |
|--------|------------------|
| New Component | DOCUMENTATION.md, API_REFERENCE.md, ARCHITECTURE.md, INDEX.md |
| New Page | DOCUMENTATION.md, ARCHITECTURE.md, API_REFERENCE.md |
| Bug Fix | Code comments, VERIFICATION_CHECKLIST.md |
| Data Change | DOCUMENTATION.md, API_REFERENCE.md |
| Styling | CSS comments, DOCUMENTATION.md (if design system) |
| Auth Change | DOCUMENTATION.md, ARCHITECTURE.md, AuthContext.js |
| New Dependency | SETUP_GUIDE.md, DOCUMENTATION.md |

---

## 📝 Git Commit Message Template

```
[TYPE]: [Brief Description] - [Date]

[Optional: More details about the change]

Files:
- file1.js
- file2.js

Docs Updated:
- DOCUMENTATION.md
- API_REFERENCE.md
```

### Type Examples:
- **FEATURE:** New feature (use for new components, pages, features)
- **UPDATE:** Modified existing (use for changes to existing features)
- **FIX:** Bug fix (use for bug fixes)
- **REFACTOR:** Code restructuring (use for reorganizing code)
- **DATA:** Data changes (use for data structure updates)
- **DOCS:** Documentation only (use for doc updates without code changes)

### Examples:
```bash
# Good commits:
git commit -m "FEATURE: Add medicine search by symptoms - Jan 18, 2026"
git commit -m "UPDATE: Improve search performance - Jan 18, 2026"
git commit -m "FIX: Fix login page validation - Jan 18, 2026"
git commit -m "DATA: Add new medicines database - Jan 18, 2026"

# Bad commits:
git commit -m "fixed stuff"
git commit -m "updates"
git commit -m "changes"
```

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Write a new component | 20-30 min |
| Update related documentation | 10-15 min |
| Add comments to code | 5-10 min |
| Commit and push | 2-3 min |
| Update CHANGELOG.md | 3-5 min |
| **TOTAL for one change** | **40-60 min** |

**Remember:** Documentation takes 25-30% of time - this is NORMAL and GOOD!

---

## 🚀 Before Pushing Code

```bash
# 1. Test locally
npm start
# ✅ Verify in browser - all features work
# ✅ Check for console errors
# ✅ Test responsive design

# 2. Check git status
git status
# ✅ All changed files shown

# 3. Review changes
git diff
# ✅ Only intended changes are there

# 4. Add files
git add .

# 5. Commit with message
git commit -m "[TYPE]: [Description] - [Date]"

# 6. Push
git push origin medicine
```

---

## 🔍 Quick Documentation Lookup

**Question:** How do I...?

- **...add a new component?** → See DEVELOPMENT_WORKFLOW.md → New Component Created
- **...change authentication?** → See DOCUMENTATION.md → Authentication System
- **...update data?** → See DOCUMENTATION.md → Data Management
- **...create new page?** → See API_REFERENCE.md → Routes section
- **...understand architecture?** → See ARCHITECTURE.md
- **...find a component?** → See INDEX.md
- **...get started?** → See SETUP_GUIDE.md
- **...see all changes?** → See CHANGELOG.md
- **...test the app?** → See DOCUMENTATION.md → Testing Guide

---

## 🎓 Learning Path

**New to the project?**
1. Start with SETUP_GUIDE.md (5 min read)
2. Read ARCHITECTURE.md (10 min)
3. Check INDEX.md for file locations (5 min)
4. Review existing components in DOCUMENTATION.md (15 min)
5. Read DEVELOPMENT_WORKFLOW.md before making changes (10 min)

**Making your first change?**
1. Review DEVELOPMENT_WORKFLOW.md
2. Use the relevant checklist above
3. Follow git commit template
4. Update CHANGELOG.md
5. Ask if unsure!

---

## 📞 Questions to Ask Before Coding

- [ ] What files will I be changing?
- [ ] What documentation needs updating?
- [ ] Should I create a new component or modify existing?
- [ ] Are there any authentication requirements?
- [ ] Will this affect other components?
- [ ] Have I tested all scenarios?
- [ ] Is this backward compatible?

---

## ✅ Final Checklist Before Push

- [ ] Code works locally (npm start tested)
- [ ] No console errors
- [ ] Comments added to complex code
- [ ] Related documentation updated
- [ ] CHANGELOG.md entry added
- [ ] Commit message is descriptive
- [ ] All files are staged
- [ ] Ready to push

---

**Time to complete:** 2-5 minutes  
**Difficulty:** Easy  
**When to use:** Before every commit  
**Last Updated:** January 18, 2026

---

## 🎯 Pro Tips

1. **Document while you code** - Don't leave it for later
2. **Copy templates** - Use the templates provided to save time
3. **Be specific** - Vague descriptions help no one
4. **Include dates** - Always add the date to changes
5. **Test first** - Never commit code that doesn't work
6. **Review changes** - Check git diff before committing
7. **Small commits** - Better to commit frequently than once a day
8. **Good messages** - Future you will thank present you

---

**Remember:** 📚 Documentation = Better Code Quality + Faster Development + Happy Team!
