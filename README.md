# 💖 Valentine's Day Website - Multi-Photo Carousel Edition

## 🎉 Quick Setup

### 1. Add Your Couple Photos
The website features a **beautiful photo carousel** that displays multiple photos with smooth transitions!

**How to add your photos:**
1. Place all your couple photos in this folder: `C:\Users\sahil\OneDrive\Desktop\Krish GF\`
2. Rename them to: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`
   - **Tip:** You can use JPG, PNG, or any image format browsers support
3. **Recommended:** Use high-quality images (at least 800x800px)
4. **Best aspect ratio:** 4:3 or 16:9 for consistent display

**To add MORE photos (beyond 5):**
- Open `index.html`
- Find the carousel section (around line 34-52)
- Copy one of the existing slide blocks (lines 44-46):
```html
<div class="carousel-slide">
    <img src="photo6.jpg" alt="Our Memory 6" class="couple-photo">
</div>
```
- Paste it before the `<!-- Add more slides -->` comment
- Update `photo6.jpg` to your new photo name
- Repeat for as many photos as you want!

**To use FEWER photos:**
- Simply delete the carousel-slide blocks you don't need
- The carousel will automatically adjust

**Current setup:** 5 photo slots ready to use

---

### 2. Customize the Content

#### Update Her Nickname:
- Open `index.html`
- **Line 25:** Change `"Baby"` to her actual nickname
```html
<h1 class="main-title">Happy Valentine's Day, [HER NAME] 💖</h1>
```

#### Customize the Typewriter Message:
- Open `script.js`
- **Line 114:** Edit the romantic message that types out
```javascript
const text = "Your custom romantic message here 💕";
```

#### Personalize the Modal Popup Message:
- Open `index.html`
- **Lines 103-108:** Edit the heartfelt message that appears when clicking the button
- **Line 110:** Change the signature

---

### 3. Optional: Add Background Music
- Uncomment lines 117-121 in `index.html` (remove `<!--` and `-->`)
- Add a romantic instrumental MP3 file named `romantic-music.mp3` to the folder
- Music will auto-play when the modal opens

---

### 4. Open the Website

**Option 1:** Double-click `open-website.bat`

**Option 2:** Double-click `index.html`

**Option 3:** Right-click `index.html` → Open with → Your browser

---

## ✨ Features Included

### 🖼️ **Photo Carousel**
✅ Smooth fade transitions between photos  
✅ Auto-play (changes every 4 seconds)  
✅ Pause on hover to view a photo longer  
✅ Left/Right navigation arrows  
✅ Clickable indicator dots  
✅ Keyboard navigation (← → arrow keys)  

### 🎨 **Visual Design**
✅ Soft pastel pink and cream gradient background  
✅ Glassmorphism photo frame with glow effect  
✅ Floating animation on the entire frame  
✅ Gentle zoom on frame hover  
✅ Cute bouncing teddy bear with heart  

### 💕 **Romantic Features**
✅ 25 floating hearts animation in background  
✅ Typewriter effect for romantic message  
✅ Beautiful modal popup (not a basic alert!)  
✅ 150-piece confetti animation  
✅ Fully responsive (looks great on phones!)  
✅ Smooth transitions everywhere  

---

## 🎨 Customization Tips

### Change Colors:
Edit the color variables in `styles.css` (lines 11-19):
```css
--primary-pink: #FFB6C1;
--deep-pink: #FF69B4;
--cream: #FFF5E1;
```

### Adjust Carousel Speed:
- **Auto-play speed:** `script.js` line 6 (default: 4000ms = 4 seconds)
```javascript
const AUTO_PLAY_DELAY = 5000; // 5 seconds
```
- **Transition speed:** `styles.css` line 175 (default: 0.8s)
```css
transition: opacity 1.2s ease-in-out; /* slower transition */
```

### Change Typewriter Speed:
- `script.js` line 122 (default: 50ms per character)
```javascript
setTimeout(type, 80); // Slower typing
```

### Add More Floating Hearts:
- `script.js` line 96 (default: 25 hearts)
```javascript
for (let i = 0; i < 50; i++) { // More hearts!
```

---

## 🎯 Carousel Controls

1. **Auto-play:** Photos change automatically every 4 seconds
2. **Pause:** Hover over the photo carousel to pause auto-play
3. **Navigate:** Click ← → arrows on the sides
4. **Jump to photo:** Click any indicator dot at the bottom
5. **Keyboard:** Use ← → arrow keys on your keyboard

---

## 📱 Browser Compatibility
Works perfectly on all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iPhone & Android)

---

## 🎁 What Makes This Special

This isn't just a simple website - it's an **interactive love letter**:
- The carousel showcases your journey together
- Each animation is crafted for romance
- The typewriter builds anticipation
- The surprise button reveals your heart
- Confetti celebrates your love

---

## 🆘 Troubleshooting

**Q: Photos aren't showing?**  
A: Make sure photo files are named exactly `photo1.jpg`, `photo2.jpg`, etc. and are in the same folder as `index.html`

**Q: Carousel not working?**  
A: Check that `script.js` is in the same folder. Open browser console (F12) to see any errors.

**Q: Can I use different image names?**  
A: Yes! Just update the `src="photoX.jpg"` in `index.html` to match your filenames.

**Q: How do I change the aspect ratio?**  
A: Edit line 164 in `styles.css`: change `aspect-ratio: 4/3;` to `aspect-ratio: 16/9;` or `aspect-ratio: 1/1;` for square.

---

## 💝 Made with Love

This Valentine's website was crafted with care to help you express your feelings in a beautiful, modern way. 

**Happy Valentine's Day!** 🌹💖✨

---

Need more customization help? Just ask!
