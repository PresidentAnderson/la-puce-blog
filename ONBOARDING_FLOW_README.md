# Interactive "First 5 Minutes" Onboarding Flow

## Overview

The `/commencer` page has been transformed from a static guide into an interactive, tailored onboarding wizard for the whistleblower platform.

## File Modified

- **Path**: `/app/commencer/page.tsx`
- **Type**: Client-side React component (`'use client'`)

## Features Implemented

### 1. Situation Selection Screen

Users are presented with 4 situation types:

1. **J'ai été témoin d'une faute** (I witnessed wrongdoing)
   - Color scheme: Blue
   - Focus: Evidence collection and reporting channels

2. **J'ai subi des représailles** (I suffered retaliation)
   - Color scheme: Red
   - Focus: Urgent legal help and protection

3. **Je veux divulguer une information sensible** (I want to disclose sensitive information)
   - Color scheme: Purple
   - Focus: Security and strategic disclosure

4. **Je ne sais pas encore — j'ai des questions** (I'm not sure yet — I have questions)
   - Color scheme: Teal
   - Focus: Education and resources

### 2. Multi-Step Guidance

Each situation provides:
- **4 tailored steps** specific to that situation
- **Step-by-step navigation** (Previous/Next buttons)
- **Progress indicator** showing current step (e.g., "Étape 2 sur 4")
- **Visual progress bar** at the top of the page

### 3. Rights and Risks Sections

Each path displays:
- **Vos droits et protections** (Your rights and protections)
  - 4 specific legal rights relevant to the situation
  - Green checkmark icons for positive reinforcement

- **Risques à connaître** (Risks to know)
  - 4 specific risks to be aware of
  - Amber warning icons for awareness

### 4. Tailored Resources

Each path provides:
- **Relevant resource links** specific to the situation
- Links to `/guides`, `/securite`, `/scenarios`, `/contact` pages
- Contextual anchors (e.g., `#checklists`, `#templates`, `#protection`)

### 5. Privacy Features

**CRITICAL PRIVACY IMPLEMENTATION:**
- ✅ **Client-side only** (`'use client'` directive)
- ✅ **No server-side state** or user tracking
- ✅ **Session-based** progress using React `useState`
- ✅ **No data collection** or logging
- ✅ **Clears on page close** - all state is lost when user leaves
- ✅ **100% anonymous** - maintains platform's zero-logging promise

### 6. Navigation Features

- **Restart button** - Returns to situation selection
- **Back to choice** link - Available in the guided flow header
- **Previous/Next step navigation** - Smooth progression through content
- **Disabled previous button** on first step (visual feedback)

### 7. Responsive Design

- **Mobile-first** approach
- **2-column grid** on desktop for situation selection
- **Full-width cards** on mobile
- **Responsive typography** (text scales with viewport)
- **Touch-friendly** buttons and interactions

## Technical Architecture

### State Management

```typescript
const [currentSituation, setCurrentSituation] = useState<SituationType>(null)
const [currentStep, setCurrentStep] = useState(0)
```

- Simple React state - no external state management needed
- State resets to `null` when component unmounts
- Step counter tracks progress through each path's guidance

### Path Configuration

Centralized configuration object containing all 4 paths:

```typescript
const pathConfigs: Record<Exclude<SituationType, null>, PathConfig> = {
  witnessed: { /* config */ },
  retaliation: { /* config */ },
  disclosure: { /* config */ },
  questions: { /* config */ }
}
```

Each path includes:
- Title and description
- Color scheme and gradient
- 4 step objects (title, description, icon)
- 4 rights
- 4 risks
- Resource links with labels and hrefs

### Conditional Rendering

The component renders differently based on state:
- **If `currentSituation === null`**: Show situation selection screen
- **If `currentSituation !== null`**: Show guided path with current step

## Color Schemes

Each path has a unique color for visual distinction:

| Situation | Color | Gradient |
|-----------|-------|----------|
| Witnessed | Blue | `from-blue-600 to-blue-700` |
| Retaliation | Red | `from-red-600 to-red-700` |
| Disclosure | Purple | `from-purple-600 to-purple-700` |
| Questions | Teal | `from-teal-600 to-teal-700` |

## Content Structure

### Witnessed Path (4 Steps)
1. Évaluez la gravité
2. Collectez des preuves
3. Consultez vos droits
4. Choisissez votre canal

### Retaliation Path (4 Steps)
1. Documentez tout immédiatement
2. Consultez un avocat d'urgence
3. Saisissez les autorités
4. Protégez-vous

### Disclosure Path (4 Steps)
1. Vérifiez la légitimité
2. Préparez votre dossier
3. Sécurisez vos communications
4. Choisissez votre stratégie

### Questions Path (4 Steps)
1. Évaluez votre situation
2. Informez-vous sur vos droits
3. Consultez les ressources
4. Parlez-en (de façon confidentielle)

## Icons

All icons use Heroicons (via inline SVG):
- Information icon for hero section
- Shield icon for privacy notice
- Eye icon for "witnessed"
- Warning triangle for "retaliation"
- Key icon for "disclosure"
- Question mark icon for "questions"
- Plus contextual icons for each step

## Links to Other Pages

The flow integrates with:
- `/guides` - Templates and practical guides
- `/guides#templates` - Narrative templates
- `/guides#checklists` - Documentation checklists
- `/securite` - Legal rights and protections
- `/securite#canaux` - Reporting channels
- `/securite#protection` - Personal protection guide
- `/securite#digital` - Digital security guide
- `/scenarios` - Case studies and examples
- `/contact` - Ask questions, get help
- `/contact#faq` - Frequently asked questions

## User Experience Flow

```
Landing on /commencer
  ↓
[Situation Selection Screen]
  ↓
User selects their situation
  ↓
[Guided Path - Step 1 of 4]
  ↓
Progress through steps (Next/Previous)
  ↓
View rights, risks, and resources
  ↓
Click resource links or restart
```

## Accessibility Features

- **Semantic HTML** - Proper heading hierarchy
- **ARIA-friendly** - Buttons have clear labels
- **Keyboard navigation** - All interactive elements are accessible
- **Color contrast** - WCAG AA compliant
- **Focus states** - Visible focus indicators on buttons
- **Screen reader friendly** - Descriptive text for all icons

## Testing Recommendations

1. **Manual Testing**:
   - Test all 4 situation paths
   - Verify step navigation (Previous/Next)
   - Test restart functionality
   - Check all resource links
   - Test on mobile and desktop

2. **Cross-browser Testing**:
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

3. **Privacy Verification**:
   - Confirm no network requests for state
   - Verify state clears on page reload
   - Check browser dev tools for storage

## Future Enhancements (Optional)

- [ ] Add progress saving to localStorage (optional, user opt-in)
- [ ] Add "Print this guidance" functionality
- [ ] Add step completion checkmarks
- [ ] Add estimated time for each step
- [ ] Add "Share this resource" (anonymously)
- [ ] Add language toggle (FR/EN)
- [ ] Add dark mode support

## Notes

- **No metadata export**: Removed `Metadata` export since this is now a client component
- **No external dependencies**: Uses only React hooks and Next.js Link
- **Tailwind CSS**: All styling uses Tailwind utility classes
- **Performance**: Client-side only, minimal bundle size impact
- **SEO**: Consider adding a static version for SEO if needed

## Support

For questions or issues with this implementation:
- Check the main platform documentation
- Review the strategic brief requirements
- Test in development mode: `npm run dev`
