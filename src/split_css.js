import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

const CSS_FILES = [
  'src/component/Footer.css',
  'src/component/TitleBar.css',
  'src/pages/HomePro.css',
  'src/pages/Industries.css',
  'src/pages/ProjectsPage.css',
  'src/pages/home.css'
];

async function processCssFiles() {
  for (const relativePath of CSS_FILES) {
    console.log(`Processing: ${relativePath}`);
    const fullPath = path.join(process.cwd(), relativePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${fullPath}`);
      continue;
    }

    const cssContent = fs.readFileSync(fullPath, 'utf8');
    
    let mobileRoot = postcss.root();
    let tabletRoot = postcss.root();
    
    // Parse the CSS
    const root = postcss.parse(cssContent);
    
    // We will extract max-width media queries that target tablet (<1025px) and mobile (<768px)
    const toRemove = [];
    
    root.walkAtRules('media', (rule) => {
      const p = rule.params;
      
      // Determine if this is a mobile or tablet rule based on max-width
      const maxWMatch = p.match(/max-width:\s*(\d+)px/);
      if (maxWMatch) {
        const width = parseInt(maxWMatch[1], 10);
        
        // Let's copy the entire rule
        const ruleClone = rule.clone();
        
        if (width <= 768) {
          // mobile
          mobileRoot.append(ruleClone);
          toRemove.push(rule);
        } else if (width <= 1024) {
          // tablet
          tabletRoot.append(ruleClone);
          toRemove.push(rule);
        } else if (width < 1200) {
          // it's a small desktop/laptop, user said leave desktop fixed, but if they want tablet/mobile separate, 
          // let's leave 1200px rules in original.
        }
      }
    });

    // Remove the extracted rules from original root
    toRemove.forEach(rule => {
      // Also remove preceding comment if it says "RESPONSIVE"
      let prev = rule.prev();
      while (prev && prev.type === 'comment') {
        const text = prev.text.toLowerCase();
        if (text.includes('responsive') || text.includes('=')) {
          const toDel = prev;
          prev = prev.prev();
          toDel.remove();
        } else {
          break;
        }
      }
      rule.remove();
    });

    // Save outputs if we found any mobile/tablet
    const parsedPath = path.parse(fullPath);
    
    if (mobileRoot.nodes.length > 0) {
      const mobilePath = path.join(parsedPath.dir, `${parsedPath.name}Mobile.css`);
      fs.writeFileSync(mobilePath, mobileRoot.toString());
      console.log(`Created ${mobilePath}`);
    }

    if (tabletRoot.nodes.length > 0) {
      const tabletPath = path.join(parsedPath.dir, `${parsedPath.name}Tablet.css`);
      fs.writeFileSync(tabletPath, tabletRoot.toString());
      console.log(`Created ${tabletPath}`);
    }

    // Rewrite original file
    if (toRemove.length > 0) {
      fs.writeFileSync(fullPath, root.toString());
      console.log(`Updated original ${fullPath}`);
    }
  }
}

processCssFiles().catch(console.error);
