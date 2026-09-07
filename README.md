# FullStackFolio ⚡

A modern, clean, responsive, and customizable portfolio template built by **ZNteam**.

This project helps developers and professionals create their own personal portfolio websites quickly and easily. Clone it, update the configuration, and publish a site that presents your skills, experience, projects, and professional presence.

FullStackFolio is designed, developed, and maintained by ZNteam.

---

## ✨ Features

- Responsive layout across desktop and mobile
- Personal introduction and greeting section
- Skills and technologies with Font Awesome icons
- Proficiency bars for your main stacks
- Education history
- Work experience cards
- Open-source GitHub projects (pinned repositories)
- Featured / big projects
- Achievements and certifications
- Blogs (manual entries or Medium feed)
- Talks and presentations
- Podcast embeds
- Contact section
- Social media integration
- Twitter / X timeline support
- Light and dark theme toggle
- Theme color customization
- GitHub profile integration
- Resume button and resume section
- Splash screen with Lottie animation
- Enable or disable any section from one config file
- Easy configuration through `src/portfolio.js`

---

## 🚀 Getting Started

Use this ZNteam template as the starting point for your own portfolio.

```bash
git clone [PROJECT_REPOSITORY_URL]
cd fullstackfolio
npm install
npm start
```

The app runs at `http://localhost:3000`.

### Production build

```bash
npm run build
```

### GitHub integration (optional)

Copy the environment example file and add your own values:

```bash
cp env.example .env
```

Then edit `.env`:

```bash
REACT_APP_GITHUB_TOKEN=YOUR_GITHUB_TOKEN
GITHUB_USERNAME=YOUR_GITHUB_USERNAME
USE_GITHUB_DATA=true
# MEDIUM_USERNAME=YOUR_MEDIUM_USERNAME
```

- Create a GitHub personal access token with `public_repo` (or read-only equivalent) access if you want to load pinned repositories.
- Keep `.env` out of version control. It is already listed in `.gitignore`.
- Set `USE_GITHUB_DATA=false` if you do not want to fetch GitHub data.

---

## ⚙️ Customization

Almost all content lives in **`src/portfolio.js`**. Customize the configuration in that file to personalize your portfolio.

### Personal information

Update `greeting`:

- `username` — shown in the header logo and splash screen
- `title` — main heading
- `subTitle` — short introduction
- `resumeLink` — public URL to your resume (leave empty to hide the button)
- `displayGreeting` — show or hide the greeting section

Update page title and SEO tags in `public/index.html` and `public/manifest.json`.

### Social media links

Edit `socialMediaLinks`. Replace placeholders such as `YOUR_GITHUB_USERNAME` with your profiles. Leave a field as `""` to hide that icon. Set `display` to `false` to hide all social icons.

### Skills

Edit `skillsSection`:

- `skills` — bullet points about what you do
- `softwareSkills` — icon list (use Font Awesome class names)
- `display` — show or hide the section

### Skill proficiency

Edit `techStack` to change stack names and `progressPercentage` values. Set `viewSkillBars` to `false` to hide the bars.

### Education

Edit `educationInfo.schools`. Each school can include a name, logo, degree, dates, description, and bullets. Set `display` to `false` to hide the section.

### Work experience

Edit `workExperiences.experience`. Each role can include a company, logo, dates, description, and bullets. Set `display` to `false` to hide the section.

### Open-source projects

Edit `openSource`:

- `display` — show or hide the GitHub projects section
- `showGithubProfile` — show or hide the GitHub profile card in Contact

Pinned repositories are loaded through the GitHub GraphQL API when `USE_GITHUB_DATA=true`.

### Featured projects

Edit `bigProjects.projects`. Each project can include an image, name, description, and footer links (website, GitHub, demo). Set `display` to `false` to hide the section.

### Achievements

Edit `achievementSection.achievementsCards` with titles, images, descriptions, and links. Set `display` to `false` to hide the section.

### Blogs

Edit `blogSection.blogs` for manual posts, or set `displayMediumBlogs` to `"true"` and add `MEDIUM_USERNAME` in `.env` to load Medium articles. Set `display` to `false` to hide the section.

### Talks, podcasts, and Twitter

- `talkSection` — talks, slide links, and event links
- `podcastSection` — embed URLs
- `twitterDetails.userName` — Twitter / X handle without `@`

Set each section’s `display` flag to show or hide it.

### Contact and resume

- `contactInfo` — heading, subtitle, phone, and email
- `resumeSection.display` — dedicated resume item in the navigation
- `isHireable` — shown on the GitHub profile card as open for opportunities

### Enable or disable sections

Every major block has a `display` (or similar) flag in `src/portfolio.js`. Set it to `false` to remove that section from the page and navigation without deleting code.

### Images and animation

- Replace logos under `src/assets/images/`
- Replace the splash animation in `src/assets/lottie/` and update the import in `src/portfolio.js`

---

## 🎨 Theme Customization

Global colors and theme tokens live in:

```text
src/_globalColor.scss
```

Change that file to update buttons, text, cards, GitHub cards, backgrounds, and accent colors used across the template.

Related styling:

- `src/App.scss` — application shell
- `src/components/spaceBackground/spaceTheme.scss` — space-inspired visual theme
- Component and container SCSS files next to each UI piece

A light/dark toggle is included in the header (`src/components/ToggleSwitch`).

---

## 📁 Project Structure

```text
├── public/                  # HTML, icons, and PWA manifest
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── lottie/
│   ├── components/          # Reusable UI (header, cards, footer, social)
│   ├── containers/          # Page sections (greeting, skills, projects, …)
│   ├── contexts/            # Theme context
│   ├── hooks/
│   ├── portfolio.js         # Your content and section toggles
│   ├── _globalColor.scss    # Theme tokens
│   ├── App.js
│   └── index.js
├── .github/                 # Issue templates and deployment workflows
├── env.example              # GitHub / Medium environment placeholders
├── fetch.js                 # GitHub and Medium data fetch
├── package.json
└── README.md
```

---

## 📦 Technologies Used

- React
- JavaScript
- HTML5
- SCSS (Sass)
- GitHub GraphQL API
- Lottie (`lottie-react`)
- Font Awesome
- Color Thief
- react-reveal
- react-easy-emoji
- react-twitter-embed
- Create React App (`react-scripts`)
- dotenv
- gh-pages

---

## 🌐 Deployment

Build the site first, then deploy the `build/` folder. These instructions are for users of this ZNteam template.

### Vercel

1. Import the repository in Vercel.
2. Set the build command to `npm run build` and the output directory to `build`.
3. Add environment variables from `env.example` if you use GitHub or Medium data.
4. Deploy.

### Netlify

1. Import the repository in Netlify.
2. Set the build command to `npm run build` and the publish directory to `build`.
3. Add the same environment variables if needed.
4. Deploy.

### GitHub Pages

1. Confirm `homepage` in `package.json` is `"."` (already set for relative asset paths).
2. Add repository secrets if you use a custom GitHub token. The included workflow can use `GITHUB_TOKEN`.
3. Push to `master`, or run:

```bash
npm run deploy
```

The GitHub Action in `.github/workflows/deploy.yml` builds the app and publishes the `build` folder to the `gh-pages` branch.

You can also run the app with Docker:

```bash
docker build -t fullstackfolio .
docker run -p 3000:3000 fullstackfolio
```

---

## 👥 Built by ZNteam

This project is designed, developed, and maintained by **ZNteam**.

ZNteam is the team behind FullStackFolio: building the template, maintaining it, and improving the portfolio experience for developers and professionals.



---

## 🤝 Contributing

Contributions to this ZNteam project are welcome.

1. Open an issue to report a bug or propose an improvement.
2. Fork the repository and create a branch for your change.
3. Keep the template usable for other developers: prefer configuration and documentation over one-off personal content.
4. Run `npm run check-format` (and `npm run format` if needed).
5. Open a pull request with a clear description of the change.

Use the issue templates in `.github/ISSUE_TEMPLATE/` when reporting bugs or requesting features.

---
