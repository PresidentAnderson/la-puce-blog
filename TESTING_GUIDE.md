# Testing Guide: Interactive Onboarding Flow

## Quick Start

### 1. Start Development Server

```bash
cd "/Volumes/DevOPS 2025/La Puce a L'oreille/website"
npm run dev
```

### 2. Open in Browser

Navigate to: `http://localhost:3000/commencer`

---

## Test Scenarios

### Scenario 1: Full Flow - Witnessed Path

1. Visit `/commencer`
2. Click "J'ai été témoin d'une faute" (Blue card)
3. Verify:
   - Blue color scheme appears
   - Progress bar shows "Étape 1 sur 4"
   - "Revenir au choix" button is visible
4. Click "Suivant" 3 times to go through all steps
5. Verify:
   - Previous button disabled on step 1
   - Progress bar updates (25%, 50%, 75%, 100%)
   - "Parcours terminé" appears at step 4
6. Scroll down and verify:
   - 4 rights listed (green checkmarks)
   - 4 risks listed (amber warnings)
   - 4 resource links present
7. Click "Recommencer"
8. Verify: Returns to situation selection

### Scenario 2: Navigation Testing

1. Select any situation
2. Click "Suivant" to step 2
3. Click "Précédent"
4. Verify: Returns to step 1
5. Click "Revenir au choix" in header
6. Verify: Returns to situation selection

### Scenario 3: All Paths Test

**Witnessed (Blue):**
- Select "J'ai été témoin d'une faute"
- Verify blue color scheme
- Check step 1: "Évaluez la gravité"

**Retaliation (Red):**
- Click "Revenir au choix"
- Select "J'ai subi des représailles"
- Verify red color scheme
- Check step 1: "Documentez tout immédiatement"

**Disclosure (Purple):**
- Click "Revenir au choix"
- Select "Je veux divulguer une information sensible"
- Verify purple color scheme
- Check step 1: "Vérifiez la légitimité"

**Questions (Teal):**
- Click "Revenir au choix"
- Select "Je ne sais pas encore — j'ai des questions"
- Verify teal color scheme
- Check step 1: "Évaluez votre situation"

### Scenario 4: Resource Links

From any path, click each resource link and verify:
- [ ] Link 1 navigates correctly
- [ ] Link 2 navigates correctly
- [ ] Link 3 navigates correctly
- [ ] Link 4 navigates correctly

Common targets:
- `/guides`
- `/guides#templates`
- `/guides#checklists`
- `/securite`
- `/securite#canaux`
- `/securite#protection`
- `/scenarios`
- `/contact`

### Scenario 5: Privacy Verification

1. Open browser DevTools (F12)
2. Go to Network tab
3. Navigate through onboarding flow
4. Verify:
   - No POST requests to server
   - No state-saving API calls
   - No tracking pixels
5. Check Application tab > Local Storage
6. Verify: No state stored
7. Reload page
8. Verify: Returns to initial selection screen

### Scenario 6: Responsive Design

**Desktop (1920x1080):**
- Situation cards in 2x2 grid
- Progress bar clearly visible
- All content readable

**Tablet (768px):**
- Situation cards in 2 columns
- Navigation buttons accessible
- Text sizes appropriate

**Mobile (375px):**
- Situation cards stack vertically
- Buttons full-width or stacked
- Progress bar visible
- Text readable

---

## Visual Checks

### Color Verification

| Path | Header Gradient | Icons | Links |
|------|----------------|-------|-------|
| Witnessed | Blue (600-700) | Blue | Blue |
| Retaliation | Red (600-700) | Red | Red |
| Disclosure | Purple (600-700) | Purple | Purple |
| Questions | Teal (600-700) | Teal | Teal |

### Typography Verification

- Headers: Bold, large (2xl-4xl)
- Body text: Regular, readable (base-lg)
- Buttons: Medium weight
- Lists: Proper spacing
- Icons: Aligned with text

### Interaction Verification

- [ ] Hover states on buttons
- [ ] Active states on navigation
- [ ] Disabled state on "Précédent" (step 1)
- [ ] Smooth transitions
- [ ] Progress bar animation

---

## Browser Compatibility

Test in these browsers:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Accessibility Testing

### Keyboard Navigation

1. Tab through all interactive elements
2. Verify focus indicators visible
3. Test Enter/Space on buttons
4. Test Escape key (should do nothing - expected)

### Screen Reader Testing

1. Use screen reader (NVDA/JAWS/VoiceOver)
2. Verify:
   - Headings read in order
   - Button labels descriptive
   - Lists announced properly
   - Links have clear context

### Color Contrast

1. Use browser extension (e.g., axe DevTools)
2. Run accessibility audit
3. Verify WCAG AA compliance
4. Check color contrast ratios

---

## Performance Testing

### Load Time

1. Open DevTools > Network tab
2. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
3. Measure:
   - Time to First Byte (TTFB): < 200ms
   - First Contentful Paint (FCP): < 1s
   - Time to Interactive (TTI): < 2s

### Bundle Size

```bash
npm run build
```

Check build output for page size:
- Target: < 100KB for /commencer page
- Gzipped: < 30KB

---

## Common Issues & Solutions

### Issue: Colors not showing
**Solution**: Check Tailwind config includes color classes

### Issue: Progress bar not updating
**Solution**: Verify useState is updating currentStep

### Issue: Links not working
**Solution**: Verify target pages exist

### Issue: Previous button not disabled
**Solution**: Check currentStep === 0 condition

---

## Test Data

### Expected Content Counts

Per path:
- Steps: 4
- Rights: 4
- Risks: 4
- Resource links: 4

Total across all paths:
- Steps: 16
- Rights: 16
- Risks: 16
- Resource links: 16

### Expected State Values

```typescript
// Initial state
currentSituation: null
currentStep: 0

// After selecting "witnessed"
currentSituation: 'witnessed'
currentStep: 0

// After clicking "Suivant" twice
currentSituation: 'witnessed'
currentStep: 2
```

---

## Acceptance Criteria

✅ All 4 situation paths accessible
✅ All navigation buttons work
✅ Progress indicator updates correctly
✅ All resource links navigate
✅ Restart functionality works
✅ No privacy violations
✅ Mobile responsive
✅ Accessible (WCAG AA)
✅ No console errors
✅ Fast load time

---

## Reporting Issues

When reporting issues, include:

1. **Browser & version**
2. **Screen size**
3. **Steps to reproduce**
4. **Expected behavior**
5. **Actual behavior**
6. **Screenshots** (if applicable)
7. **Console errors** (if any)

---

## Sign-off Checklist

Before deployment:

- [ ] All test scenarios passed
- [ ] All browsers tested
- [ ] Mobile tested
- [ ] Accessibility verified
- [ ] Privacy verified
- [ ] Performance acceptable
- [ ] No console errors
- [ ] Content reviewed
- [ ] Links verified
- [ ] Team approval obtained

---

**Test Date**: _______________
**Tester**: _______________
**Status**: _______________
**Notes**: _______________
