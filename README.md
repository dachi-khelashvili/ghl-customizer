# GHL Customizer

GHL Customizer is a lightweight JavaScript and JSON-based configuration system for customizing GoHighLevel (GHL) agency dashboards.  
It allows you to brand, extend, and modify the GHL interface using a single configuration file.

---

## Features

### 1. Branding
Apply your agency branding such as:
- Custom logo  
- Primary color theme  
- Custom dashboard title  

```json
"branding": {
  "logoUrl": "https://cdn.yoursite.com/logos/agency-logo.png",
  "primaryColor": "#0958a5",
  "dashboardTitle": "Welcome to Your Agency Portal"
}
```

### 2. Header Buttons
Add quick-access buttons to the GHL header.

```json
"headerButtons": [
  { "label": "Calendar", "icon": "calendar", "url": "/calendar" },
  { "label": "Conversations", "icon": "chat", "url": "/conversations" },
  { "label": "Help", "icon": "help", "url": "https://support.yoursite.com" }
]
```

### 3. User Menu Items
Add custom links to the user dropdown menu.

```json
"userMenu": [
  { "label": "Profile", "url": "/profile" },
  { "label": "Agency Settings", "url": "/settings" }
]
```

### 4. Widgets
Show or hide dashboard widgets.

```json
"widgets": [
  { "name": "Tasks", "isVisible": true },
  { "name": "Leads", "isVisible": false },
  { "name": "Reports", "isVisible": true }
]
```

### 5. Dashboard Customizer
Enable or disable dashboard features.

```json
"dashboardCustomizer": {
  "autoSave": { "isEnabled": true },
  "saveButtonMove": { "isEnabled": true },
  "unreadCounter": { "isEnabled": true }
}
```

### 6. Feature Toggles
Enable or disable specific UI elements.

```json
"featureToggles": {
  "showNotifications": true,
  "enableSmartListFilters": true,
  "embedGoogleMaps": false
}
```

### 7. Integrations
Embed third-party tools such as PandaDoc or a support chat directly into GHL.

```json
"integrations": [
  { "type": "iframe", "name": "PandaDoc", "url": "https://app.pandadoc.com", "position": "dashboard" },
  { "type": "iframe", "name": "Live Q&A", "url": "https://support.customurl.com", "position": "sidebar" }
]
```

---

## How It Works
1. The `ghl-customizer.js` script fetches your hosted `agency-config.json`.
2. It applies the configuration to your GoHighLevel dashboard dynamically.
3. Any time you update your JSON, your GHL portal reflects the changes automatically.

---

## Setup

1. **Host your config file**  
   Upload `agency-config.json` to GitHub or any HTTPS-accessible location.  
   Example:  
   ```
   https://cdn.jsdelivr.net/gh/yourusername/ghl-customizer@main/agency-config.json
   ```

2. **Add the script to GoHighLevel**  
   Go to **Settings → Custom JavaScript/CSS** and paste:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/yourusername/ghl-customizer@main/ghl-customizer.js"></script>
   ```

3. **Refresh your dashboard**  
   Your customizations should now appear.  
   Check the browser console for:  
   `Customizer script loaded!`

---

## File Structure
```
ghl-customizer/
├── agency-config.json
├── ghl-customizer.js
└── README.md
```

---

## Notes
- Always host your JSON config on a secure (HTTPS) URL.
- Do not include sensitive keys or credentials in your configuration.
- DOM selectors may need updates if GoHighLevel changes its UI.

---

## License
MIT License — free to use and modify.
