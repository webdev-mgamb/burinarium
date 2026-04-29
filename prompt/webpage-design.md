# Implementation Plan: Burinarium Webpage

## Objective
Create a responsive, mobile-first, luxury-minimalist webpage to showcase the plant specimens collected in the Burinarium.

## Key Files & Context
- `index.html`: Main structure.
- `style.css`: Luxury-minimalist styling.
- `app.js`: Interactive elements (modal, filtering).
- Plant data sourced from `.md` files in the workspace.

## Implementation Steps

### 1. Structure (HTML)
- **Header:** Logo ("BURINARIUM") and simple links (Plants, About, Safety).
- **Hero:** "Objavte krásu v obyčajnom" (Discover beauty in the common).
- **Main:** A `<grid>` for plant cards.
- **Card Template:** Image placeholder, catchy title, Latin name.
- **Modal:** A hidden container that populates with plant details when a card is clicked.

### 2. Styling (CSS)
- Use **Mobile-First** media queries.
- **Soft Look:** Rounded corners (`12px`), subtle box-shadows, and generous padding.
- **Luxury Look:** High contrast in typography sizes, letter spacing for headings, and a muted earth-tone palette.
- **Responsiveness:** CSS Grid for 1-column on mobile, 2 on tablets, 3 on desktops.
- **Animations:** Gentle fade-ins and smooth transitions for the modal.

### 3. Interactivity (JavaScript)
- **Data Object:** Create a JSON-like object containing data from the `.md` files.
- **Render Cards:** Dynamically generate cards from the data object.
- **Modal Logic:** Handle "Open" and "Close" states. Populate the modal with the "Plant's Story", "Human Connection", and "Safety Notice".
- **Performance:** Use `IntersectionObserver` for lazy-loading images.

### 4. Data Extraction
I will include the following plants:
- Taraxacum officinale
- Capsella bursa-pastoris
- Glechoma hederacea
- Geranium pusillum
- Malva neglecta
- Medicago lupulina
- Stellaria media
- Erigeron canadensis
- Elymus repens
- Verbascum

## Verification & Testing
- Check responsiveness on mobile, tablet, and desktop views in the browser.
- Verify that all plant details are correctly displayed in the modal.
- Test loading speed (minimal assets).
- Ensure all safety notices are clearly visible.
