<div align="center">
<h1>🎨 Moody</h1>

**A collaborative Moodboard Tool for Photographers, Models and Helpers.**

<br>

[![TypeScript](https://img.shields.io/badge/TypeScript-Frontend-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/github/license/mitaku-dev/Moody?style=for-the-badge)](https://github.com/mitaku-dev/Moody/blob/master/LICENSE)

<br>

[Features](#-features) · [Architecture](#-architecture) · [Getting Started](#-getting-started) · [Mockups](#-mockups) · [Roadmap](#-roadmap) · [Project Status](#-project-status)

<br><br>
</div>

> [!NOTE]
> Moody is in **early development** and has not yet reached MVP state.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖼️ **Moodboard Canvas** | A free-form canvas to arrange and compose visual elements |
| 🤝 **Collaboration** | Real-time multi-user editing for photographers, models, and helpers *(planned)* |
| 🧰 **Toolbars & Properties** | Intuitive toolbars and element property panels for fine-grained control *(planned)* |

---

## 🏗️ Architecture

```
Moody/
└── moody-client/   ← React frontend
```

### Client

The frontend is written in **TypeScript** and handles the moodboard canvas, element rendering, and real-time collaboration. It is the sole component of the project at this stage.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **pnpm**

### Running the client

```bash
# Clone the repository
git clone https://github.com/mitaku-dev/Moody.git
cd Moody/moody-client

# Install dependencies
npm install

# Start the development server
npm run dev
```
---

## 🖼️ Mockups
 
### Dashboard
![Dashboard](https://raw.githubusercontent.com/mitaku-dev/Moody/master/mockup/dashboard.png)

The Dashboard is your central hub: get a quick overview of all open and closed projects including time and budget tracking at a glance.
 
### Moodboard Canvas
![Moodboard](https://raw.githubusercontent.com/mitaku-dev/Moody/master/mockup/moodboard.png)

The core of Moody. Build moodboards with annotations and labels, collaborate in real time with your team, and let Moody automatically generate a packlist and shopping list from your board. Save reusable Moods to speed up future shoots: For example, an Outdoor Shoot mood could bundle a camera, reflector, and other essentials, ready to drop into any project.
 
### Planner
![Planner](https://raw.githubusercontent.com/mitaku-dev/Moody/master/mockup/planner.png)
 
The Planner brings everything together in one focused view: where the shoot happens, what's planned, and what's needed. All without having to dig back into the moodboard.


---

## 🗺️ Roadmap

- [ ] **Phase 1 — Moodboard Canvas**
  Basic canvas with support for images, text, shapes, and other visual elements.

- [ ] **Phase 2 — Toolbars & UI**
  Toolbar, element property panels, and overall editing UI.

- [ ] **Phase 3 — Collaboration**
  Real-time multi-user editing via [Liveblocks](https://liveblocks.io) or [Yjs](https://yjs.dev).

---

## 📌 Project Status

| Component | Status |
|---|---|
| Moodboard Canvas | 🚧 In Progress |
| Toolbars & Properties | 🔜 Planned |
| Collaboration | 🔜 Planned |
| MVP | ⏳ Not yet reached |

---
