(function() {
  const configUrl = localStorage.getItem('customizer_config_url');
  
  // Helper: Applies branding
  function applyBranding(branding) {
    if (branding.logoUrl) {
      const logoImg = document.querySelector('.hl-header-logo img');
      if (logoImg) logoImg.src = branding.logoUrl;
    }
    if (branding.primaryColor) {
      document.body.style.setProperty('--agency-primary', branding.primaryColor);
    }
    if (branding.dashboardTitle) {
      const titleEl = document.querySelector('.hl-dashboard-title');
      if (titleEl) titleEl.textContent = branding.dashboardTitle;
    }
  }

  // Helper: Add header buttons
  function applyHeaderButtons(headerButtons) {
    const navBar = document.querySelector('.hl-header-nav');
    if (!navBar || !headerButtons) return;
    headerButtons.forEach(btn => {
      const button = document.createElement('a');
      button.className = 'custom-header-btn';
      button.href = btn.url;
      button.innerHTML = `<span class="icon-${btn.icon}"></span> ${btn.label}`;
      navBar.appendChild(button);
    });
  }

  // Helper: Add user menu items
  function applyUserMenu(userMenu) {
    const menu = document.querySelector('.hl-user-menu');
    if (!menu || !userMenu) return;
    userMenu.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}">${item.label}</a>`;
      menu.appendChild(li);
    });
  }

  // Helper: Widget display toggles
  function applyWidgets(widgets) {
    widgets.forEach(widget => {
      const widgetEl = document.querySelector(`.hl-widget-${widget.name.toLowerCase()}`);
      if (widgetEl) widgetEl.style.display = widget.isVisible ? 'block' : 'none';
    });
  }

  // Helper: Feature toggles and UI tweaks
  function applyDashboardFeatures(cfg) {
    // Example for autoSave and saveButtonMove toggles
    if (cfg.autoSave && cfg.autoSave.isEnabled) {
      document.body.classList.add('customizer-autosave');
      // Implement auto-save logic here...
    }
    if (cfg.saveButtonMove && cfg.saveButtonMove.isEnabled) {
      const saveBtn = document.querySelector('.hl-save-btn');
      if (saveBtn) saveBtn.style.position = 'fixed'; // Example
    }
    // Extend for additionalInfoSearch, unreadCounter, etc.
  }

  // Helper: Feature toggles
  function applyFeatureToggles(toggles) {
    if (toggles.showNotifications === false) {
      const notifications = document.querySelector('.hl-notifications');
      if (notifications) notifications.style.display = 'none';
    }
    // Extend for any other toggles
  }

  // Helper: Add integrations (e.g., iframes)
  function applyIntegrations(integrations) {
    integrations.forEach(integration => {
      if (integration.type === 'iframe') {
        const iframe = document.createElement('iframe');
        iframe.src = integration.url;
        iframe.style.width = '100%';
        iframe.style.height = '400px';
        if (integration.position === 'sidebar') {
          const sidebar = document.querySelector('.hl-sidebar');
          if (sidebar) sidebar.appendChild(iframe);
        } else {
          // Default: dashboard
          document.body.appendChild(iframe);
        }
      }
    });
  }

  // Main: Fetch config and apply customizations
  if (configUrl) {
    fetch(configUrl)
      .then(res => res.json())
      .then(config => {
        if (config.branding) applyBranding(config.branding);
        if (config.headerButtons) applyHeaderButtons(config.headerButtons);
        if (config.userMenu) applyUserMenu(config.userMenu);
        if (config.widgets) applyWidgets(config.widgets);
        if (config.dashboardCustomizer) applyDashboardFeatures(config.dashboardCustomizer);
        if (config.featureToggles) applyFeatureToggles(config.featureToggles);
        if (config.integrations) applyIntegrations(config.integrations);
        // ...Add more as needed for your agency's requirements
      })
      .catch(err => console.error('Customizer config fetch failed', err));
  } else {
    console.warn('No customizer config URL set in localStorage.');
  }
})();