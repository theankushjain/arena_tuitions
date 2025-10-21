# 🚀 Arena Tuitions - Deployment Guide

## Repository
**GitHub**: https://github.com/theankushjain/arena_tuitions

## Local Development

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.) - optional for editing

### Running Locally
Simply open `index.html` in your web browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or double-click the `index.html` file.

## Deployment Options

### Option 1: GitHub Pages (Free & Recommended)

1. **Enable GitHub Pages**:
   - Go to repository: https://github.com/theankushjain/arena_tuitions
   - Click **Settings**
   - Scroll to **Pages** section (left sidebar)
   - Under "Source", select `main` branch
   - Click **Save**

2. **Your website will be live at**:
   ```
   https://theankushjain.github.io/arena_tuitions/
   ```

3. **Custom Domain (Optional)**:
   - Add a `CNAME` file with your domain name
   - Update DNS settings to point to GitHub Pages
   - Enable HTTPS in GitHub Pages settings

### Option 2: Netlify (Free)

1. **Deploy via Drag & Drop**:
   - Go to https://netlify.com
   - Drag the project folder to Netlify
   - Your site is live instantly!

2. **Deploy via GitHub**:
   - Connect your GitHub account
   - Select the `arena_tuitions` repository
   - Build settings: Leave empty (static site)
   - Deploy!

3. **Features**:
   - Auto-deploy on git push
   - Free SSL certificate
   - Custom domain support
   - Forms support (for contact form)

### Option 3: Vercel (Free)

1. **Deploy**:
   - Go to https://vercel.com
   - Import your GitHub repository
   - Click Deploy

2. **Features**:
   - Instant deployments
   - Free SSL
   - Custom domains
   - Analytics

### Option 4: Traditional Web Hosting

1. **Upload via FTP/SFTP**:
   - Connect to your hosting (e.g., Hostinger, Bluehost, GoDaddy)
   - Upload all files to `public_html` or `www` folder
   - Done!

2. **Required Files**:
   ```
   index.html
   styles.css
   script.js
   logo.png
   ```

3. **Optional Files** (documentation):
   ```
   README.md
   *.md files (documentation)
   ```

## Git Workflow for Updates

### Making Changes

```bash
# 1. Make your edits to HTML, CSS, or JS files

# 2. Check what changed
git status

# 3. Stage your changes
git add .

# 4. Commit with a descriptive message
git commit -m "Update: description of changes"

# 5. Push to GitHub
git push
```

### Common Git Commands

```bash
# Check status
git status

# View commit history
git log --oneline

# Create a new branch for testing
git checkout -b feature/new-feature

# Switch back to main branch
git checkout main

# Pull latest changes (if working with others)
git pull

# View remote repository
git remote -v
```

## Continuous Deployment

If using GitHub Pages, Netlify, or Vercel:
- Every `git push` automatically updates your live website
- No manual upload needed
- Changes appear within 1-2 minutes

## Performance Optimization (Optional)

### Before Deployment

1. **Minify CSS** (optional):
   ```bash
   # Use online tools or:
   npm install -g clean-css-cli
   cleancss -o styles.min.css styles.css
   ```

2. **Minify JavaScript** (optional):
   ```bash
   npm install -g uglify-js
   uglifyjs script.js -o script.min.js
   ```

3. **Optimize Images**:
   - Compress `logo.png` using tools like TinyPNG
   - Convert to WebP for better performance

### After Deployment

1. **Test on Multiple Devices**:
   - Desktop browsers
   - Mobile browsers (iOS Safari, Chrome)
   - Tablets

2. **Test Performance**:
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

## DNS Configuration (Custom Domain)

### For GitHub Pages

Add these DNS records at your domain registrar:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: theankushjain.github.io
```

### For Netlify/Vercel

Follow their custom domain setup wizard in the dashboard.

## Monitoring & Analytics

### Add Google Analytics (Optional)

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Add Facebook Pixel (Optional)

Add before `</head>` in `index.html`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR-PIXEL-ID');
  fbq('track', 'PageView');
</script>
```

## Troubleshooting

### Issue: Images not showing
- Check file paths are correct
- Ensure `logo.png` is in the same folder as `index.html`
- Check file names match exactly (case-sensitive on some servers)

### Issue: CSS/JS not loading
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check file paths in HTML
- Verify files uploaded to server

### Issue: Changes not appearing
- Clear browser cache
- Wait 1-2 minutes for CDN to update
- Check if you pushed to GitHub (`git status`)

## Backup Strategy

### Regular Backups
```bash
# Create a backup
git tag -a v1.0 -m "Version 1.0 - Initial launch"
git push origin v1.0

# List all backups
git tag
```

### Restore from Backup
```bash
# View available versions
git tag

# Restore to a specific version
git checkout v1.0
```

## Security Checklist

- [x] No sensitive data in code (API keys, passwords)
- [x] HTTPS enabled (via GitHub Pages/Netlify/Vercel)
- [x] Privacy Policy added
- [x] Terms of Service added
- [x] Contact form data handled securely
- [ ] Add rate limiting for form submissions (optional)
- [ ] Add CAPTCHA to prevent spam (optional)

## Support

### Repository
https://github.com/theankushjain/arena_tuitions

### Issues
Report issues or request features:
https://github.com/theankushjain/arena_tuitions/issues

### Contact
- Phone: 9891440504
- Email: info@arenatuitions.com

---

**Last Updated**: October 22, 2025
**Status**: ✅ Deployed to GitHub
**Next Steps**: Enable GitHub Pages or deploy to Netlify/Vercel