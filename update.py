import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

# The old careers li
old_careers_li = '<li class="nav-item"><a href="careers.html" class="nav-link" id="nav-link-careers">Careers</a></li>'

# The new careers li with dropdown
new_careers_li = '''          <li class="nav-item dropdown-trigger">
            <a href="careers.html" class="nav-link" id="nav-link-careers">Careers</a>
            <div class="dropdown-menu" id="header-careers-dropdown">
              <a href="careers.html#openings" class="dropdown-item-link">Current Openings</a>
              <a href="careers.html#culture" class="dropdown-item-link">Work Culture</a>
              <a href="careers.html#early-careers" class="dropdown-item-link">Early Careers</a>
              <a href="careers.html#apply" class="dropdown-item-link">Apply Now</a>
            </div>
          </li>'''

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We replace the old li, handling possible extra spaces
    # It might be indented, so let's do a regex replacement just in case
    # or just simple replace
    if old_careers_li in content:
        content = content.replace(old_careers_li, new_careers_li.strip())
    else:
        # try regex for more flexible match
        pattern = re.compile(r'<li class="nav-item">\s*<a href="careers\.html" class="nav-link" id="nav-link-careers">Careers</a>\s*</li>')
        content = pattern.sub(new_careers_li.strip(), content)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file}")

# Also update CSS
css_path = os.path.join('assets', 'css', 'style.css')
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Make mega-menu more compact
css_content = re.sub(
    r'\.mega-menu\s*\{[^}]*z-index:\s*1001;[^}]*gap:\s*24px;',
    r'''.mega-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px) scaleY(0.95);
  transform-origin: top center;
  width: max-content;
  min-width: 780px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-mega-menu);
  opacity: 0;
  visibility: hidden;
  z-index: 1001;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.2fr;
  gap: 24px;''',
    css_content
)

# Add dropdown-menu CSS
dropdown_css = '''
/* Dropdown Menu Layout */
.dropdown-trigger:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0) scaleY(1);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px) scaleY(0.95);
  transform-origin: top center;
  min-width: 220px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-mega-menu);
  opacity: 0;
  visibility: hidden;
  z-index: 1001;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: opacity 250ms var(--ease-framer), transform 250ms var(--ease-framer), visibility 250ms var(--ease-framer);
  backdrop-filter: var(--backdrop-blur);
  -webkit-backdrop-filter: var(--backdrop-blur);
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 8px 8px 8px;
  border-style: solid;
  border-color: transparent transparent var(--border-color) transparent;
}

.dropdown-item-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
  display: block;
}

.dropdown-item-link:hover {
  color: var(--accent);
  background-color: var(--accent-light);
  transform: translateX(4px);
}
'''

if '.dropdown-menu' not in css_content:
    # Append after .mega-menu rules
    css_content += dropdown_css

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)
print("Updated CSS")

